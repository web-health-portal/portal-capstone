import {connect} from "../database.utils";
import {SavedArticle} from "../interfaces/SavedArticle";

export async function insertSavedArticle(savedArticle: SavedArticle) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO savedArticle VALUES(UUID_TO_BIN(:savedArticleArticleId), UUID_TO_BIN(:savedArticleProfileId))";

        const [rows] = await mySqlConnection.execute(mySqlQuery, savedArticle)
        console.log("saved article successfully inserted");
        return "saved article successfully inserted";
    }

    catch (error) {
        console.log(error)
        throw error.message
    }
}