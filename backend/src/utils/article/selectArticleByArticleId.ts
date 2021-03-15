import {connect} from "../database.utils";

export async function selectArticleByArticleId(articleId: string) {
    try {
        const mySqlConnection = await connect();
        const query : string = "SELECT BIN_TO_UUID(articleId) as articleId, articleEnglishTitle, articleEnglishDate, articleEnglishImageUrl, articleEnglishImageAlt, articleEnglishUrl, articleMyHealthFinderId, articleSpanishTitle, articleSpanishDate, articleSpanishImageUrl, articleSpanishUrl FROM article WHERE articleId = UUID_TO_BIN(:articleId)";

        const [rows] = await mySqlConnection.execute(query, {articleId: articleId});
        await mySqlConnection.end();
        return rows;
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}