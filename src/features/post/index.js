import React from 'react'
import { Route, Switch, useRouteMatch as Match } from 'react-router-dom';

import ShowPost from './pages/post';
import ShowForm from './pages/addPost';
import Update from './pages/updatePost';
import File404 from './pages/File404';

import { useDispatch as UseDispatch } from 'react-redux';
import {useEffect as UseEffect} from 'react';
import actionpost from '../../redux/actions/index.js';
import actionCategories from '../../redux/actions/categories';

import {GET} from '../../api/index';
export default function index() {
    const match = Match();
    const dispatch = UseDispatch();

    UseEffect(()=>{
        GET('/post').then(e=>{
             // save data of posts from state
             const getData = actionpost.getDataSuccess(e);
             dispatch(getData);
        });
        GET('/categories').then(e=>{
            // save data of categories from state
            dispatch(actionCategories.getData(e));
        });

    },[]);

    return (
        <Switch>
            <Route path={match.url+'/add'}>
                <ShowForm/>
            </Route>
            <Route exact path={match.url+'/update'}>
                <Update/>
            </Route>
            <Route exact path={match.url+'/'}>
                <ShowPost/>
            </Route>
            <Route path='*'>
                <File404/>
            </Route>
        </Switch>
    )
}
