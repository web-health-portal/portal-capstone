import {connect} from "../database.utils";
import {Category} from "../interfaces/Category";
import {Profile} from "../interfaces/Profile";
import {Status} from "../interfaces/Status";

export async function selectAllCategories() {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT categoryId, categoryEnglishName, categorySpanishName FROM category WHERE categoryId=UUID_TO_BIN(:categoryId)';
        const [rows] = await mySqlConnection.execute(mySqlQuery)
        return rows;
    } catch (error) {
        console.log(error)
    }
}