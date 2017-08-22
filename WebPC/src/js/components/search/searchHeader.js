/**
 * Created by zhaojunzhe on 2017/5/23.
 */
import React, {
    Component
} from 'react';

export default class SearchHeader extends Component {
    componentWillMount() {
        const {
            searchActions
        } = this.props;
        searchActions.loadAttributeList();
    }

    sortByString(str,e){
        const { searchActions }=this.props;
        e.stopPropagation();
        if(str==="priceDown"){
            searchActions.loadSearchList({text:this.props.searchQuery,price:'price_desc'});
        }
        else if(str==="priceUp")
        {
            searchActions.loadSearchList({text:this.props.searchQuery,price:'price_asc'});
        }
    }

    todo(id,e){
        e.stopPropagation();
        const { router }=this.props;
        const { searchActions}=this.props;
        if(id==="category"){
            let category=e.target.getAttribute('value');
            searchActions.changeTypes(category,'category');

            let categorys=this.props.changeType.category;
            let types=this.props.changeType.type;
            let platforms=this.props.changeType.platform;
            const path=`/catalog/${categorys}/${types}/${platforms}`;

            router.push(path);
        }
        else if(id==='type'){
            let type=e.target.getAttribute('value');
            searchActions.changeTypes(type,'type');

            let categorys=this.props.changeTypes.category;
            let types=this.props.changeTypes.type;
            let platforms=this.props.changeTypes.platform;
            console.log(this.props.changeTypes);
            searchActions.loadSearchList({text:this.props.searchQuery,'type':types,'platform':platforms});
            // const path=`/catalog/${categorys}/${types}/${platforms}`;
            //
            //
            // router.push(path);
        }
        else if(id==='platform'){
            let platform=e.target.getAttribute('value');
            searchActions.changeTypes(platform,'platform');


            let categorys=this.props.changeTypes.category;
            let types=this.props.changeTypes.type;
            let platforms=this.props.changeTypes.platform;
            console.log(this.props.changeTypes);
            searchActions.loadSearchList({text:this.props.searchQuery,'type':types,'platform':platforms});
            // const path=`/catalog/${categorys}/${types}/${platforms}`;
            //
            // router.push(path);
        }


        //const path=`/catalog/${category}/${type}/${platform}`;
        //router.push(path);

    }

    render() {
        var searchText=this.props.searchQuery;
        var that=this;
        let types=this.props.loadAttributeList[3];
        let platforms=this.props.loadAttributeList[2];
        var type=[];
        var platform=[];
        console.log(this.props);
        if(types){
            for (let x in types.child) {
                type.push(<li key={x}>
                    <label><input type="radio" name="type" value={x}/>
                        {types.child[x]}</label>
                </li>);
            }
        }

        if(platforms){
            for (let x in platforms.child) {
                platform.push(<li key={x}>
                    <label><input type="radio" name="platforms" value={x}/>
                        {platforms.child[x]}</label>
                </li>);
            }
        }
        return (
            <div className="container catalog-container">
                <header className="bl-top">
                    <h1 className="catalogTitles"><i className="icon" />Results For:<span className="searchText">{searchText}</span></h1>
                    <div className="bar-filter">
                        <div className="bar-filter-item">
                            <p className="tt ">商品种类</p>
                            <ul className="drop-item" onClick={that.todo.bind(that,'category')}>
                                <li>
                                    <label><input type="radio" name="category" value="all"/>全部</label>
                                </li>
                                <li>
                                    <label><input type="radio" name="category" value="pcgame"/>电脑游戏</label>
                                </li>
                                <li>
                                    <label><input type="radio" name="category" value="gameCard"/>游戏卡</label>
                                </li>
                            </ul>
                        </div>
                        <div className="bar-filter-item">
                            <p className="tt">类型</p>
                            <ul className="drop-item" onClick={that.todo.bind(that,'type')}>
                                {type}
                            </ul>
                        </div>
                        <div className="bar-filter-item">
                            <p className="tt">平台</p>
                            <ul className="drop-item" onClick={that.todo.bind(that,'platform')}>
                                {platform}
                            </ul>
                        </div>
                        <div className="bar-filter-order">
                            <p>排序：</p>
                            <ul>
                                <li onClick={that.sortByString.bind(that,'priceDown')}>
                                    <a>价格降序</a>
                                </li>
                                <li onClick={that.sortByString.bind(that,'priceUp')}>
                                    <a>价格升序</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}