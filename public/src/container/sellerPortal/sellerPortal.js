import React from 'react';

import { PageHeader, Button } from 'antd';
import ProductResults from '../../components/ProductsResults/ProductsResults';
import styles from './sellerPortal.module.css';

class SellerPortal extends React.Component {

    render() {
        return (
            <div styles={{ backgroundColor: 'grey' }} >
                <PageHeader
                    className={styles.sitePageHeader + ' mb-2'}
                    onBack={() => null}
                    title="Dashboard"
                    subTitle="Seller"
                    extra={[
                        <Button key="3">Orders</Button>,
                        <Button key="2">Questions</Button>,
                        <Button key="1" type="primary">Settings</Button>
                    ]}
                />

                <p className='h2' style={{ padding: '30px 0 0 20px' }}> Stats</p>
                <div class="row" style={{ padding: '0 20px' }}>
                    <div class="col-sm-12 col-md-4 mt-2 ">
                        <div class="card" style={{ backgroundColor: '#FEC009', color: 'white' }}>
                            <div class="card-body" >
                                <p class="card-text">Revenue</p>
                                <h1 class="card-title " style={{ color: 'white' }}>$3,567.53 </h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 mt-2 ">
                        <div class="card" style={{ backgroundColor: '#DD6777', color: 'white' }}>
                            <div class="card-body">

                                <p class="card-text">Number Of Orders</p>
                                <h1 class="card-title" style={{ color: 'white' }}>30,000</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 mt-2 ">
                        <div class="card" style={{ backgroundColor: '#6EC080' }}>
                            <div class="card-body" style={{ color: 'white' }}>
                                <p class="card-text">Number Of Products</p>
                                <h1 class="card-title " style={{ color: 'white' }}>99 </h1>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />

                <p className='h2' style={{ padding: '30px 0 0 20px' }}> Products</p>


            </div>
        )
    }

}

export default SellerPortal;
