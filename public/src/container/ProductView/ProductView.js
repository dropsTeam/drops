import React from 'react';

import styles from './productView.module.css';

export default class ProductView extends React.Component {


    clearSrc;
    zoomLevel = 2;



    constructor(props) {
        super(props);
        this.imgMouseMove.bind(this);
        this.imgMouseOver.bind(this);
        this.imgMouseOut.bind(this);
        this.image = React.createRef();
        this.zoom = React.createRef();
        this.zoomImage = React.createRef();
        this.imgLink = React.createRef();
        this.state = {
            showZoom: 'hidden'
        }
    }



    imgMouseOver = (e) => {
        // this.zoom.classList.add('show', 'loading');
        this.setState({ ...this.state, showZoom: 'visible' });

        clearTimeout(this.clearSrc);

        let posX, posY, touch = false;

        if (e.touches) {
            posX = e.touches[0].clientX;
            posY = e.touches[0].clientY;
            touch = true;
        } else {
            posX = e.clientX;
            posY = e.clientY;

        }

        touch
            ? this.zoom.current.style.top = `${posY - this.zoom.current.offsetHeight / 1.25}px`
            : this.zoom.current.style.top = `${posY - this.zoom.current.offsetHeight / 2}px`;
        this.zoom.current.style.left = `${posX - this.zoom.offsetWidth / 2}px`;

        let originalImage = this.imgLink.current.getAttribute('href');

        this.zoomImage.current.setAttribute('src', originalImage);

    }

    imgMouseOut = () => {
        // remove scaling to prevent non-transition 
        this.zoom.current.style.transform = null;
        this.zoomLevel = 2;
        this.setState({ ...this.state, showZoom: 'hidden' })
        this.clearSrc = setTimeout(() => {
            this.zoomImage.current.setAttribute('src', '');
        }, 250);
    }

    imgMouseMove = (e) => {
        e.preventDefault();

        let posX, posY, touch = false;

        if (e.touches) {
            posX = e.touches[0].clientX;
            posY = e.touches[0].clientY;
            touch = true;
        } else {
            posX = e.clientX;
            posY = e.clientY;

        }

        

        this.zoom.current.style.top = `${posY - this.zoom.current.offsetHeight / 1}px`;
        this.zoom.current.style.left = `${posX - this.zoom.current.offsetWidth / 2}px`;

        let percX = (posX - this.image.current.offsetLeft) / this.image.current.offsetWidth,
            percY = (posY - this.image.current.offsetTop) / this.image.current.offsetHeight;

        let zoomLeft = -percX * this.zoomImage.current.offsetWidth + (this.zoom.current.offsetWidth / 2),
            zoomTop = -percY * this.zoomImage.current.offsetHeight + (this.zoom.current.offsetHeight / 2);

        this.zoomImage.current.style.left = `${zoomLeft}px`;
        this.zoomImage.current.style.top = `${zoomTop}px`;
    }

