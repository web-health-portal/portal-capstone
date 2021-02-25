import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function getProfileByProfileId(profile: Profile) : Promise<string>{
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        const query : string = `SELECT profileId, profileFirstName, profileLastName, profileLanguage, profileEmailAddress, profileActivationToken, profileHash, profileImage
        FROM profile WHERE profileId=UUID_TO_BIN(${profile.profileId})`;
        const [rows] = await mySqlConnection.execute(query, profile);
        return JSON.stringify(profile);
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}