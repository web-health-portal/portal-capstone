import {connect} from "../database.utils";

export async function selectArticlesBySearchKeyword(keyword: string) {
    try {
        const mySqlConnection = await connect();
        const query: string = "SELECT BIN_TO_UUID(articleId) as articleId, articleEnglishTitle, articleEnglishDate, articleEnglishImageUrl, articleEnglishImageAlt, articleMyHealthFinderId, articleEnglishUrl, articleSpanishTitle, articleSpanishDate, articleSpanishImageUrl, articleSpanishImageAlt, articleSpanishUrl FROM article WHERE (articleEnglishTitle LIKE CONCAT(\'%\',:keyword,\'%\') OR articleSpanishTitle LIKE CONCAT('%',:keyword,'%'))";

        const [rows] = await mySqlConnection.execute(query, {keyword: keyword});
        await mySqlConnection.end();
        return rows;
    } catch (error) {
        console.error(error);
        return error.msg;
    }
}
