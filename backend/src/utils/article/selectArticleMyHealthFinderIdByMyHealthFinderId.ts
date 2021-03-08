import {connect} from "../database.utils";

export async function selectArticleMyHealthFinderIdByMyHealthFinderId(articleMyHealthFinderId: string) {
	try {
		const mySqlConnection = await connect();
        const [rows] = await mySqlConnection.execute('SELECT  articleMyHealthFinderId FROM article WHERE articleMyHealthFinderId = :articleMyHealthFinderId', {articleMyHealthFinderId});
		await mySqlConnection.end();
		// @ts-ignore is required so that rows can be interacted with like the array it is
		return rows.length !== 0 ? {...rows[0]} : {articleMyHealthFinderId: ""};
	} catch (error) {
	    throw new Error(error);
	}
}