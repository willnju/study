/**
 * @class Services
 * @extends React.Component
 * @desc 客服中心
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';

import Navs, { NavPane } from './Navs';

// 创建客服单
class ServicesCreate extends Component {
    render() {
        return (
            <div className="services-create">
                <h2 className='content-title'>创建客服单</h2>
                <div className="services-group">
                    <label className='label' htmlFor="contactEmail">联系邮箱</label>
                    <input className='input-text' type="text" id="contactEmail" value="Young" />
                </div>
                <div className="services-group">
                    <label className='label' htmlFor="productID">订单号</label>
                    <input className='input-text' type="text" id="productID" value="Young" />
                </div>
                <div className="services-group">
                    <label className='label' htmlFor="cdkey">CDKEY</label>
                    <input className='input-text' type="text" id="cdkey" value="Young" />
                </div>
                <div className="services-group">
                    <label className='label' htmlFor="title">标题</label>
                    <input className='input-text' type="text" id="title" value="Young" />
                </div>
                <div className="services-group textarea-group">
                    <label className='label' htmlFor="desc">问题描述</label>
                    <textarea rows="3" id="desc"></textarea>
                </div>
                <div className="btn-group func-clearfix">
                    <a href="javascript:;" className="btn btn-save"><i className="fa fa-check"></i>发送</a>
                </div>
            </div>
        )
    }
}

// 处理中心
class ServicesDeals extends Component {
    render() {
        return (
             <div className="services-deals">
                <h2 className='content-title'>处理中心</h2>
                <table className="deals-table">
                    <thead>
                        <tr>
                            <th>订单号</th>
                            <th>ID</th>
                            <th>CDKEY</th>
                            <th>标题</th>
                            <th>状态</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>201723293203049</td>
                            <td>RFD-2235235325</td>
                            <td>XXXXXXXXXXXXXXXXXX</td>
                            <td>title title title title</td>
                            <td>完成</td>
                        </tr>
                        <tr>
                            <td>201723293203049</td>
                            <td>RFD-2235235325</td>
                            <td>XXXXXXXXXXXXXXXXXX</td>
                            <td>title title title title</td>
                            <td>完成</td>
                        </tr>
                        <tr>
                            <td>201723293203049</td>
                            <td>RFD-2235235325</td>
                            <td>XXXXXXXXXXXXXXXXXX</td>
                            <td>title title title title</td>
                            <td>完成</td>
                        </tr>
                        <tr>
                            <td>201723293203049</td>
                            <td>RFD-2235235325</td>
                            <td>XXXXXXXXXXXXXXXXXX</td>
                            <td>title title title title</td>
                            <td>完成</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default class Services extends Component {
    render() {
        return (
            <section className="account-services">
                <Navs>
                    <NavPane title='创建客服单'>
                        <ServicesCreate></ServicesCreate>
                    </NavPane>
                    <NavPane title='处理中心'>
                        <ServicesDeals></ServicesDeals>
                    </NavPane>
                </Navs>
            </section>
        )
    }
}