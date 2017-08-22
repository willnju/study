/**
 * @class Navs
 * @extends React.Component
 * @desc 我的账户Navs组件
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

export class NavPane extends Component {
    render() {
        const { children } = this.props;
        return children ? children : null;
    }
}
NavPane.propTypes = {
    title: PropTypes.string.isRequired
};
NavPane.defaultProps = {
    title: ''
};

export default class Navs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
    }

    onItemClick(index) {
        this.setState({
            active: index
        });
    }

    renderNavItems(navPanes) {
        return (
            <ul className='nav'>
                {
                    _.map(navPanes, (pane, index) => {
                        let itemClass = classNames({
                            'nav-item': true,
                            'active': index === this.state.active
                        })
                        return (
                            <li key={index} className={itemClass} onClick={this.onItemClick.bind(this, index)}>
                                <a href="javascript:;">{pane.props.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        const { className, children } = this.props;
        let navPanes = [];
        if (typeof children === 'object' && children.type === NavPane) {
            navPanes = [children];
        }
        if (_.isArray(children)) {
            _.each(children, child => {
                navPanes.push(child);
            })
        }
        let navContainerClass = classNames({
            'account-nav-container func-clearfix': true,
            [className]: true
        })
        return (
            <div className={navContainerClass}>
                <aside className='nav-aside'>
                    {this.renderNavItems(navPanes)}
                </aside>
                <div className="nav-content">
                    {navPanes[this.state.active]}
                </div>
            </div>
        )
    }
}
Navs.propTypes = {
    className: PropTypes.string
};
Navs.defaultProps = {
    className: ''
};
