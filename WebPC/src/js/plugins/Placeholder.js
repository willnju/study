/**
 * @class Placeholder
 * @extends React.Component
 * @desc 占位组件
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Placeholder extends Component {
    render() {
        const { type } = this.props;

        let phHeader = null;
        switch (type) {
            case 'default':
                phHeader = (
                    <div className="ph-header func-clearfix">
                        <div className="left">
                            <p className="element"></p>
                        </div>
                        <div className="right">
                            <p className="first element"></p>
                            <p className="second element"></p>
                        </div>
                    </div>
                );
                break;
            case 'content':
                break;
            default:
                break;
        }

        return (
            <div className="plugin-placeholder">
                {phHeader}
                <div className="ph-content">
                    <p className="first element"></p>
                    <p className="second element"></p>
                    <p className="third element"></p>
                </div>
            </div>
        )
    }
}
Placeholder.propsType = {
    type: PropTypes.string
};
Placeholder.defaultProps = {
    type: 'default'
}