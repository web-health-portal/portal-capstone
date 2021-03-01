import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";


export async function updateProfile(profile: Profile): Promise<string> {
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        const query : string = 'UPDATE profile SET profileFirstName=:profileFirstName, profileLastName=:profileLastName, profileLanguage=:profileLanguage, profileEmailAddress=:profileEmailAddress, profileActivationToken=:profileActivationToken, profileHash=:profileHash, profileImage=:profileImage WHERE profileId=UUID_TO_BIN(:profileId)';
        const [rows] = await mySqlConnection.execute(query, profile);
        return "profile successfully updated";
    }
    catch(error) {
        throw new Error(error);
    }
}