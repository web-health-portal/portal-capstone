import {connect} from "../database.utils";

export async function selectArticlesByProfileId(profileId: string) {
    try {
        const mySqlConnection = await connect();
        const query : string = "SELECT BIN_TO_UUID(savedArticle.savedArticleProfileId) as profileId, BIN_TO_UUID(article.articleId) as articleId, articleEnglishTitle, articleEnglishDate, articleEnglishImageUrl, articleEnglishImageAlt, articleMyHealthFinderId, articleSpanishTitle, articleSpanishDate, articleSpanishImageUrl, articleSpanishUrl FROM article INNER JOIN savedArticle ON article.articleId = savedArticle.savedArticleArticleId WHERE savedArticleProfileId = :profileId";

        const [rows] = await mySqlConnection.execute(query, {profileId: profileId});
        await mySqlConnection.end();
        console.log();
        console.log(rows);
        return rows;
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}