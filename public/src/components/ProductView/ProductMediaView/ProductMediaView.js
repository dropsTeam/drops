import React from 'react';

import styles from './productMediaView.module.css'


class ProductMediaView extends React.PureComponent {

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

        const renderMedia = this.props.data.map((item, index) => {
            return (
                <div key={index} className="col-12 my-2" >
                    <img src={item} className="img-fluid" alt="" />
                </div>
            );
        });

        return (
            <div style={{ position: 'sticky', top: '20px' }}>
                <div className="row">
                    <div className="col-2 ">
                        <div className="row" style={{ cursor: 'pointer' }}>
                            {renderMedia}
                        </div>
                    </div>

                    <div className={'col-10 ' + ' ' + styles.image} ref={this.image} onMouseOver={this.imgMouseOver} onMouseOut={this.imgMouseOut} onMouseMove={this.imgMouseMove}>
                        <a href={this.props.data[0]} ref={this.imgLink} target="_blank">
                            <img style={{ width: '20vmax' }} src={this.props.data[0]} className="img-fluid mx-auto" alt="" />
                        </a>

                    </div>
                </div>

                <div className={styles.zoom + ' ' + styles.show} style={{ visibility: this.state.showZoom }} ref={this.zoom}>
                    <img className={styles.zoomImage} ref={this.zoomImage} src="" alt="" />
                </div>


                <div className="row my-3" >
                    <button className="col my-3 mx-1 py-3 " onClick={this.props.addToCart} style={{ backgroundColor: '#FF9F00', borderRadius: '4px', border: 'none', textAlign: 'center', fontWeight: 700, color: 'white' }}>ADD TO CART</button>
                    <button className="col my-3 mx-1 py-3 " style={{ backgroundColor: '#FB641B', borderRadius: '4px', border: 'none', textAlign: 'center', fontWeight: 700, color: 'white' }}>BUY NOW</button>
                </div>
            </div>
        )
    }
}



export default ProductMediaView;
