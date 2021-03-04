import {connect} from "../database.utils";

export async function getArticleByMyHealthFinderId(articleMyHealthFinderId: number) {
	try {
		const mySqlConnection = await connect();
        const query : string = 'SELECT BIN_TO_UUID(articleId), articleEnglishTitle, articleEnglishDate, articleEnglishImageUrl, articleEnglishImageAlt, articleMyHealthFinderId, articleSpanishTitle, articleSpanishDate, articleSpanishImageUrl, articleSpanishUrl FROM article WHERE articleMyHealthFinderId = :articleMyHealthFinderId';
		const [rows] = await mySqlConnection.execute(query, articleMyHealthFinderId);

		await mySqlConnection.end();
		// @ts-ignore is required so that rows can be interacted with like the array it is
		return rows.length !== 0 ? {...rows[0]} : undefined;
	} catch (error) {
	    throw new Error(error);
	}
}