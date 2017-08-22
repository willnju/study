/**
 * @class Hotkeys
 * @extends React Component
 * @desc 快捷登录键
 * @author xuming(1522188485@qq.com)
 */
import  React,{ Component } from 'react';
export default class Hotkeys extends Component {
    render(){
        return(
            <section id="connect">
                <a><i className="fa fa-qq"></i><span>QQ登录</span></a>
                <a><i className="fa fa-weixin" aria-hidden="true"></i><span>微信登录</span></a>
                <a><i></i><span>steam登录</span></a>
            </section>
        )
    }
}