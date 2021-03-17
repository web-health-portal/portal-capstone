import {FormDebugger} from "../../FormDebugger";
import React from "react";

export const LogInFormContentSpanish = (props) => {
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
                {/*controlId must match what is passed to the initialValues prop*/}
                <div className="form-group">
                    <label htmlFor="profileEmailAddress">Correo electrónico</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            id="profileEmailAddress"
                            type="email"
                            value={values.profileEmailAddress}
                            placeholder="Correo electrónico "
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
                {/*controlId must match what is defined by the initialValues object*/}
                <div className="form-group">
                    <label htmlFor="profilePassword">Contraseña</label>
                    <div className="input-group">
                        <input
                            id="profilePassword"
                            className="form-control"
                            type="password"
                            placeholder="Contraseña"
                            value={values.profilePassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {errors.profilePassword && touched.profilePassword && (
                        <div className="alert alert-danger">{errors.profilePassword}</div>
                    )}
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mb-2 mr-2" type="submit">Enviar</button>
                    <button
                        className="btn btn-danger mb-2"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </button>
                </div>
                {/*<FormDebugger {...props} />*/}
            </form>
            {status && (<div className={status.type}>{status.message}</div>)}
        </>
    )
};