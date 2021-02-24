import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";


export async function insertProfile(profile: Profile) : Promise<string>{
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        const query : string = "define insert sql statement here";
        const [rows] = await mySqlConnection.execute(query, profile);
        return "article successfully inserted";
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}