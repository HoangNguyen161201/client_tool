import React from 'react';
import PropTypes from 'prop-types';
import fileAction from '../redux/actions/file';
import {useDispatch as UseDispatch} from 'react-redux';
fileField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    
    // tự thêm props
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

fileField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}


function fileField(props) {
    const dispatch = UseDispatch();

    const change = (event)=>{
        dispatch(fileAction.saveFile({
            file: event.target.files[0],
        }))
        props.field.onChange({
            target:{
                name: props.field.name,
                value: event.target.value,
            }
        })
    }
    return (
        <div>
            <label htmlFor={props.field.name} className="form-label">{props.label}</label>
            <input {...props.field} type={props.type} onChange={(event)=>change(event)} className="form-control" placeholder={props.placeholder} id={props.field.name} aria-describedby="emailHelp" />
        </div>
    )
}

export default fileField

