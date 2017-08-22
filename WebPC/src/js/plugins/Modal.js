/**
 * @class Modal
 * @extends React.Component
 * @desc 弹出框插件
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Overlay from './Overlay';

export default class Modal extends Component {
    render() {
        const { className, title, width, onClose, children } = this.props;

        const modalClass = classNames('plugin-modal', {
            [className]: true
        });
        const modalStyle = {
            width: `${width}px`
        }
        return (
            <Overlay>
                <div className={modalClass} style={modalStyle}>
                    <div className="modal-head">
                        <h2 className="title">{title}</h2>
                        <a href="javascript:;" className="close" onClick={onClose}><i className="fa fa-close"></i></a>
                    </div>
                    <div className="modal-content">{children}</div>
                </div>
            </Overlay>
        )
    }
}
Modal.propsType = {
    className: PropTypes.string,
    width: PropTypes.number,
    title: PropTypes.string,
    onClose: PropTypes.func
};
Modal.defaultProps = {
    className: '',
    width: 980,
    title: '',
    onClose: () => {}
}

let getModalContainer = () => {
    let modalContainer = document.createElement('div');
    document.body.appendChild(modalContainer);
    return modalContainer;
};

let closeModal = (container) => {
    if (container != null) {
        document.body.removeChild(container);
    }
}

let makeInstance = (title, width, content, onClose) => {
    let container = getModalContainer();
    let modal = <Modal title={title} width={width} onClose={() => { 
        closeModal(container); 
        onClose();
    }}>{content}</Modal>;
    ReactDOM.render(modal, container);
    return () => {
        closeModal(container);
    }
}

let modal = {
    show: (opt = {}) => {
        const { title = '', width = 980, content = null, onClose = () => {} } = opt;
        return makeInstance(title, width, content, onClose);
    }
}

export { modal };