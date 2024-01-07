import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';


const CommentsFrom = () => {
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                >
                {({ isSubmitting }) => (
                    <Form>
                    <Field type="email" name="email" className="rounded-2xl outline outline-neutral-600" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button  button type="submit" disabled={isSubmitting} className='bg-enfanato text-white hover:bg-white hover:text-enfanato hover:outline-dashed outline-[1px] duration-300 py-2 px-3'>
                        Submit
                    </button>
                    </Form>
                )}
                </Formik>
        </div>
    );
};

export default CommentsFrom;