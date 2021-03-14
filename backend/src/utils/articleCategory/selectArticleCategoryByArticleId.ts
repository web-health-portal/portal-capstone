import {connect} from "../database.utils";

export async function selectArticleCategoryByArticleId(articleId: string) {
    try {
        const mySqlConnection = await connect();
        const query : string = "SELECT BIN_TO_UUID(articleCategoryArticleId) as articleCategoryId, articleCategoryArticleId FROM articleCategory WHERE articleCategoryArticleId = UUID_TO_BIN(:articleCategoryId)";

        const [rows] = await mySqlConnection.execute(query, {articleCategoryId: articleId});
        await mySqlConnection.end();
        return rows;
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}