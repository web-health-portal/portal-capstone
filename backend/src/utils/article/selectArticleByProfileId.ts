import {connect} from "../database.utils";

export async function selectArticleByProfileId(profileId: string) {
    try {
        const mySqlConnection = await connect();
        const query : string = "SELECT BIN_TO_UUID(article.articleId) as articleId, articleEnglishTitle, articleEnglishDate, articleEnglishImageUrl, articleEnglishImageAlt, articleMyHealthFinderId, articleSpanishTitle, articleSpanishDate, articleSpanishImageUrl, articleSpanishUrl FROM savedArticle INNER JOIN article ON article.articleId = savedArticle.savedArticleArticleId WHERE savedArticleProfileId = UUID_TO_BIN(:profileId)";

        const [rows] = await mySqlConnection.execute(query, {profileId: profileId});
        await mySqlConnection.end();
        console.log(rows);
        return rows;
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}