import React from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';


class ProductListView extends React.PureComponent {

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
                style ={{ minHeight: '350px'}}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={this.props.data}
                renderItem={item => (
                    <List.Item actions={[ isEditable && <a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">View Product</a>]}>
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            <div>content</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        );

    }
}

export default ProductListView;
