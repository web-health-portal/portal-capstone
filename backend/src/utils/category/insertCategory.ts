import {Category} from "../interfaces/Category";
import {connect} from "../database.utils";

export async function insertCategory(category: Category) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO category(categoryId, categoryEnglishName,categorySpanishName) VALUES(UUID_TO_BIN(:categoryId), :categoryEnglishName, :categorySpanishName)";

        const [rows] = await mySqlConnection.execute(mySqlQuery, category)
        await mySqlConnection.end();
        return "Category successfully inserted"
    } catch (error) {
        console.log(error)
    }
}
