import React from 'react';
import {httpConfig} from "../../utils/http-config"
import * as Yup from "yup";
import {Formik} from "formik";
import {SearchBarContentSpanish} from "./SeachBarContentSpanish";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {fetchArticleSearchResults} from "../../../../store/article/article";

export const SearchBarSpanish = () => {
	let history = useHistory();

	const search = {
		searchKeyword: "",
	};

	const dispatch = useDispatch()
	const validator = Yup.object().shape({
		searchKeyword: Yup.string()
			.required("Introduzca una palabra clave por la que buscar.")
			.min(1, "Una palabra clave de búsqueda debe tener al menos un carácter."),
	});

	const submitSearch = (values, {resetForm, setStatus}) => {
		httpConfig.get(`/apis/article/search/${values.searchKeyword}`)
			.then(reply => {
					let {message, type, data} = reply;
					console.log(data)

					if(reply.status === 200) {
						resetForm();
					}
					dispatch(fetchArticleSearchResults(data))
					history.push("/search-results");

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