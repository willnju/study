/**
 * @class EditSaleKeys
 * @extends React.Component
 * @desc key状态及删除新增key
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from 'react';
import _ from 'lodash';

import Tabs, { TabPane } from '../../../plugins/Tabs';
import Placeholder from '../../../plugins/Placeholder';
import Pagination from '../../../plugins/Pagination';

class KeysRemove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            pageSize: 5,
            selected: []
        };
    }

    onPaginationChange(page) {
        this.setState({ 
            current: page,
            selected: []
        });
    }

    onCheckboxChange(key, e) {
        const { selected } = this.state;
        let newSelected = _.clone(selected);
        let checked = e.target.checked;
        if (checked) {
            newSelected.push(key.key_id);
        } else {
            newSelected = _.without(selected, key.key_id);
        }
        this.setState({
            selected: newSelected
        });
    }

    onSaveClick() {
        const { game, saleActions, onSaveKeysUpdate } = this.props;
        const { selected } = this.state;
        saleActions.saveRemoveKeysFromSaleProduct({
            game: game,
            keys: selected,
            cb: (data) => {
                this.setState({
                    selected: []
                });
                onSaveKeysUpdate(data);
            }
        })
    }

    render() {
        const { game, keysList } = this.props;
        const { current, pageSize, selected } = this.state;
        if (keysList.length === 0) return <div className="edit-keys"><p className="info-nokey">没有key相关信息</p></div>;
        
        let filterList = keysList.slice((current - 1) * pageSize, current * pageSize);
        return (
            <div className="edit-keys">
                <table className="keys-table">
                    <thead>
                        <tr>
                            <th>
                                选择
                                {/*<input type="checkbox" className="input-checkbox" />*/}
                            </th>
                            <th>Key</th>
                        </tr>
                    </thead>
                    <tbody>
                        {_.map(filterList, (_key, _index) => {
                            return (
                                <tr key={_index}>
                                    <td><input checked={_.indexOf(selected, _key.key_id) > -1} onChange={this.onCheckboxChange.bind(this, _key)} type="checkbox" className="input-checkbox" /></td>
                                    <td>{_key.key}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Pagination total={keysList.length} pageSize={pageSize} onChange={this.onPaginationChange.bind(this)}></Pagination>
                <div className="btn-group func-clearfix">
                    <a href="javascript:;" className="btn btn-save" onClick={this.onSaveClick.bind(this)}>删除选中</a>
                </div>
            </div>
        )
    }
}

export default class EditSaleKeys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            detail: {}
        };
    }

    componentDidMount() {
        const { game, saleActions } = this.props;
        saleActions.loadSaleProductDetail({
            id: game.s_id,
            cb: (data) =>  {
                this.setState({
                    loading: false,
                    detail: data
                })
            }
        });
    }

    onSaveAddKeyClick() {
        const { game, saleActions } = this.props;
        let keys = this.refs.keys.value.split(" ").join("\n");
        saleActions.saveAddKeysToSaleProduct({
            game: game,
            key: keys,
            type: 1, // TODO 做成radio，文本或者图片
            cb: (data) => {
                this.refs.keys.value = '';
                this.setState({
                    detail: data
                });
            }
        })
    }

    onSaveKeysUpdate(data) {
        this.setState({
            detail: data
        });
    }

    render() {
        const { loading, detail } = this.state;
        if (loading) return <Placeholder type="content"></Placeholder>;
        let soldList = [];
        let unsoldList = [];
        _.each(detail.key, (_key, _index) => {
            if (_key.status === '已售') {
                soldList.push(_key);
            } else {
                unsoldList.push(_key);
            }
        });
        return (
            <div className="edit-sale-keys">
                <Tabs>
                    <TabPane title="已售">
                        <KeysRemove {...this.props} keysList={soldList} onSaveKeysUpdate={this.onSaveKeysUpdate.bind(this)}></KeysRemove>
                    </TabPane>
                    <TabPane title="未售">
                        <KeysRemove {...this.props} keysList={unsoldList} onSaveKeysUpdate={this.onSaveKeysUpdate.bind(this)}></KeysRemove>
                    </TabPane>
                    <TabPane title="添加新KEY">
                        <div className="keys-new">
                            <div className="input-group">
                                <label className="label">激活码</label>
                                <textarea ref="keys" placeholder="每个key占一行" id="" rows="10"></textarea>
                            </div>
                            <div className="btn-group func-clearfix">
                                <a href="javascript:;" onClick={this.onSaveAddKeyClick.bind(this)} className="btn btn-save">保存key</a>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}