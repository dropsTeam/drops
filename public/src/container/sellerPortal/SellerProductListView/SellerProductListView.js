import React from 'react';

import ProductListView from '../../../components/ProductListView/ProductListView';
import { mainHttp } from '../../../Axios/Axios';

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
        const newData = [...this.state.data].concat(products.data);

        this.setState((prevState, prevProps) => {
            return {
                data: [...newData],
                page: prevState.page + 1
            }
        });
    }


    render() {
        return (
            <ProductListView data={this.state.data} isEditable={true} loadMore={this.fetch} />
        )
    }
}

export default SellerProductListView;
