import {connect} from "../database.utils";
import {PartialProfile} from "../interfaces/Profile";


export async function insertPartialProfile(partialProfile: PartialProfile): Promise<string> {
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        const query: string = 'INSERT into profile(profileId, profileFirstName, profileLastName, profileLanguage, profileEmailAddress, profileImage) VALUES((UUID_TO_BIN(UUID()), :profileId, :profileFirstName, :profileLastName, :profileLanguage, :profileEmailAddress, :profileImage)';
        const [rows] = await mySqlConnection.execute(query, partialProfile);
        return "profile successfully inserted";
    } catch (error) {
        return error;
    }
}