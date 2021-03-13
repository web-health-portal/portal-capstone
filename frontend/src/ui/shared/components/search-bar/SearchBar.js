import React from 'react';
import {httpConfig} from "../../utils/http-config"
import * as Yup from "yup";
import {Formik} from "formik";
import {SearchBarContent} from "./SearchBarContent";

export const SearchBar = () => {
	const search = {
		searchKeyword: "",
	};

	const validator = Yup.object().shape({
		searchKeyword: Yup.string()
			.required("Please enter a keyword to search by.")
			.min(1, "A search keyword must be at least one character."),
	});

	const submitSearch = (values, {resetForm, setStatus}) => {
		httpConfig.get("/apis/articles/")
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
			{SearchBarContent}
		</Formik>

	)
};