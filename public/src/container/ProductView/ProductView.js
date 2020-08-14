import React from 'react';
import { Modal, Form, Input, message } from 'antd';
import { connect } from 'react-redux';
import * as cartActions from '../../Redux/Actions/CartActions'

import ProductQNA from '../../components/ProductView/ProductQNA/ProductQNA';
import ProductReviews from '../../components/ProductView/ProductReview/productReview';
import ProductMediaView from '../../components/ProductView/ProductMediaView/ProductMediaView';
import { mainHttp } from '../../Axios/Axios';

class ProductView extends React.Component {

    clearSrc;
    zoomLevel = 2;

    constructor(props) {
        super(props);

        this.state = {


            data: {
                highlights: [''],
                dropdown: {
                    title: '',
                    options: ['']
                },
                aveageRaing: 0,
                totalReview: 0,
                media: [''],
                varients: [{ title: '', media: '' }],
                details: [{ key: '', value: '' }]
            },
            selected: {
                dropdown: { title: '', options: '' },
                varients: { title: '', media: '' },
            }
        }

    }

    componentDidMount() {
        this.fetch();

    }


    async fetch() {
        try {
            const product = await mainHttp.get(`/products/p/${this.props.match.params.id}`);
            
            if(!!!product.data.title) { this.props.history.goBack(); }

            this.setState({
                ...this.state,
                data: { ...product.data },
                selected: {
                    ...this.state.selected,
                    dropdown: {
                        ...this.state.selected.dropdown,
                        title: product.data.dropdown.title,
                        options: product.data.dropdown.options[0]
                    },
                    varients: {
                        ...this.state.selected.varients,
                        title: product.data.varients[0].title,
                        media: product.data.varients[0].media
                    }
                }
            });


        } catch (err) {
            message.error('Error Occured !');
        }
    }


    submitReview = () => {
        alert(this.state.reviewForm.rating);
        this.changeModelView('reviewModel', false)
    }



    addToCart = _ => {
        this.props.$addToCart({
            productId: this.state.data._id,
            _id: 0,
            quantity: 1,
            price: this.state.data.price,
            varients: { ...this.state.selected.varients },
            dropdown: { ...this.state.selected.dropdown },
            title: this.state.data.title
        }, this.props.isAuthorised);
    }

    select(selectType, value) {
        if (selectType === 'dropdown') {
            const newState = { ...this.state, selected: { ...this.state.selected, dropdown: { ...this.state.selected.dropdown } } };
            newState.selected.dropdown.options = value;
            newState.selected.dropdown.title = this.state.data.dropdown.title;
            this.setState(newState);
        }
        if (selectType === 'varient') {
            const newState = { ...this.state, selected: { ...this.state.selected, varient: { ...this.state.selected.varient } } };
            newState.selected.varients.title = this.state.data.varients[value].title;
            newState.selected.varients.media = this.state.data.varients[value].media;
            this.setState(newState);
        }
    }



