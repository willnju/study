/**
 * @class Overlay
 * @extends React.Component
 * @desc 弹出框的覆盖层插件
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Overlay extends Component {
    render() {
        const { className, children } = this.props;

        let overlayClass = classNames('plugin-overlay', {
            [className]: true
        });
        return (
            <div className="plugin-overlay">{children}</div>
        )
    }
}
Overlay.propsType = {
    className: PropTypes.string
};
Overlay.defaultProps = {
    className: ''
};