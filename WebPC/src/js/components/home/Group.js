/**
 * @class Group
 * @extends React.Component
 * @desc 最新、折扣、预售游戏列表组
 * @author wangyong(1223427693@qq.com)
 */
import React, { Component } from "react";
import { Link } from 'react-router';

import Games from "./Games";
import Placeholder from '../../plugins/Placeholder';
import Tabs, { TabPane } from "../../plugins/Tabs";

export default class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        const { gameActions } = this.props;
        gameActions.loadGamesListGroup({
            cb: () => {
                this.setState({ loading: false });
            }
        })
    }

    render() {
        const { latestGamesList, discountGamesList, preorderGamesList } = this.props;
        let content = null
        if (this.state.loading) {
            content = (
                <div className="placeholders">
                    <Placeholder type="content"></Placeholder>
                </div>
            )
        } else {
            content = (
                <Tabs className="group-tabs">
                    <TabPane title="最新">
                        <Games {...this.props} gamesList={latestGamesList}></Games>
                    </TabPane>
                    <TabPane title="折扣">
                        <Games {...this.props} gamesList={discountGamesList}></Games>
                    </TabPane>
                    <TabPane title="预售">
                        <Games {...this.props} gamesList={preorderGamesList}></Games>
                    </TabPane>
                </Tabs>
            )
        }

        return (
            <div className="home-section-group">
                <div className="group-component">
                    {content}
                    <Link to="/catalog" className="more pg-btn pg-btn__small pg-btn__primary">查看更多</Link>
                </div>
            </div>
        )
    }
}
