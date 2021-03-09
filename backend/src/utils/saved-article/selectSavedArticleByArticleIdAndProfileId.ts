import {connect} from "../database.utils";
import {SavedArticle} from "../interfaces/SavedArticle";

export async function selectSavedArticleByArticleIdAndProfileId(savedArticle: SavedArticle) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT savedArticleArticleId, savedArticleProfileId FROM `savedArticle` WHERE savedArticleArticleId = UUID_TO_BIN(:savedArticleArticleId) AND savedArticleProfileId = UUID_TO_BIN(:savedArticleProfileId)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, savedArticle)
        await mySqlConnection.end()
        return rows
    }

    catch (error) {
        console.log(error)
        throw error.message
    }
}