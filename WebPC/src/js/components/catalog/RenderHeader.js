import React, {
    Component
} from 'react';

export default class RenderHeader extends Component {
    componentWillMount() {
        const {
            catalogAction
        } = this.props;
        catalogAction.loadAttributeList();
    }

    sortByString(str,e){
        const { catalogAction }=this.props;
        e.stopPropagation();
        if(str==="priceDown"){
            let page=this.props.viewMore;
            let categorys=this.props.changeType.category;
            let types=this.props.changeType.type;
            let platforms=this.props.changeType.platform;
            let perpage=this.props.getCatalogPerpage;
            if(page==2)
            {
                catalogAction.loadGamesList({price:'price_desc','type':types,'platform':platforms});
            }
            else {
                catalogAction.loadGamesList({price:'price_desc','type':types,'platform':platforms,'page':page,'perpage':perpage});
            }

        }
        else if(str==="priceUp")
        {
            let page=this.props.viewMore;
            let categorys=this.props.changeType.category;
            let types=this.props.changeType.type;
            let platforms=this.props.changeType.platform;
            let perpage=this.props.getCatalogPerpage;
            if(page==2)
            {
                catalogAction.loadGamesList({price:'price_asc','type':types,'platform':platforms});
            }
            else {
                catalogAction.loadGamesList({price:'price_asc','type':types,'platform':platforms,'page':page,'perpage':perpage});
            }
        }
    }

    todo(id,e){
        e.stopPropagation();
        const { router }=this.props;
        const { catalogAction}=this.props;
        if(id==="category"){
            let category=e.target.getAttribute('value');
            catalogAction.changeType(category,'category');

            let categorys=this.props.changeType.category;
            let types=this.props.changeType.type;
            let platforms=this.props.changeType.platform;
            const path=`/catalog/${categorys}/${types}/${platforms}`;

            router.push(path);
        }
        else if(id==='type'){
            let type=e.target.getAttribute('value');
            catalogAction.changeType(type,'type');

            let categorys=this.props.changeType.category;
            let types=this.props.changeType.type;
            let platforms=this.props.changeType.platform;
            let perpage=this.props.getCatalogPerpage;
            catalogAction.loadGamesList({'type':types,'platform':platforms,'perpage':perpage});
            // const path=`/catalog/${categorys}/${types}/${platforms}`;
            //
            //
            // router.push(path);
        }
        else if(id==='platform'){
            let platform=e.target.getAttribute('value');
            catalogAction.changeType(platform,'platform');


            let categorys=this.props.changeType.category;
            let types=this.props.changeType.type;
            let platforms=this.props.changeType.platform;
            let perpage=this.props.getCatalogPerpage;
            catalogAction.loadGamesList({'type':types,'platform':platforms,'perpage':perpage});
            // const path=`/catalog/${categorys}/${types}/${platforms}`;
            //
            // router.push(path);
        }


        //const path=`/catalog/${category}/${type}/${platform}`;
        //router.push(path);

    }

    render() {
        var that=this;
        let types=this.props.loadAttributeList[3];
        let platforms=this.props.loadAttributeList[2];
        var type=[];
        var platform=[];
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