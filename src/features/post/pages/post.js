import React from 'react'
import Search from '../../../components/search';
import Categories from '../../../components/categories';
import ElementPost from './../component/elementPost';
import { useSelector as UseSelector } from 'react-redux';
import { Link,useRouteMatch as UseRouteMatch, useLocation as UseLocation  } from 'react-router-dom';

export default function post() {
    const math = UseRouteMatch();

    function UseQuery() {
        return new URLSearchParams(UseLocation().search);
    }
    const query = UseQuery();
    const idPost = query.get('Idcategory');

    // get state have data of posts
    const getState = UseSelector(state=>state.post);
    var postData = [] ;
    // search post by name
    const search = ()=>{
        if(getState.data){
            postData = getState.data.filter(value=>{
                if(value.title.toLowerCase().includes(getState.search.toLowerCase())){
                    if(idPost){
                        console.log('fsf',idPost);
                        if(value.id_category === String(idPost)){
                            return value;
                        }
                    }
                    else{
                        return value;
                    }
                }
                return 0;
            });
        }
    }
    search();

    // get state have data of categories
    const getStateCategories = UseSelector(state=>state.categories).data;

    return (
        <div >
            <Search />
            <div className='p-3 container-sm'>
                <div className='row'>
                    <Categories data={getStateCategories}/>
                    <div className='pr-0 col-sm-9 col-12'>
                        <div className='pr-0 row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1'>
                            {
                                postData.map((e, key)=>{
                                    return <ElementPost title = {e.title} id={e._id} link={e.link} img={e.img} content = {e.content} key={key}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Link to={math.url+'/add'} style={{bottom: 30, right: 30}} className='position-fixed rounded-circle btn btn-lg btn-primary '>
                <span className='m-0'>+</span>
            </Link>
        </div>
    )
}
