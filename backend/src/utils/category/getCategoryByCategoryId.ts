import {connect} from "../database.utils";
import {Category} from "../interfaces/Category";

export async function getCategoryId(categoryId: string) {
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        const query: string = `SELECT categoryId, categoryEnglishName, categorySpanishName
        FROM category WHERE profileId=UUID_TO_BIN(${categoryId})`;
        const [rows] = await mySqlConnection.execute(query, categoryId);
        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (error) {
        console.error(error.msg);
        return error.msg;
    }
}