import {connect} from "../database.utils";

export async function getCategoryByCategoryId(categoryId: string) {
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        const query: string = 'SELECT BIN_TO_UUID(categoryId) AS  categoryId, categoryEnglishName, categorySpanishName FROM category WHERE categoryId=UUID_TO_BIN(:categoryId)';
        const [rows] = await mySqlConnection.execute(query,{categoryId});
        await mySqlConnection.end();
        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (error) {
        throw new Error(error);
    }
}