import {connect} from "../database.utils";

export async function selectArticleCategoryByArticleId(articleId: string) {
    try {
        const mySqlConnection = await connect();
        const query : string = "SELECT BIN_TO_UUID(articleCategoryArticleId) as articleCategoryArticleId, BIN_TO_UUID(articleCategoryCategoryId) AS articleCategoryCategoryId FROM articleCategory WHERE articleCategoryArticleId = UUID_TO_BIN(:articleId)";

        const [rows] = await mySqlConnection.execute(query, {articleId: articleId});
        await mySqlConnection.end();
        return rows;
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}