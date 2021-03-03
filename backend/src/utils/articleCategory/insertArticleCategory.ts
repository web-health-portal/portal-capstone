import {connect} from "../database.utils";
import {ArticleCategory} from "../interfaces/ArticleCategory";

export async function insertArticleCategory(articleCategory: ArticleCategory) : Promise<string>{
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        const query : string = 'INSERT into  articleCategory(articleCategoryCategoryId, articleCategoryArticleId) VALUES(:articleCategoryCategoryId, :articleCategoryArticleId)';
        const [rows] = await mySqlConnection.execute(query, articleCategory);
        return "articleCategory successfully inserted";
    }
    catch(error) {
        throw new Error(error);
    }
}