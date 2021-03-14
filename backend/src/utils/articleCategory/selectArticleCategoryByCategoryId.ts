import {connect} from "../database.utils";

export async function selectArticleCategoryByCategoryId(articleId: string) {
    try {
        const mySqlConnection = await connect();
        const query : string = "SELECT BIN_TO_UUID(articleCategoryCategoryId) as articleCategoryCategoryId, articleCategoryCategoryId FROM articleCategory WHERE articleCategoryCategoryId = UUID_TO_BIN(:articleCategoryId)";

        const [rows] = await mySqlConnection.execute(query, {articleCategoryId: articleId});
        await mySqlConnection.end();
        return rows;
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}