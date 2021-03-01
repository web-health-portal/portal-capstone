import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";


export async function insertProfile(profile: Profile): Promise<string> {
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        const query: string = 'INSERT into profile(profileId, profileFirstName, profileLastName, profileLanguage, profileEmailAddress, profileActivationToken, profileHash, profileImage) VALUES(UUID_TO_BIN(UUID()), :profileFirstName, :profileLastName, :profileLanguage, :profileEmailAddress, :profileActivationToken, :profileHash, :profileImage)';
        const [rows] = await mySqlConnection.execute(query, profile);
        return "profile successfully inserted";
    } catch (error) {
        throw new Error(error);
    }
}