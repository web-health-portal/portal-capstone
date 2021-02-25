import {connect} from "../database.utils";
import {PartialProfile} from "../interfaces/Profile";

export async function getProfileByProfileId(partialProfile: PartialProfile) : Promise<string>{
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        const query : string = `SELECT profileId, profileFirstName, profileLastName, profileLanguage, profileEmailAddress, profileImage
        FROM profile WHERE profileId=UUID_TO_BIN(${partialProfile.profileId})`;
        const [rows] = await mySqlConnection.execute(query, partialProfile);
        return JSON.stringify(partialProfile);
    }
    catch(error) {
        console.error(error.msg);
        return error.msg;
    }
}