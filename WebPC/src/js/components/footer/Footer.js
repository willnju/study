/**
 * @class Footer
 * @extends React.Component
 * @desc 底部信息栏
 * @author wangyong(1223427693@qq.com)
 */
import React, {
    Component
} from 'react';
import { Link,IndexLink } from 'react-router';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <section className="payment-options">
                    抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防上当受骗 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活
                </section>
                <div className="footer-container">
                    <section className="footer-row" >
                        <nav className="footer-nav">
                            <ul>
                                <li>
                                    <Link to="/" activeClassName="active" onlyActiveOnIndex={true}>主页</Link>
                                </li>
                                <li>
                                    <Link to="/catalog" activeClassName="active" onlyActiveOnIndex={true}>游戏</Link>
                                </li>
                                <li>
                                    <a>用户中心</a>
                                </li>
                                <li>
                                    <a>联系我们</a>
                                </li>
                                <li>
                                    <a>关于我们</a>
                                </li>
                                <li>
                                    <IndexLink to="/account/details" activeStyle={{color: 'black'}}>技术支持</IndexLink>
                                </li>
                            </ul>

                        </nav>
                    </section>

        <section className="footer-row" style={{display: "flex"}}>
                        <nav className="footer-social-nav">
                            <ul>
                                <li>
                                    <a className="btn-social"></a>
                                </li>
                                <li>
                                    <a className="btn-social weixin"></a>
                                </li>
                                <li>
                                    <a className="btn-social weibo"></a>
                                </li>
                                <li>
                                    <a className="btn-social youku"></a>
                                </li>
                            </ul>
                        </nav>

                        <div className="footer-newsletter">
                            <p className="footer-title">©安徽游集网络科技股份有限公司版权所有 皖ICP备16021300号 ICP证皖</p>
                            <p className="footer-info">
                                <div className="left">
                                    <a className="left-icon"></a>
                                    <span>皖网文[2016] 6077-109号</span>
                                </div>

                                <div className="right">
                                    <a className="right-icon"></a>
                                    <span>皖公网安备 34050302000127号</span>
                                </div>
                            </p>
                        </div>
                    </section>

                </div>
            </footer>
        )
    }
}