import {connect} from "../database.utils";

export async function getArticleMyHealthFinderIdByMyHealthFinderId() {
	try {
		const mySqlConnection = await connect();
		//get 10 random article records
		const [rows] = await mySqlConnection.execute('SELECT BIN_TO_UUID(articleId), articleEnglishTitle, articleEnglishDate, articleEnglishImageUrl, articleEnglishImageAlt, articleEnglishUrl,articleSpanishTitle, articleSpanishDate, articleSpanishImageUrl, articleSpanishImageAlt, articleSpanishUrl FROM article ORDER BY RAND() LIMIT 10');
		await mySqlConnection.end();
		// @ts-ignore is required so that rows can be interacted with like the array it is
		return rows;
	} catch (error) {
	    throw new Error(error);
	}
}