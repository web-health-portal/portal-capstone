import {connect} from "../database.utils";
import {SavedArticle} from "../interfaces/SavedArticle";

export async function deleteSavedArticle(savedArticle: SavedArticle) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "DELETE FROM `savedArticle` WHERE savedArticleArticleId = UUID_TO_BIN(:savedArticleArticleId) AND savedArticleProfileId = UUID_TO_BIN(:savedArticleProfileId)";

        await mySqlConnection.execute(mySqlQuery, savedArticle)
        return "article deleted successfully"
    }

    catch (error) {
        console.log(error)
        throw error.message
    }
}