import React, {
    Component
} from 'react';
import Pagination from '../../plugins/Pagination'


export default class RenderMore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            pageSize: 2
        };
    }

    componentDidMount() {
        const {
            catalogAction
        } = this.props;
        catalogAction.viewMore();
        let page=this.props.getCatalogPerpage;
        catalogAction.loadGamesList({'perpage':page,'page':1});
    }

    onPaginationChange(option,currentPage) {
        const { catalogAction}=this.props;
        this.setState({ current: currentPage });
        let page=currentPage;
        console.log(currentPage);
        console.log(option);
        let categorys=this.props.changeType.category;
        let types=this.props.changeType.type;
        let platforms=this.props.changeType.platform;
        let perpage=this.props.getCatalogPerpage;
        console.log('perpage='+perpage);
        catalogAction.loadGamesList({'type':types,'platform':platforms,'page':option,'perpage':perpage});
    }


    choosePerpage(e){
        const { catalogAction}=this.props;
        console.log(e.currentTarget.value);
        let categorys=this.props.changeType.category;
        let types=this.props.changeType.type;
        let platforms=this.props.changeType.platform;
        let perpage=e.currentTarget.value;
        catalogAction.loadGamesList({'type':types,'platform':platforms,'perpage':perpage});
        catalogAction.viewMore({'perpage':perpage});

        catalogAction.changePerpage({'page':e.currentTarget.value});
    }
    render() {
        var that=this;
        var total=that.props.viewMore.totalpage;
        var perpage=that.props.getCatalogPerpage;
        console.log(perpage);
        return (
            <div className = "container-footer" >
                {/*<div className="choosePageSize">*/}
                    {/*<select onChange={this.choosePerpage.bind(this)}>*/}
                        {/*/!*<option value="1">1条每页</option>*!/*/}
                        {/*/!*<option value="2">2条每页</option>*!/*/}
                        {/*/!*<option value="3">3条每页</option>*!/*/}
                        {/*/!*<option value="4">4条每页</option>*!/*/}
                        {/*<option value="5" selected>20条每页</option>*/}
                    {/*</select>*/}
                {/*</div>*/}

                <div className="order-pagination">
                    <Pagination pageSize={perpage} total={total*perpage} onChange={this.onPaginationChange.bind(this)}></Pagination>
                </div>
            </div>
        )
    }
}