/**
 * Created by zhaojunzhe on 2017/5/23.
 */
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
    onPaginationChange(option,currentPage){
        const { searchActions}=this.props;
        this.setState({ current: currentPage });
        let categorys=this.props.changeTypes.category;
        let types=this.props.changeTypes.type;
        let platforms=this.props.changeTypes.platform;
        let perpage=this.props.getSearchPerpage;
        console.log('改变');
        searchActions.loadSearchList({text:this.props.searchQuery,'type':types,'platform':platforms,'page':option,'perpage':perpage});
    }
    choosePerpage(e){
        const { searchActions}=this.props;
        let perpage=e.currentTarget.value;
        let categorys=this.props.changeTypes.category;
        let types=this.props.changeTypes.type;
        let platforms=this.props.changeTypes.platform;
        searchActions.changePerpage({'page':e.currentTarget.value});

        searchActions.loadSearchList({text:this.props.searchQuery,'type':types,'platform':platforms,'perpage':e.currentTarget.value});


    }
    render() {
        var that=this;
        var total=that.props.total.totalpage;
        var perpage=that.props.getSearchPerpage;
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