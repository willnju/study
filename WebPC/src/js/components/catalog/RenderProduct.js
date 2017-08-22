import React, {
    Component
} from 'react';
import { browserHistory } from 'react-router'
import {API_PRO_PREFIX} from '../../constants/api.js'



export default class RenderProject extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {
            catalogAction
        } = this.props;
        //catalogAction.loadGamesList({'perpage':5});
    }
    handleClick(id,e){
        e.stopPropagation();
        const { router }=this.props;
        const path=`/item/${id}`;
        //browserHistor.push(path);
        router.push(path);
        console.log(id);
    }

    addToCartClick(game, e) {
        e.preventDefault();
        const { cartActions } = this.props;
        console.log(game);
        cartActions.addToCart({
            game: game,
            cb: () => { console.log('success') }
        })
    }

    render() {
        //var result=this.props.catalogLoadGamesList;
        var result=this.props.catalogLoadGamesList;
        console.log(result);
        var that=this;
        var items=result.map(function(item,index){
            return (
                <div className="products-grid"  >
                    <div className="products-card" key={item.p_id}>
                        <a>
                            <div className="product-img" onClick={that.handleClick.bind(that,item.p_id)}>
                                {/*<div/>*/}
                                <img src={`${API_PRO_PREFIX}${item.thumb_img}`}/>
                                {/*<span className="product-badge">DLC</span>*/}
                            </div>
                            <div className="product-card-content">
                                <div className="product-card-content-wrapper">
                                    <h3 className="product-title">
                                        {item.name_zh}
                                    </h3>
                                    <div >
                                        <ul className="product-os-info">
                                            <li>
                                                平台：<span style={{marginRight:'5px'}}>{item.s_platform}</span>
                                            </li>
                                            <li>
                                                版本：<span style={{marginRight:'5px'}}>{item.s_edition}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="product-card-footer">
                                <button className="product-btn-add-to-cart" >
                                    <span onClick={that.addToCartClick.bind(that,item)}><span className="oldPrice">￥{item.market_price}</span><span className="icon"><i className="fa fa-cart-plus"></i></span>￥{item.price}</span>
                                </button>
                            </div>
                        </a>
                    </div>
                </div>

            )
        });
        return (
            <div className="products">
                <div className="products-main">
                    {items}
                </div>
            </div>
        )
    }
}