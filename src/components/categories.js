import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import inputField from '../conFigForm/inputField';
import { useDispatch as UseDispatch } from 'react-redux';
import actionCategories from '../redux/actions/categories';
import { POST } from '../api/index';
categories.propTypes = {
  data: PropTypes.array.isRequired
}
export default function categories(props) {
  const dispatch = UseDispatch();
  const Yub = yup.object({
    title: yup.string().required('Not null')
  })
  return (
    <div className='mb-3 col-12 col-sm-3'>
      <p className='fs-4'>Categories</p>
      <Formik
        initialValues={{ title: '' }}
        validationSchema={Yub}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            POST('/categories/addNew', values).then(
              e => {
                dispatch(actionCategories.getData([e]));
              }
            )
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="title" component={inputField} label='Add new' />
            <ErrorMessage style={{ color: 'red' }} name="title" component="div" />
            <button className='mt-3 mb-3 btn btn-primary' type="submit" disabled={isSubmitting}>
              Add new
            </button>
          </Form>
        )}
      </Formik>
      <Link style={{ color: '#4a50c0', fontWeight: 500 }} className='mb-2 text-decoration-none d-block ' to='/post'>All</Link>
      {

        props.data.map((value, key) => {
          return <Link style={{ color: '#4a50c0', fontWeight: 500 }} className='mb-2 text-decoration-none d-block' to={'?Idcategory=' + value._id} key={key}>{value.title}</Link>
        })
      }
    </div>
  )
}