    render() {

        const MapHighlights = this.state.data.highlights.map((item, index) => {
            return (<li key={index}>{item}</li>)
        });

        const dropdownOptions = this.state.data.dropdown.options.map((item, index) => {
            return (
                <span key={index} onClick={() => this.select('dropdown', item)} className={(this.state.selected.dropdown.options === item) ? 'badge m-1 badge-primary' : 'badge m-1 '} style={{ padding: '7px 10px', cursor: 'pointer' }}>{item}</span>
            )
        });

        const varientMap = this.state.data.varients.map((item, index) => {
            return (
                <div onClick={() => this.select('varient', index)} key={index} className="col-3 my-2" >
                    <img style={{ border: (this.state.selected.varients.title === item.title) ? '1.5px solid rgb(156, 156, 156)' : '1.5px dotted rgb(156, 156, 156)', borderRadius: '5px', padding: '5px' }} src={item.media} className="img-fluid " alt=" " />
                    <span style={{ fontSize: '10px', overflow: 'scroll' }}>{item.title}</span>
                </div>
            )
        });

        const MapSpecifications = this.state.data.details.map((item, index) => {
            return (
                <div key={index} className="row mt-3 ">
                    <div className="col-2" style={{ color: '#8d8f91', fontWeight: 500 }}>{item.key}</div>
                    <div className="col-10">{item.value}</div>
                </div>
            )
        });


        let toRender = (
            <div style={{ backgroundColor: 'white', margin: '0px 5%', padding: '30px' }}>

                <div className="row">
                    <div className="col-md-4 col-sm-12 " style={{ textAlign: 'center', position: 'relative' }} >

                        <ProductMediaView data={this.state.data.media} addToCart={this.addToCart} />

                    </div>




                    <div className="col-md-8 col-sm-12" style={{ padding: '0 4vw' }}>
                        <ol className="breadcrumb" style={{ backgroundColor: 'white' }}>
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>

                        <div className="my-3" style={{ fontSize: '19px', fontWeight: 500 }}>
                            {this.state.data.title}
                        </div>

                        <div>
                            <span href="#" className="badge badge-success">{this.state.data.aveageRaing} &#9734;</span>
                            <span className="mx-2" style={{ fontWeight: 500, color: 'gray', fontSize: '14px' }}>
                                {this.state.data.totalReview} Ratings &  Reviews
                        </span>
                            <img className="img-fluid" style={{ width: '80px' }} src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png" alt="" />
                        </div>

                        <div style={{ fontSize: '27px', fontWeight: 'bold' }} className="my-3">
                            ${this.state.data.price}
                        </div>

                        <p>Available offers</p>

                        <div>
                            <h6><span className="fa fa-tag mx-2" style={{ color: 'green' }}></span> EMIs from <strong>Rs 3,070/month </strong><a href="">T&C </a></h6>

                            <h6> <span className="fa fa-tag mx-2" style={{ color: 'green' }}></span><strong> Bank Offer</strong> 5% Instant Discount on Visa Cards for First 3 Online Payments. <a href="">T&C</a></h6>

                            <h6> <span className="fa fa-tag mx-2" style={{ color: 'green' }}></span><strong> Bank Offer</strong> Extra 5% off* with Axis Bank Buzz Credit Card. <a href="">T&C</a></h6>
                            <h6> <span className="fa fa-tag mx-2" style={{ color: 'green' }}></span> EMIs from <strong>Rs 3,070/month </strong><a href="">T&C </a></h6>

                            <h6> <span className="fa fa-tag mx-2" style={{ color: 'green' }}></span><strong> Bank Offer</strong> 5% Instant Discount on Visa Cards for First 3 Online Payments. <a href="">T&C</a></h6>

                            <h6> <span className="fa fa-tag mx-2" style={{ color: 'green' }}></span><strong> Bank Offer</strong> Extra 5% off* with Axis Bank Buzz Credit Card. <a href="">T&C</a></h6>
                        </div>

                        <div className="row mx-3" style={{ marginTop: '40px' }}>

                            <div className="row">
                                <div className="col-sm-12 col-md-6">

                                    <div className="row ">
                                        <div className="col-3" style={{ fontWeight: 600, color: 'gray', fontSize: '14px' }}>
                                            Color
                                    </div>
                                        <div className="col-9">
                                            <div className="row " style={{
                                                cursor: 'pointer'
                                            }}>

                                                {varientMap}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className=" col-sm-12 col-md-6 ">
                                    <div className="row">
                                        <div className="col-4" style={{ fontWeight: 600, color: 'gray', fontSize: '14px', textAlign: 'center' }}>
                                            {this.state.data.dropdown.title}
                                        </div>
                                        <div className="col-8">
                                            <div>
                                                {dropdownOptions}
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="row mx-3" style={{ marginTop: '30px' }}>

                            <div className="row" >
                                <div className="col-sm-12 col-md-6">

                                    <div className="row ">
                                        <div className="col-4" style={{ fontWeight: 600, color: 'gray', fontSize: '14px' }}>
                                            Highlights

                                    </div>
                                        <div className="col-8">
                                            <ul style={{ fontSize: '14.5px', listStyle: 'disc' }}>
                                                {MapHighlights}

                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className=" col-sm-12 col-md-6 ">
                                    <div className="row">
                                        <div className="col-4" style={{ fontWeight: 600, color: 'gray', fontSize: '14px', textAlign: 'center' }}>
                                            Easy Payment Options
                                    </div>
                                        <div className="col-8">
                                            <ul style={{ fontSize: '14.5px', listStyle: 'disc' }}>
                                                <li>No cost EMI starting from ₹8,110/month</li>
                                                <li>Cash on Delivery</li>
                                                <li>Net banking & Credit/ Debit/ ATM card</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="row" style={{ marginTop: '20px' }}>
                            <div className="col-2" style={{ fontWeight: 600, color: 'gray', fontSize: '14px' }}>Seller</div>
                            <div className="col-10">
                                <span className="pl-6" style={{ textAlign: 'left', color: '#2874F0', fontSize: '14px', fontWeight: 'bold' }}>
                                    SuperComNet
                            </span>
                                <span className="badge badge-primary ml-2">4.7 &#9734;</span>
                                <ul className="mt-2">
                                    <li style={{ fontSize: '14px' }}>7 Days Replacement Policy*</li>
                                </ul>
                            </div>

                        </div>


                        <div className="row" style={{ marginTop: '20px' }}>
                            <div className="col-2" style={{ fontWeight: 600, color: 'gray', fontSize: '14px' }}>
                                Description
                        </div>
                            <div className="col-10">
                                {this.state.data.description}
                            </div>

                        </div>

                        <div style={{ border: '1px solid #dadada', borderRadius: '4px', marginTop: '50px', padding: '20px' }}>
                            <h3>Specifications</h3>

                            <hr />


                            <div className="mt-4" style={{ fontSize: '14px', fontFamily: 'sans-serif' }}>
                                {MapSpecifications}
                            </div>
                        </div>

                        <div style={{ border: '1px solid #dadada', borderRadius: '4px', marginTop: '50px', padding: '20px' }}>
                            <ProductQNA
                                user={this.props.user}
                                productId={this.props.match.params.id}
                                isAuthorised={this.props.isAuthorised} />
                        </div>

                        <div style={{ border: '1px solid #dadada', borderRadius: '4px', marginTop: '50px', padding: '20px' }}>
                            
                            <ProductReviews
                                aveageRaing={this.state.data.aveageRaing}
                                totalReview={this.state.data.totalReview}
                                user={this.props.user}
                                productId={this.props.match.params.id}
                                isAuthorised={this.props.isAuthorised} />
                        </div>


                    </div>
                </div>

            </div>
        );

        return (toRender);
    }
}

const mapPropsByState = (store) => {
    return {
        user: store.user,
        isAuthorised: store.isAuthorised
    }
}

const mapPropsByDispatch = dispatch => {
    return {
        $addToCart: (item, isAuthorised) => dispatch(cartActions.addToCart(item, isAuthorised))
    }
}

export default connect(mapPropsByState, mapPropsByDispatch)(ProductView);
