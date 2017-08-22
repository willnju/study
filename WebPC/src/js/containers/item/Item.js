/**
 * @class Item
 * @extends React.Component
 * @desc 游戏详情页
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Gallery from '../../components/item/Gallery';
import Aside from '../../components/item/Aside';
import Placeholder from '../../plugins/Placeholder';
import Share from '../../components/share/Share';
import * as gameActions from '../../actions/gameActions';
import * as cartActions from '../../actions/cartActions';
import { API_PRO_PREFIX } from '../../constants/api';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        const { params, gameActions } = this.props;
        const id = params.id;
        gameActions.loadGameDeatil({
            id: id,
            cb: () => {
                this.setState({ loading: false });
            }
        });
    }

    render() {
        const { params, gameDetail } = this.props;

        if (this.state.loading) {
            return (
                <div className="container item-container">
                    <div className="placeholders">
                        <Placeholder></Placeholder>
                        <Placeholder></Placeholder>
                    </div>
                </div>
            )
        }

        const itemHeroStyle = {
            backgroundImage: `url(${API_PRO_PREFIX}${gameDetail.bg})`
        };

        return (
            <div className="container item-container">
                <div className="item-hero" style={itemHeroStyle}></div>
                <div className="item-detail">
                    <header className="item-detail-head func-clearfix">
                        <div className="detail-img"></div>
                        <div className="detail-title">
                            <h2 className="title">{gameDetail.name_zh}</h2>
                            <ul className="os func-clearfix">
                                {_.map(gameDetail.platform, (_plat, _index) => <li key={_index}>{_plat}</li> )}
                                {/*<li><i className="fa fa-windows"></i>WINDOWS</li>
                                <li><i className="fa fa-apple"></i>MAC</li>
                                <li><i className="fa fa-linux"></i>LINUX</li>*/}
                            </ul>
                        </div>
                    </header>
                    <section className="item-detail-main func-clearfix">
                        <div className="detail-main-gallery">
                            <Gallery {...this.props}></Gallery>
                            <div className="item-content">
                                <div className="item-info">
                                    <h3 className="item-info-title">About the game</h3>
                                    <p className="item-info-content">Revolutionary 3D cell-animation graphics further refined, and more game contents added! The next-generation fighting game "GUILTY GEAR Xrd -REVELATOR-" is now out on Nuuvem!
                                        Carrying on the legacy from 1998, comes the next addition to the "Guilty Gear" series! All visuals have been tweaked to the finest detail and hand-polished by the animation masters to produce the top quality hand-drawn anime effect! Game contents revamped to provide for gamers of all skill levels, you cannot miss out on this one!</p>
                                </div>
                                <div className="item-require">
                                    <h3 className="item-require-title">System Requirements</h3>
                                    <ul className="item-require-os func-clearfix">
                                        <li><i className="fa fa-windows"></i>WINDOWS</li>
                                        <li><i className="fa fa-apple"></i>MAC</li>
                                        <li><i className="fa fa-linux"></i>LINUX</li>
                                    </ul>
                                    <div className="item-require-mini">
                                        <h4 className="title">MINIMUM</h4>
                                        <ul className="details">
                                            <li className="detail">
                                                <span className="label">OS:</span>
                                                <span className="value">Windows 7/8/10 (64Bit)</span>
                                            </li>
                                            <li className="detail">
                                                <span className="label">Storage:</span>
                                                <span className="value">10 GB</span>
                                            </li>
                                            <li className="detail">
                                                <span className="label">Processor:</span>
                                                <span className="value">Intel Compatible 2.1 GHz Dual Core</span>
                                            </li>
                                            <li className="detail">
                                                <span className="label">Memory:</span>
                                                <span className="value">4 GB</span>
                                            </li>
                                            <li className="detail">
                                                <span className="label">Graphics:</span>
                                                <span className="value">GTX460 2GB</span>
                                            </li>
                                            <li className="detail">
                                                <span className="label">DirectX:</span>
                                                <span className="value">11</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Aside {...this.props}></Aside>
                    </section>
                </div>
                <Share {...this.props}></Share>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        gameActions: bindActionCreators(gameActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Item);