import React from 'react'
import { useDispatch as UseDispatch } from 'react-redux';
import actionpost from '../redux/actions/index.js';

export default function search() {
    const dispatch = UseDispatch();
    const searchDl = (event) => {
        dispatch(actionpost.find(event.target.value));
    }
    return (
        <div className='p-3 mb-4 container-sm '>
            <div className='row row-cols-lg-2 row-cols-sm-1 row-cols-1'>
                <div className='col mb-sm-3'>
                    <p style={{ color: '#4a50c0', fontWeight: 500 }} className='fs-4 text-color-primary'>
                        UI tools
                    </p>
                    <p>
                        tools help to design beautiful web
                    </p>
                </div>
                <div className='p-2 p-sm-2 p-lg-0 col d-flex align-items-center'>
                    <input placeholder='Search by name' onInput={(event) => searchDl(event)} type='text' className='form-control' />
                </div>
            </div>
        </div>
    )
}
