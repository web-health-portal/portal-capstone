import {FormDebugger} from "../../FormDebugger";
import React from "react";

export const SearchBarContentSpanish = (props) => {
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
                <div className={'form-group container p-1 d-flex justify-content-md-between '}>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="searchKeyword"
                            type="text"
                            value={values.searchKeyword}
                            placeholder={"¿En qué podemos ayudarle?"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.searchKeyword && touched.searchKeyword && (
                            <div className="alert alert-danger">
                                {errors.searchKeyword}
                            </div>
                        )
                    }
                    <div className="form-group">
                        <button className="btn btn-primary mb-2 primary mx-3" type="submit">
                            ¡Buscar!
                        </button>
                    </div>
                </div>
                {/*<FormDebugger {...props}/>*/}
            </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>
    )
}
