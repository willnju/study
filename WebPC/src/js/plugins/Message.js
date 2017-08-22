/**
 * @class Message
 * @extends React.Component
 * @desc 全局提示message插件
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import $ from 'jquery';

const MESSAGE_CLASSNAME_MAP = {
    'info': '',
    'success': 'plugin-message__success',
    'warning': 'plugin-message__warning',
    'error': 'plugin-message__error',
    'loading': 'plugin-message__loading'
};
const MESSAGE_ICON_CLASSNAME_MAP = {
    'info': 'fa-info-circle',
    'success': 'fa-check-circle',
    'warning': 'fa-exclamation-circle',
    'error': 'fa-times-circle',
    'loading': 'fa-spinner'
};
export default class Message extends Component {
    render() {
        const { info, type } = this.props;

        let _messageClass = MESSAGE_CLASSNAME_MAP[type];
        let messageClass = classNames({
            'plugin-message': true,
            [_messageClass]: true
        });
        let _iconClass = MESSAGE_ICON_CLASSNAME_MAP[type];
        let iconClass = classNames({
            'fa': true,
            [_iconClass]: true
        });
        return (
            <div className={messageClass}><i className={iconClass}></i>{info}</div>
        )
    }
}
Message.propsType = {
    info: PropTypes.string,
    type: PropTypes.string
};
Message.defaultProps = {
    info: 'Message Plugin',
    type: 'info'
};

let getMessageContainer = () => {
    let messageContainer = document.createElement('div');
    messageContainer.className = 'plugin-message-container';
    document.body.appendChild(messageContainer);
    return messageContainer;
}

let removeMessageContainer = (messageContainer) => {
    if (messageContainer != null) {
        document.body.removeChild(messageContainer);
    }
}
let makeInstance = (info, duration = 3000, type, onClose = () => {}) => {
    if (!_.isNumber(duration) || !_.isFunction(onClose)) {
        throw new Error('Input parameters type error' );
    }

    let opt = { type: type };
    opt.info = info ? info : type;
    
    let messageContainer = getMessageContainer();
    let message = <Message {...opt}></Message>;
    ReactDOM.render(message, messageContainer);

    if (duration > 0) {
        setTimeout(() => {
            removeMessageContainer(messageContainer);
            onClose();
        }, duration);
    }

    return () => {
        removeMessageContainer(messageContainer);
    }
}

export let message = {
    info: (info, duration, onClose) => {
        return makeInstance(info, duration, 'info', onClose);
    },
    success: (info, duration, onClose) => {
        return makeInstance(info, duration, 'success', onClose);
    },
    warning: (info, duration, onClose) => {
        return makeInstance(info, duration, 'warning', onClose);
    },
    error: (info, duration, onClose) => {
        return makeInstance(info, duration, 'error', onClose);
    },
    loading: (info, duration, onClose) => {
        return makeInstance(info, duration, 'loading', onClose);
    },
}

