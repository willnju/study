/**
 * @class Tabs
 * @extends React.Component
 * @desc Tabs通用插件
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class TabPane extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { className, children } = this.props;
        return (
            <div className={"plugin-tab-pane " + className}>
                {children}
            </div>
        )
    }
}
TabPane.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
};
TabPane.defaultProps = {
    className: '',
    title: '',
};

export default class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
        };
    }

    onTabClick(key, title) {
        const { onChange } = this.props;
        this.setState({
            active: key
        });
        onChange(title);
    }

    render() {
        let { children, className } = this.props;
        if (children == null) return null;
        let tabPanes = [];
        if (typeof children === 'object' && children.type === TabPane) {
            tabPanes = [children];
        }
        if (children instanceof Array) {
            for (let i = 0; i < children.length; i++) {
                if (children[i] != null && children[i].type === TabPane) {
                    tabPanes.push(children[i]);
                } else if (children[i] != null && children[i].type !== TabPane) {
                    throw new Error("Tabs' children type error!");
                    return null;
                }
            }
        }
        if (tabPanes.length === 0) {
            throw new Error("Tabs' children type error!");
            return null;
        }

        return (
            <div className={"plugin-tabs " + className}>
                <ul className="tabs func-clearfix">
                    { tabPanes.map(this.renderTabs.bind(this)) }
                </ul>
                <div className="panes">
                    { tabPanes[this.state.active] }
                </div>
            </div>
        )
    }

    renderTabs(tabPane, index) {
        let tabClassNames = classNames({
            'tab': true,
            'active': index === this.state.active
        });
        return (
            <li className={tabClassNames} key={index} onClick={this.onTabClick.bind(this, index, tabPane.props.title)}>
                <a href="javascript:;">{tabPane.props.title}</a>
            </li>
        )
    }
}
Tabs.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func
};
Tabs.defaultProps = {
    className: '',
    onChange: () => {}
};
