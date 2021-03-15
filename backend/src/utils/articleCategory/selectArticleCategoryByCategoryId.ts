import {connect} from "../database.utils";

export async function selectArticleCategoryByCategoryId(categoryId: string) {
    try {
        const mySqlConnection = await connect();
        const query : string = "SELECT BIN_TO_UUID(articleCategoryArticleId) as articleCategoryArticleId, BIN_TO_UUID(articleCategoryCategoryId) AS articleCategoryCategoryId FROM articleCategory WHERE articleCategoryCategoryId = UUID_TO_BIN(:categoryId)";

        const [rows] = await mySqlConnection.execute(query, {categoryId: categoryId});
        await mySqlConnection.end();
        console.log(rows)
        return rows;
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}