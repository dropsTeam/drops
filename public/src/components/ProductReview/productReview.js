import React from 'react';
import { Progress } from 'antd';
import ProductRating from './ProductRatings/ProductRatings'


class ProductReviews extends React.PureComponent {

    totalReviews = 11843;
    averageRating = 4.5;
    ratings = [60, 20, 5, 4, 10];

    user = this.props.user;

    helpfulMembers = ['ds', 'ds']

    render() {
        return (
            <React.Fragment>
                <h3> Ratings & Reviews <button className='btn btn-primary btn-sm float-right' > Rate Product</button> </h3>
                <hr />

                <div className='row' >
                    <div className='col-sm-12 col-md-4'>
                        <h1 style={{ textAlign: 'center' }} > <span className="badge badge-success">{this.averageRating} &#9734;</span> </h1>
                    </div>
                    <div className='col-sm-12 col-md-8'>
                        <Progress percent={this.ratings[0]} strokeColor='#52C41B' />
                        <Progress percent={this.ratings[1]} strokeColor='#1990FF' />
                        <Progress percent={this.ratings[2]} strokeColor='#FF9F01' />
                        <Progress percent={this.ratings[3]} strokeColor='red' />
                        <Progress percent={this.ratings[4]} strokeColor='#FF4D4F' />
                    </div>
                </div>

                <ProductRating fullName={'Jashanpreet Singh'} helpful={30} timeStamp={'10 min ago'} isHelpful={this.helpfulMembers.includes(this.props.user.gId)} rating={4.5} title={'Such a nice product'} discription={'This is my first Apple Product Purchase. I have been an Android User since the beginning of Smartphone era. I am not an professional Reviewer so whatever I am writing here is totally a unbiased review, as a common man would convey if asked for feedback. So please read if you are interested on a unbiased and non-techy review.'} />

                <a style={{ fontWeight: 600, textDecoration: 'none', padding: '30px 0px', color: 'blue', fontSize: '17px' }}>Load More</a>

            </React.Fragment>
        )
    }
}

export default ProductReviews;
