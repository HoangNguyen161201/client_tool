import React from 'react'
import PropTypes from 'prop-types'

inputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    
    // tự thêm props
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

inputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}

function inputField(props) {
    return (
        <div>
            <label htmlFor={props.field.name} className="form-label">{props.label}</label>
            <input {...props.field} type={props.type} className="form-control" placeholder={props.placeholder} id={props.field.name} aria-describedby="emailHelp" />
        </div>
    )
}

export default inputField

