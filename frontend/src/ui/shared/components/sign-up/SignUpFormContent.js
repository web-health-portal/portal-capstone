import {FormDebugger} from "../../FormDebugger";
import React from "react";

export const SignUpFormContent = (props) => {
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*-first name*/}
                <div className={'form-group'}>
                    <label htmlFor="profileFirstName">First Name</label>
                    <div className="input-group">
                        <input
                               className="form-control"
                               name="profileFirstName"
                               type="text"
                               value={values.profileFirstName}
                               placeholder={"Enter first name"}
                               onChange={handleChange}
                               onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.profileFirstName && touched.profileFirstName && (
                            <div className="alert alert-danger">
                                {errors.profileFirstName}
                            </div>
                        )
                    }
                </div>
                {/*-last name*/}
                <div className={'form-group'}>
                    <label htmlFor="profileLastName">Last Name</label>
                    <div className="input-group">
                        <input
                               className="form-control"
                               name="profileLastName"
                               type="text"
                               value={values.profileLastName}
                               placeholder={"Enter last name"}
                               onChange={handleChange}
                               onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.profileLastName && touched.profileLastName && (
                            <div className="alert alert-danger">
                                {errors.profileLastName}
                            </div>
                        )
                    }
                </div>
                {/*-email*/}
                <div className="form-group">
                    <label htmlFor="profileEmail">Email Address</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="profileEmailAddress"
                            type="email"
                            value={values.profileEmailAddress}
                            placeholder="your-email@domain.com"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.profileEmailAddress && touched.profileEmailAddress && (
                            <div className="alert alert-danger">
                                {errors.profileEmailAddress}
                            </div>
                        )

                    }
                </div>
                {/*password*/}
                <div className="form-group">
                    <label htmlFor="profilePassword">Password</label>
                    <div className="input-group">
                        <input
                            name="profilePassword"
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            value={values.profilePassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.profilePassword && touched.profilePassword &&
                    (<div className="alert alert-danger">{errors.profilePassword}</div>)
                    }
                </div>
                {/*verify password*/}
                <div className="form-group">
                    <label htmlFor="profilePasswordConfirm">Confirm Your Password</label>
                    <div className="input-group">
                        <input

                            className="form-control"
                            type="password"
                            name="profilePasswordConfirm"
                            placeholder="Password Confirm"
                            value={values.profilePasswordConfirm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.profilePasswordConfirm && touched.profilePasswordConfirm &&
                        (<div className="alert alert-danger">{errors.profilePasswordConfirm}</div>)
                    }
                </div>

                {/*-language preference*/}
                <div className="form-group">
                    <label htmlFor="profileLanguage">Language Preference</label>
                    <select className="form-control"
                            name="profileLanguage"
                            value={values.profileLanguage}
                            onChange={handleChange}
                            onBlur={handleBlur}
                    >
                        <option>English</option>
                        <option>Español</option>
                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary mb-2" type="submit">
                        Submit
                    </button>
                    <button
                        className="btn btn-danger mb-2"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >
                        Reset
                    </button>
                </div>
                <FormDebugger {...props}/>
            </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
}
