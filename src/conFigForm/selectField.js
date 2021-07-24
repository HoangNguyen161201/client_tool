import React from 'react'
import PropTypes from 'prop-types'

selectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    
    // tự thêm props
    label: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}

selectField.defaultProps = {
    label: '',
    data:[]
}

function selectField(props) {
    return (
        <div>
            <label htmlFor={props.field.name} className="form-label">{props.label}</label>
            <select {...props.field} className="form-control"  id={props.field.name} aria-describedby="emailHelp">
                <option value=''>Select category</option>
                {
                    props.data.map((value,key)=>{
                        return <option value={''+value._id} key={key}>{value.title}</option>
                    })
                }
            </select>
        </div>
    )
}

export default selectField
