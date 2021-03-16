import React from 'react';
import {httpConfig} from "../../utils/http-config"
import * as Yup from "yup";
import {Formik} from "formik";
import {SearchBarContent} from "./SearchBarContent";
import {useDispatch} from "react-redux";
import {fetchArticleSearchResults} from "../../../../store/article/article";

export const SearchBar = () => {
	const search = {

		searchKeyword: "",
	};
	const dispatch = useDispatch()
	const validator = Yup.object().shape({
		searchKeyword: Yup.string()
			.required("Please enter a keyword to search by.")
			.min(1, "A search keyword must be at least one character."),
	});

	const submitSearch = (values, {resetForm, setStatus}) => {
		//TODO: probably do this with Redux
		httpConfig.get("/apis/article/")
			.then(reply => {
					let {message, type, data} = reply;
					console.log(data)

					if(reply.status === 200) {
						resetForm();
					}
					dispatch(fetchArticleSearchResults(data))
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