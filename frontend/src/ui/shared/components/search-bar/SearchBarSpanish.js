import React from 'react';
import {httpConfig} from "../../utils/http-config"
import * as Yup from "yup";
import {Formik} from "formik";
import {SearchBarContentSpanish} from "./SeachBarContentSpanish";

export const SearchBarSpanish = () => {
	const search = {
		searchKeyword: "",
	};

	const validator = Yup.object().shape({
		searchKeyword: Yup.string()
			.required("Introduzca una palabra clave por la que buscar.")
			.min(1, "Una palabra clave de búsqueda debe tener al menos un carácter."),
	});

	const submitSearch = (values, {resetForm, setStatus}) => {
		//TODO: probably do this with Redux
		httpConfig.get("/apis/article/")
			.then(reply => {
					let {message, type} = reply;

					if(reply.status === 200) {
						resetForm();
					}
					setStatus({message, type});
				}
			);
	};


	return (

		<Formik
			initialValues={search}
			onSubmit={submitSearch}
			validationSchema={validator}
		>
			{SearchBarContentSpanish}
		</Formik>

	)
};