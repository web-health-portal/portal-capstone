import {connect} from "../database.utils";
import {Article} from "../interfaces/Article";
import { v4 as uuidv4 } from 'uuid';

export async function insertSavedArticle(tweet: Tweet) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "";

        const [rows] = await mySqlConnection.execute(mySqlQuery, tweet)
        console.log("saved article successfully inserted");
        return "saved article successfully inserted";
    }
    catch (error) {
        console.log(error)
    }
}