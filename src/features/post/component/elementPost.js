import React from 'react'
import PropTypes from 'prop-types';
import {useDispatch as UseDispatch} from 'react-redux';
import actionpost from '../../../redux/actions/index.js';
import {useRouteMatch as UseRouteMatch, Link} from 'react-router-dom';
elementPost.propTypes = {
    title:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    img: PropTypes.string,
    link: PropTypes.string.isRequired

}
elementPost.defaultProps = {
    title: 'hoang',
    content: 'hoang',
    img: '',
    link:''
}

export default function elementPost(props) {
    const match = UseRouteMatch();
    const dispatch = UseDispatch();
    const Delete = (event)=>{
        var id = event.target.getAttribute('data-id');
        dispatch(actionpost.delete(id));
    
    }
    return (
        <div className='mb-4 col'>
            <div style={{height: '100%'}} className='card text-decoration-none'>
                <a target='_blank' rel="noreferrer" style={{ cursor: 'pointer' }} href={props.link}>
                    <img style={{objectFit:'cover', minHeight:'300px', maxHeight: '300px'}} src={props.img} className="card-img-top" alt="..." />
                </a>
                <div className="mt-2 card-body">
                    <h5 style={{ color: 'black' }} className="card-title">{props.title}</h5>
                    <p style={{ color: 'black' }} className="mb-4 card-text">{props.content}</p>
                    <div style={{ height:40}}>
                        
                    </div>
                    <div style={{position: 'absolute', bottom: 20}} className='btn-group ' role='group'>
                        <Link className='btn btn-outline-primary' to={match.url+'/update?idPost='+props.id}>Update</Link>
                        <button onClick= {(event)=>Delete(event)} className='btn btn-outline-danger' data-id={props.id}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}




