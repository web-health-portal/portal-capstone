import {connect} from "../database.utils";

export async function selectArticleByCategoryId(categoryId: string) {
    try {
        const mySqlConnection = await connect();
        const query : string = "SELECT BIN_TO_UUID(article.articleId) as articleId, articleEnglishTitle, articleEnglishDate, articleEnglishImageUrl, articleEnglishImageAlt, articleEnglishUrl, articleMyHealthFinderId, articleSpanishTitle, articleSpanishDate, articleSpanishImageUrl, articleSpanishUrl FROM articleCategory INNER JOIN article ON article.articleId = articleCategory.articleCategoryArticleId WHERE articleCategory.articleCategoryCategoryId = UUID_TO_BIN(:categoryId)";

        const [rows] = await mySqlConnection.execute(query, {categoryId: categoryId});
        await mySqlConnection.end();
        console.log(rows);
        return rows;
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}