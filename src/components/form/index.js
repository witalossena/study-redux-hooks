import React from "react";
import { Formik } from "formik";

import styled from 'styled-components';

const Styleform = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 175px;  
    background: black;
`;
const Styleinput = styled.input`
    margin: 1rem;


`;

export default function Form() {
    return (
        <div className="container">
            <h1>o nome do seu cachorro?</h1>
            <Formik
                initialValues={{ email: "", password: "" }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = "Invalid email address";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                    /* and other goodies */
                }) => (
                        <Styleform onSubmit={handleSubmit}>
                            <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                            {errors.email && touched.email && errors.email}
                            <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                            {errors.password && touched.password && errors.password}
                            <button type="submit" disabled={isSubmitting}> Submit </button>
                        </Styleform>
                    )}
            </Formik>
        </div>
    );
}
