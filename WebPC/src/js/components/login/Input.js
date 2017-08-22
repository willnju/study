/**
 * Created by will on 17/5/13.
 * @class Register
 * @extends React Component
 * @desc 注册
 * @author xuming(1522188485@qq.com), wangyong(1223427693@qq.com)
 */
import React,{ Component } from 'react';

const email_type={
    className:"fa fa-envelope",
    ref:'email',
    id:"log-email",

}
export default class Register extends Component{
    propTypes:{
      className:React.propTypes.string.isRequired;
    },
    render(){
        return(
            <div>
                <i className="fa fa-envelope"></i>
                <input ref='email' type="text" id="log-email" placeholder="*邮箱" />
            </div>
        )
    }
}
React.render(
    <Register></Register>
);
