import React from 'react';
import { Progress, Modal, Rate, Form, Input } from 'antd';
import ProductRating from './ProductRatings/ProductRatings'
import { mainHttp } from '../../../Axios/Axios';

class ProductReviews extends React.PureComponent {

    user = this.props.user;

    helpfulMembers = ['ds', 'ds']

    state = {
        reviews: [],
        stats: {
            totalReviews: 11843,
            averageRating: 4.5,
            ratings: [60, 20, 5, 4, 10]
        },
        postModalVis: false,
        reviewForm: {
            title: '',
            discription: '',
            rating: 1
        }
    }

    page = 0;


    async fetch() {
        try {
            const newReviews = await mainHttp.get(`/products/reviews/?productId=${this.props.productId}&page=${this.page}`);
            let newArr = [...this.state.reviews];
            newArr = newArr.concat(newReviews.data);
            console.log(newArr);

            this.setState({
                ...this.state,
                reviews: [...newArr]
            });

            this.page++;

        } catch (err) {
            alert('error occured loading the reviews');
            console.log(err)
        }
    }

    componentDidMount() {
        this.fetch();
    }

    togglePostModal = (isVisible) => {
        const newState = { ...this.state, postModalVis: isVisible };
        this.setState(newState);
    }

    postHelpful = async (index) => {
        try {
            await mainHttp.post('/products/review/helpful', { reviewId: this.state.reviews[index]._id });

            let newArr = [...this.state.reviews];
            newArr[index].helpful += 1;
            newArr[index].helpfulMembers.push(this.props.user.gId);

            this.setState({ ...this.state, reviews: [...newArr] });

        } catch (err) {
            console.log(err);
            alert('Error Occured posting the helpful request.');
        }
    }

    removeHelpful = async (index) => {
        try {
            await mainHttp.delete(`/products/review/helpful/${this.state.reviews[index]._id}`);

            let newArr = [...this.state.reviews];
            
            newArr[index].helpful -= 1;
            
            const mainIndex = newArr[index].helpfulMembers.indexOf(this.props.user.gId);
            newArr[index].helpfulMembers.splice(mainIndex, 1);

            this.setState({ ...this.state, reviews: [...newArr] });

        } catch (err) {
            alert('Error Occured posting the delete helpful request.');
        }
    }

    submitReview = async () => {
        try {
            const review = await mainHttp.post('/products/review', { productId: this.props.productId, ...this.state.reviewForm });
            let newArr = [...this.state.reviews];
            newArr.unshift(review);
            this.setState({ ...this.state, review: [...newArr] });
            this.togglePostModal(false);

        } catch (err) {
            console.log(err);
            alert('Error occured submitting the review.');
        }
    }

    render() {

        const mapReview = this.state.reviews.map((item, index) => {
            return (
                <ProductRating
                    key={index}
                    fullName={item.user.fullName}
                    helpful={item.helpfulMembers.length}
                    timeStamp={item.timeStamp}
                    isHelpful={item.helpfulMembers.includes(this.props.user.gId)}
                    rating={item.rating}
                    title={item.title}
                    index={index}
                    postHelpful={this.postHelpful}
                    removeHelpful={this.removeHelpful}
                    discription={item.discription} />
            )
        });

        return (
            <React.Fragment>
                <h3> Ratings & Reviews <button className='btn btn-primary btn-sm float-right' onClick={() => this.togglePostModal(true)} > Rate Product</button> </h3>
                <hr />

                <div className='row' >
                    <div className='col-sm-12 col-md-4'>
                        <h1 style={{ textAlign: 'center' }} > <span className="badge badge-success">{this.state.stats.averageRating} &#9734;</span> </h1>
                    </div>
                    <div className='col-sm-12 col-md-8'>
                        <Progress percent={this.state.stats.ratings[0]} strokeColor='#52C41B' />
                        <Progress percent={this.state.stats.ratings[1]} strokeColor='#1990FF' />
                        <Progress percent={this.state.stats.ratings[2]} strokeColor='#FF9F01' />
                        <Progress percent={this.state.stats.ratings[3]} strokeColor='red' />
                        <Progress percent={this.state.stats.ratings[4]} strokeColor='#FF4D4F' />
                    </div>
                </div>

                {mapReview}
                <a style={{ fontWeight: 600, textDecoration: 'none', padding: '30px 0px', color: 'blue', fontSize: '17px' }} onClick={this.fetch}>Load More</a>

                <Modal
                    title="Add a review"
                    visible={this.state.postModalVis}
                    onOk={this.submitReview}
                    onCancel={() => this.togglePostModal(false)}>

                    <React.Fragment>
                        <p>Rating : <Rate className='ml-2' defaultValue={1} onChange={(event) => { const newState = { ...this.state, ...this.state.reviewForm }; newState.reviewForm.rating = event; this.setState(newState) }} /> </p>
                        <br />
                        <Form.Item label="Title">
                            <Input placeholder={'Title'} value={this.state.reviewForm.title} required={true} onChange={(event) => { const newState = { ...this.state, ...this.state.reviewForm }; newState.reviewForm.title = event.target.value; this.setState(newState) }} />
                        </Form.Item>

                        <p>Discription *</p>
                        <Input.TextArea value={this.state.reviewForm.discription} onChange={(event) => { const newState = { ...this.state, ...this.state.reviewForm }; newState.reviewForm.discription = event.target.value; this.setState(newState) }} rows={5} placeholder={'Discription (Optional)'} />
                    </React.Fragment>

                </Modal>

            </React.Fragment>
        )
    }
}

export default ProductReviews;
