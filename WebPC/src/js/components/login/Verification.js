/**
 * Created by will on 17/6/11.
 */
import React,{ Component } from 'react';
import $ from 'jquery';
export default class Verification extends Component{
    change(){
        // 验证码组成库
        var arrays=new Array(
            '1','2','3','4','5','6','7','8','9','0',
            'a','b','c','d','e','f','g','h','i','j',
            'k','l','m','n','o','p','q','r','s','t',
            'u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','O','P','Q','R','S','T',
            'U','V','W','X','Y','Z'
        );
        var codes='';// 重新初始化验证码
        for(var i = 0; i<4; i++){
            // 随机获取一个数组的下标
            var r = parseInt(Math.random()*arrays.length);
            codes += arrays[r];
        }
        this.refs.code.value=codes;
    }

    //单击验证
    check(){
        var inputCode = this.refs.codeInput.value.toUpperCase(); //取得输入的验证码并转化为大写
        var response;
        if(inputCode.length == 0) { //若输入的验证码长度为0
            response="请输入验证码!";
            return false;
        }
        else if(inputCode!=this.refs.code.value.toUpperCase()) { //若输入的验证码与产生的验证码不一致时
            response="验证码不正确!";
            this.change();//刷新验证码
            this.refs.codeInput.value="";//清空文本框
            return false;
        }else { //输入正确时

        }
        this.change();
        return true;
    }
    render(){
        return(
            <div>
                <input ref='codeInput' type = "text" id = "input"/>
                <input ref='code' type = "button" value="1223" id="code" onClick={this.change.bind(this)}/>
                <input ref='check' type = "button" value = "验证" id="check" onClick={this.check.bind(this)}/>
            </div>
        )
    }
}
