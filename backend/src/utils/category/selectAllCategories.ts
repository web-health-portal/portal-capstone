import {connect} from "../database.utils";
import {Category} from "../interfaces/Category";
import {Profile} from "../interfaces/Profile";
import {Status} from "../interfaces/Status";

export async function selectAllCategories() {
    try {
        const mySqlConnection = await connect()

        const mySqlQuery = 'SELECT BIN_TO_UUID(categoryId) AS categoryId, categoryEnglishName, categorySpanishName FROM category';

        const [rows] = await mySqlConnection.execute(mySqlQuery)
        await mySqlConnection.end();
        return rows;
    } catch (error) {
        throw error.message
    }
}