/**
 * @class Gallery
 * @extends React.Component
 * @desc 游戏详情页轮播组件
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
    }

    onPreClick() {
        const { active } = this.state;
        const { gameDetail } = this.props;
        const gallery = gameDetail.gallery;
        let _active = 0;
        if (active === 0) {
            _active = gallery.length - 1;
        } else {
            _active = active - 1;
        }
        this.setState({
            active: _active
        });
    }

    onNextClick() {
        const { active } = this.state;
        const { gameDetail } = this.props;
        const gallery = gameDetail.gallery;
        let _active = 0;
        if (active === gallery.length - 1) {
            _active = 0;
        } else {
            _active = active + 1;
        }
        this.setState({
            active: _active
        });
    }

    onThumbItemClick(index) {
        this.setState({
            active: index
        });
    }

    render() {
        const { active } = this.state;
        const { gameDetail } = this.props;
        const gallery = gameDetail.gallery;

        let galleryWrapperStyle = {
            backgroundImage: `url(${gallery[active]})`
        };
        return (
            <div className="item-gallery">
                <div className="item-gallery-wrapper" style={galleryWrapperStyle}>
                    <a href="javascript:;" onClick={this.onPreClick.bind(this)} className="item-gallery-nav item-gallery-nav-pre">
                        <i className="fa fa-chevron-left"></i>&nbsp;
                    </a>
                    <a href="javascript:;" onClick={this.onNextClick.bind(this)} className="item-gallery-nav item-gallery-nav-next">
                        <i className="fa fa-chevron-right"></i>&nbsp;
                    </a>
                </div>
                <div className="item-gallery-thumbs">
                    <ul className="thumbs">
                        {
                            _.map(gallery, (_img, _index) => {
                                let itemStyle = {
                                    backgroundImage: `url(${_img})`,
                                };
                                let thumbItemClass = classNames({
                                    'thumbs-item': true,
                                    'active': _index === active
                                });
                                return (
                                    <li key={_index} className={thumbItemClass} style={itemStyle}>
                                        <a className="thumbs-item-mask" href="javascript:;" onClick={this.onThumbItemClick.bind(this, _index)}></a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}