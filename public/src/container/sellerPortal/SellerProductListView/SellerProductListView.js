import React from 'react';

import ProductListView from '../../../components/ProductListView/ProductListView';
import { mainHttp } from '../../../Axios/Axios';
import { message } from 'antd';

class SellerProductListView extends React.Component {


    state = {
        data: [],
        page: 0
    };

    componentDidMount() {
        this.fetch();
    }

    fetch = async () => {
        const products = await mainHttp.get(`/products/seller/${this.state.page}`);

        if (products.data.length === 0) { message.error('No more elements found'); return; }

        const newData = [...this.state.data].concat(products.data);

        this.setState((prevState) => {
            return {
                data: [...newData],
                page: prevState.page + 1
            }
        });

    }


    render() {
        return (
            <div className='px-5 mt-3'>
                <ProductListView data={this.state.data} isEditable={true} loadMore={this.fetch} />
            </div>
        );
    }
    
}

export default SellerProductListView;
