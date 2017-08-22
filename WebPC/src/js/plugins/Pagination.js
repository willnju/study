/**
 * @class Pagination
 * @extends React.Component
 * @desc 分页组件
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        let current = 1;
        if ('current' in props) {
            current = props.current;
        }
        this.state = {
            current: current
        };
    }
    
    componentWillReceiveProps(nextProps) {
        if ("current" in nextProps) {
            this.setState({ current: nextProps.current });
        }
    }

    onCtrlClick(type) {
        const { current } = this.state;
        const { total, pageSize, onChange } = this.props;
        let next = 1;
        switch (type) {
            case 'pre':
                if (current === 1) return;
                next = current - 1;
                break;
            case 'next':
                let totalPage = Math.ceil(total / pageSize);
                if (current === totalPage) return;
                next = current + 1;
                break;
            default:
                return;
        }
        this.setState({ current: next });
        onChange(next);
    }

    render() {
        const { className, total, pageSize } = this.props;
        const { current } = this.state;
        if (total === 0) return null;
        const totalPage = Math.ceil(total / pageSize);
        const pagClass = classNames('plugin-pagination', {
            [className]: true
        });
        const preCtrlClass = classNames('ctrl ctrl-pre', {
            "disabled": current === 1
        });
        const nextCtrlClass = classNames('ctrl ctrl-next', {
            "disabled": current === totalPage
        });
        return (
            <div className={pagClass}>
                <a href="javascript:;" className={preCtrlClass} onClick={this.onCtrlClick.bind(this, 'pre')}><i className="fa fa-chevron-left"></i></a>
                <span className='status'><span className='current'>{current}</span><span className="split">OF</span><span className="total">{totalPage}</span></span>
                <a href="javascript:;" className={nextCtrlClass} onClick={this.onCtrlClick.bind(this, 'next')}><i className="fa fa-chevron-right"></i></a>
            </div>
        )
    }
}
Pagination.propsType = {
    className: PropTypes.string,
    pageSize: PropTypes.number,
    total: PropTypes.number,
    onChange: PropTypes.func,
    current: PropTypes.number
};
Pagination.defaultProps = {
    className: '',
    pageSize: 10,
    total: 0,
    onChange: () => {}
};
