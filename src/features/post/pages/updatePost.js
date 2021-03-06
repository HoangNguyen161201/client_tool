import React from 'react'
import { Link , useLocation as UseLocation, useHistory as UseHistory} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import inputField from '../../../conFigForm/inputField';
import selectField from '../../../conFigForm/selectField';
import fileField from '../../../conFigForm/fileField';
import {useDispatch as UseDispatch, useSelector as UseSelector} from 'react-redux';
import postAction from '../../../redux/actions/index';
import {POSTFILE, POST} from '../../../api/index';
import fileAction from '../../../redux/actions/file';
import {useEffect as UseEffect} from 'react';
function updatePost() {
    var dataPosts = UseSelector(state=>state.post).data;
    function UseQuery() {
        return new URLSearchParams(UseLocation().search);
    }
    const query = UseQuery();
    const idPost = query.get('idPost');
    var dataUpdate = {};
    
     dataPosts.map(e=>{
        if(e._id === idPost){
            dataUpdate = e;
            return e;
        }
        return 0;
    });



    const dispatch = UseDispatch();
    const history = UseHistory();
    const getfile = UseSelector(state=>state.saveFile);
    const getDlCt = UseSelector(state=>state.categories).data;


    const check = yup.object({
        title: yup.string().required('Not null'),
        link: yup.string().url('It is not the link').required('Not null'),
        content: yup.string().required('Not null'),
    });
    
    UseEffect(()=>{
        dispatch(fileAction.resetFile()); 
    },[]);

    
    return (
<div className='container-sm'>
            <div className='container-sm'>

                <div className='row justify-content-center '>
                    <div className='p-0 col-12 col-sm-8 col-lg-6 d-flex justify-content-between align-items-center'>
                        <p style={{ color: '#4a50c0', fontWeight: '500' }} className='mt-4 text-center fs-4'>Add new tool</p>
                        <Link to='/post' className='btn btn-primary'>Back</Link>
                    </div>
                </div>
                <div className='row justify-content-center '>
                    <Formik
                        initialValues={{
                            title: dataUpdate.title,
                            content: dataUpdate.content,
                            link: dataUpdate.link,
                            id_category: dataUpdate.id_category,
                            img: ''
                        }}
                        validationSchema = {check}
                        validate = {value=>{
                            const error = {};
                            if(
                                !value.img.toLowerCase().endsWith('.png') &&
                                !value.img.toLowerCase().endsWith('.jpg') &&
                                !value.img.toLowerCase().endsWith('.jpeg') &&
                                !value.img.toLowerCase().endsWith('.gif') &&
                                value.img
                            ){
                                error.img = 'khong phai image';
                            }
                            return {
                                ...error
                            }
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                const r = new FormData();
                                r.append('file',getfile.file);

                                var dataUpdate = {...values};
                                dataUpdate.img = getfile.file.name;
                                dataUpdate._id = String(idPost);
                                POSTFILE('/post/update',r);
                                POST('/post/update',dataUpdate).then(e=>{
                                    dispatch(postAction.update(e));
                                    history.push('/post');
                                });
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className='p-4 mt-3 border shadow-sm col-12 col-sm-8 col-lg-6 border-primary rounded-2'>
                                <div className="mb-3">
                                    <Field name='title' type='text' placeholder='enter title' label='Title' component={inputField} />
                                    <ErrorMessage className="form-text" style={{color: 'red'}} name='title' component='small'/>
                                </div>
                                <div className=" row row-cols-1 row-cols-sm-2">
                                    <div className='col'>
                                        <div className="mb-3">
                                            <Field name='link' type='url' placeholder='enter link' label='Link' component={inputField} />
                                            <ErrorMessage className="form-text" style={{color: 'red'}} name='link' component='small'/>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="mb-3">
                                            <Field name='id_category' data={getDlCt} label='Category' component={selectField} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="content" className="form-label">Content</label>
                                    <Field component='textarea' className="form-control" name='content' id='content' />
                                    <ErrorMessage className="form-text" style={{color: 'red'}} name='content' component='small'/>
                                </div>
                                <div className="mb-3">
                                    <Field name='img' type='file' id='file' label='Insert image' component={fileField} />
                                    <ErrorMessage className="form-text" style={{color: 'red'}} name='img' component='small'/>
                                </div>
                                <button type="submit" disabled={isSubmitting} className="mb-2 btn btn-primary">Update</button>
                            </Form>

                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}



export default updatePost

