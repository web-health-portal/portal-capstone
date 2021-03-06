import {connect} from "../database.utils";
import {SavedArticle} from "../interfaces/SavedArticle";

export async function insertSavedArticle(savedArticle: SavedArticle) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "'INSERT into `savedArticle`(categoryId'";

        const [rows] = await mySqlConnection.execute(mySqlQuery, savedArticle)
        console.log("saved article successfully inserted");
        return "saved article successfully inserted";
    }

    catch (error) {
        console.log(error)
        throw error.message
    }
}