    render() {



        let toRender = (
            <div style={{ backgroundColor: 'white', margin: '0px 5%', padding: '30px' }}>

                <div className="row">
                    <div className="col-md-4 col-sm-12 " style={{ textAlign: 'center', position: 'relative' }} >

                        <div style={{ position: 'sticky', top: '20px' }}>
                            <div className="row">
                                <div className="col-2 ">
                                    <div className="row" style={{ cursor: 'pointer' }}>
                                        <div className="col-12 my-2" >
                                            <img src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-12 my-2">
                                            <img src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-12 my-2">
                                            <img src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-12 my-2">
                                            <img src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png" className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-12 my-2">
                                            <img src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className={'col-10 ' + ' ' + styles.image} ref={this.image} onMouseOver={this.imgMouseOver} onMouseOut={this.imgMouseOut} onMouseMove={this.imgMouseMove}>
                                    <a href="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png" ref={this.imgLink} target="_blank">
                                        <img style={{ width: '20vmax' }} src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png" className="img-fluid mx-auto" alt="" />
                                    </a>

                                </div>
                            </div>

                            <div className={styles.zoom + ' ' + styles.show} style={{ visibility: this.state.showZoom }} ref={this.zoom}>
                                <img className={styles.zoomImage} ref={this.zoomImage} src="" alt="" />
                            </div>


                            <div className="row my-3" >
                                <button className="col my-3 mx-1 py-3 " style={{ backgroundColor: '#FF9F00', borderRadius: '4px', border: 'none', textAlign: 'center', fontWeight: 500, color: 'white' }}>
                                    ADD TO CART
                            </button>
                                <button className="col my-3 mx-1 py-3 " style={{ backgroundColor: '#FB641B', borderRadius: '4px', border: 'none', textAlign: 'center', fontWeight: 500, color: 'white' }}>
                                    BUY NOW
                            </button>
                            </div>
                        </div>


                    </div>




                    <div className="col-md-8 col-sm-12" style={{ padding: '0 4vw' }}>
                        <ol className="breadcrumb" style={{ backgroundColor: 'white' }}>
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>

                        <div className="my-3" style={{ fontSize: '19px', fontWeight: 500 }}>
                            Apple iPhone 11 (Black, 64 GB)
                    </div>

                        <div>
                            <span href="#" className="badge badge-success">4.7 &#9734;</span>
                            <span className="mx-2" style={{ fontWeight: 500, color: 'gray', fontSize: '14px' }}>
                                16,083 Ratings &  Reviews
                        </span>
                            <img className="img-fluid" style={{ width: '80px' }} src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fa_8b4b59.png" alt="" />
                        </div>

                        <div style={{ fontSize: '27px', fontWeight: 'bold' }} className="my-3">
                            ₹68,300
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
                                                <div className="col-3 my-2" >
                                                    <img style={{ border: '1.5px dotted rgb(156, 156, 156)', borderRadius: '5px', padding: '5px' }} src=" https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png " className="img-fluid " alt=" " />
                                                </div>
                                                <div className="col-3 my-2">
                                                    <img style={{ border: '1.5px dotted rgb(156, 156, 156)', borderRadius: '5px', padding: '5px' }} src=" https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png " className="img-fluid " alt=" " />
                                                </div>
                                                <div className="col-3 my-2">
                                                    <img style={{ border: '1.5px dotted rgb(156, 156, 156)', borderRadius: '5px', padding: '5px' }} src=" https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png " className="img-fluid " alt=" " />
                                                </div>
                                                <div className="col-3 my-2">
                                                    <img style={{ border: '1.5px dotted rgb(156, 156, 156)', borderRadius: '5px', padding: '5px' }} src=" https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png " className="img-fluid " alt=" " />
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className=" col-sm-12 col-md-6 ">
                                    <div className="row">
                                        <div className="col-4" style={{ fontWeight: 600, color: 'gray', fontSize: '14px', textAlign: 'center' }}>
                                            Storage
                                    </div>
                                        <div className="col-8">
                                            <div>
                                                <span className="badge badge-primary m-1" style={{ padding: '7px 10px', cursor: 'pointer' }}>68 GB</span>
                                                <span className="badge badge-light m-1" style={{ padding: '7px 10px', cursor: 'pointer' }}>128 GB</span>
                                                <span className="badge badge-light m-1" style={{ padding: '7px 10px', cursor: 'pointer' }}>228 GB</span>
                                                <span className="badge badge-light m-1" style={{ padding: '7px 10px', cursor: 'pointer' }}>528 GB</span>
                                                <span className="badge badge-light m-1" style={{ padding: '7px 10px', cursor: 'pointer' }}>1 TB</span>
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
                                                <li>128 GB ROM</li>
                                                <li>15.49 cm (6.1 inch) Liquid Retina HD Display</li>
                                                <li>12MP + 12MP | 12MP Front Camera</li>
                                                <li>A13 Bionic Chip Processor</li>

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
                            <div className="col-2" style={{ fontWeight: 600, color: 'gray', fontSize: '14px' }}>
                                Seller
            </div>
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
                                The iPhone 11 features dual 12 MP Ultra Wide (13mm) and Wide (26mm) cameras with 4K video recording up to 60 fps. The Ultra Wide camera provides 120° field of view, letting you capture four times more scene, and the Wide camera provides 100% Focus Pixels
                                for up to three times faster autofocus in low light.Featuring a 15.49-cm (6.1) all-screen Liquid Retina LCD and a glass and aluminum design, the iPhone 11 is as beautiful as it gets. Also, the IP68 rating ensures that is water-resistant
                                up to 2 meters for 30 minutes.
                        </div>

                        </div>

                        <div style={{ border: '1px solid #dadada', borderRadius: '4px', marginTop: '50px', padding: '20px' }}>
                            <h3>Specifications</h3>

                            <hr />

                            <div className="mt-4" style={{ fontSize: '14px', fontFamily: 'sans-serif' }}>
                                <div className="row mt-3 ">
                                    <div className="col-2" style={{ color: '#8d8f91', fontWeight: 500 }}>In The Box</div>
                                    <div className="col-10">Handset, EarPods with Lightning Connector, Lightning to USB Cable, USB Power Adapter, Documentation</div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col-2" style={{ color: '#8d8f91', fontWeight: 500 }}>Model Number </div>
                                    <div className="col-10" >MWM02HN/A</div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col-2" style={{ color: '#8d8f91', fontWeight: 500 }}>Model Name</div>
                                    <div className="col-10" >iPhone 11</div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col-2" style={{ color: '#8d8f91', fontWeight: 500 }}>Color</div>
                                    <div className="col-10" >Black</div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col-2" style={{ color: '#8d8f91', fontWeight: 500 }}>Browse Type</div>
                                    <div className="col-10" >Smartphones</div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );

        return (toRender);
    }
}
