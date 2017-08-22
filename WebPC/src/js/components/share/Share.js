/**
 * @class Login
 * @extends React.Component
 * @desc 分享页面
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';

export default class Share extends Component {
    componentDidMount() {
        let share = this.refs.share;
        try {
            socialShare(share);
        } catch (e) {
            console.log(e);
        }
        
    }

    render() {
        return (
			<div className="share">
                <h3 className="share-title">分享</h3>
                <div ref='share' className="social-share" data-sites="wechat, weibo, qq, qzone"></div>              
            </div>
		)
    }
}