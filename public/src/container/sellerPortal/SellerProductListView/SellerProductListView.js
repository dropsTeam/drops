import React from 'react';

import ProductListView from '../../../components/ProductListView/ProductListView';
import { mainHttp } from '../../../Axios/Axios';
import { message } from 'antd';

class SellerProductListView extends React.Component {

    render() {
        return (
            <div className='px-5 mt-3'>
                <ProductListView
                    data={this.props.products}
                    isEditable={true}
                    onEdit={(index) => this.props.onEdit(index)}
                    deleteProduct={this.props.deleteProduct}
                    loadMore={this.props.fetchProducts} />
            </div>
        );
    }

}

export default SellerProductListView;
