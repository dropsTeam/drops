import React from 'react';
import { List, Avatar, Button, Skeleton, Popconfirm } from 'antd';
import { withRouter } from 'react-router-dom';

class ProductListView extends React.PureComponent {


    redirect = (location) => {
        this.props.history.push(location);
    }

    render() {


        const { isEditable } = this.props;
        const loadMore = (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}>
                <Button onClick={this.props.loadMore}>loading more</Button>
            </div>
        );

        return (
            <List
                style={{ minHeight: '350px' }}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={this.props.data}
                renderItem={(item, index) => (
                    <List.Item 
                    actions={[isEditable && <a key="list-loadmore-edit" onClick={() => this.props.onEdit(index)} >edit</a>,  <Popconfirm placement="topLeft" title={'Are your you want to delete this product.'} onConfirm={() => this.props.deleteProduct(index)} okText="Delete" cancelText="No"> <a key="list-loadmore-more">Delete</a> </Popconfirm>]}>
                        
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={item.media[0]} />
                                }
                                title={<a onClick={() => this.redirect(`/view/${item._id}`)} >{item.title}</a>}
                                description={item.description.slice(0, 50) + ` $${item.price} ...` } />

                            <div>
                                <span className="badge badge-pill badge-warning">{item.aveageRaing} &#9733;</span>
                                <span className="badge badge-pill badge-primary ml-2">{item.totalReview + ' Reviews'}</span>
                            </div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        );

    }
}

export default withRouter(ProductListView);
