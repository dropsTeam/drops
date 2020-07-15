import React from 'react';

import './ProductView.css';


export default class ProductView extends React.Component {

    render() {

        let toRender = (
            <div>

                <section>
                    <div className="container-fluid">
                        <div className="row">

                            <div id="thumbnailWrapper" className="col-sm-5 " >
                                <div className="thumbnail">
                                    <img src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png" className="img-responsive" alt="" />

                                    <div className="caption">
                                        <div className="row buttons">

                                            <button className="btn  col-sm-4 col-sm-offset-2 btn-lg" style={{ backgroundColor: '#ff9f00', color: '#fff', fontSize: '1em' }}><span className="glyphicon glyphicon-shopping-cart"></span>&nbsp;ADD TO CART</button>


                                            <button className="btn col-sm-4 col-sm-offset-1 btn-lg" style={{ backgroundColor: '#fb641b', color: '#fff', fontSize: '1em' }}><i className="fa fa-bolt" style={{ fontSize: '1.2em' }}></i> BUY NOW</button>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="col-sm-7 desc" style={{float: 'right'}}>

                                <div>

                                    <ol className="breadcrumb col-sm-12" style={{ backgroundColor: 'transparent' }}>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Electronics</a></li>
                                        <li><a href="">Mobiles</a></li>
                                        <li><a href="">iPhone</a></li>
                                        <li className="active">iPhone X</li>
                                    </ol>

                                    <h4>Apple iPhone X (Silver 64GB)</h4>

                                    <div className="row">
                                        <div className="col-sm-2">
                                            <span className="label label-success">4.6 <span className="glyphicon glyphicon-star"></span></span>
                                        </div>

                                        <div className="col-sm-5">
                                            <strong>2,421 Ratings & Reviews</strong>
                                        </div>

                                    </div>

                                    <div>
                                        <h3>Rs 92,400</h3>
                                    </div>

                                    <div>

                                        <h5><span className="glyphicon glyphicon-calendar"></span> EMIs from <strong>Rs 3,070/month </strong><a href="">View Plans <i className="fa fa-chevron-right"></i></a></h5>

                                        <h5><span className="glyphicon glyphicon-tag"></span><strong> Bank Offer</strong> 5% Instant Discount on Visa Cards for First 3 Online Payments. <a href="">T&C</a></h5>

                                        <h5><span className="glyphicon glyphicon-tag"></span><strong> Bank Offer</strong> Extra 5% off* with Axis Bank Buzz Credit Card. <a href="">T&C</a></h5>

                                    </div>

                                    <br />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <a className="btn btn-default btn-block"><i className="fa fa-apple" style={{ fontSize: '25px' }}></i></a>
                                        </div>
                                        <div className="col-sm-9">

                                            <h5>Brand Warranty of 1 Year <a href="">Know More</a></h5>
                                        </div>
                                    </div>
                                    <br />

                                    <div className="row">

                                        <div className="col-sm-6">
                                            <strong>Color</strong>
                                            <br /><br />
                                            <button className="btn btn-default" style={{ width: '50px', border: '1px dashed #337ab7' }}><img src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/apple/apple-iphone-x-silver.png" className="img-responsive" alt="" /> </button>
                                            <button className="btn btn-default" style={{ width: '50px' }}><img src="https://cdn.mobilephonesdirect.co.uk/images/handsets/apple/apple-iphone-x-space-grey.png" className="img-responsive" alt="" /> </button>
                                        </div>

                                        <div className="col-sm-6">
                                            <strong>Storage</strong>
                                            <br />
                                            <br />
                                            <button className="btn btn-default" style={{ color: '#337ab7', border: '1px dashed #337ab7;' }}>64GB</button>
                                            <button className="btn btn-default">256GB</button>
                                        </div>

                                    </div>

                                    <br /><br />


                                    <div id="highlights">
                                        <strong className="col-xs-3">Highlights</strong>
                                        <ul className="col-xs-6">
                                            <li> 64GB ROM</li>
                                            <li> 5.8 inch Super Retina HD Display</li>
                                            <li> 12MP + 12MP Dual Rear Camera | 7MP Front Camera</li>
                                            <li> lithium-ion Battery</li>
                                            <li> A11 Bionic Chip with 64-bit Architecture, Neural Engine, Embedded M11 Motion Co-processor</li>
                                        </ul>
                                    </div>

                                </div>
                                <br /><br />

                                <div className="container col-xs-12" style={{ marginTop: '50px' }}>
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <div className="col-sm-12">
                                                <h3>PRODUCT DESCRIPTION</h3>
                                                <p>Meet the iPhone X - the device that’s so smart that it responds to a tap, your voice, and even a glance. Elegantly designed with a large 14.73 cm (5.8) Super Retina screen and a durable front-and-back glass, this smartphone is designed to impress. What’s more, you can charge this iPhone wirelessly.</p>

                                            </div>

                                        </div>
                                        <hr />
                                        <div className="panel-body">
                                            <div className="col-sm-12">

                                                <div className="col-sm-8">
                                                    <h3>14.73 cm Super Retina Screen</h3>
                                                    <p>Movies or games - with its Super Retina screen, you can enjoy an immersive-viewing experience that dazzles the eyes.</p>
                                                </div>

                                                <div className="col-sm-4">
                                                    <img src="https://rukminim1.flixcart.com/image/200/200/j9338nk0/mobile/g/u/h/apple-iphone-8-plus-mq8f2hn-a-original-imaeyym9hdbqaxhp.jpeg?q=90" className="img-responsive" alt="" />
                                                </div>

                                            </div>
                                        </div>
                                        <hr />
                                        <div className="panel-body">
                                            <div className="col-sm-12">

                                                <div className="col-sm-4">
                                                    <img src="https://rukminim1.flixcart.com/image/200/200/j9338nk0/mobile/g/u/h/apple-iphone-8-plus-mq8f2hn-a-original-imaeyynjb4vxrdgd.jpeg?q=90" className="img-responsive" alt="" />
                                                </div>

                                                <div className="col-sm-8">
                                                    <h3>
                                                        Innovative Display Technology</h3>
                                                    <p>
                                                        Innovative Display Technology
The display, with new techniques and technology, follows the curves and its elegantly rounded corners.</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="panel-footer">



                                            <h4><a href="" style={{ textDecoration: 'none' }}>View all features</a></h4>


                                        </div>

                                    </div>




                                    <div className="panel panel-default" id="specifications">
                                        <div className="panel-heading" style={{ backgroundColor: '#fff' }}>
                                            <h3>Specifications</h3>
                                        </div>

                                        <div className="panel-body">

                                            <h4>General</h4>

                                            <table className="table table-default">
                                                <tbody>
                                                    <tr> <td className="col-sm-4">In The Box </td> <td className="col-sm-8">
                                                        Handset, EarPods with Lightning Connector, Lightning to 3.5 mm Headphone Jack Adapter, Lightning to USB Cable, USB Power Adapter, Documentation</td></tr>

                                                    <tr> <td className="col-sm-4">Model Number </td>  <td className="col-sm-8">
                                                        MQA62HN/A </td> </tr>

                                                    <tr> <td className="col-sm-4">Model Name </td>  <td className="col-sm-8">iPhone X</td> </tr>

                                                    <tr> <td className="col-sm-4">Color </td>  <td className="col-sm-8">Silver</td> </tr>

                                                    <tr> <td className="col-sm-4">Browse Type </td>  <td className="col-sm-8">Smartphones</td> </tr>

                                                </tbody>

                                            </table>

                                        </div>

                                        <div className="panel-footer">
                                            <h4><a>Read More</a></h4>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );

        return (toRender);
    }
}
