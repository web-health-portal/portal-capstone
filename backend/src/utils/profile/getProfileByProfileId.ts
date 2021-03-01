import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function getProfileByProfileId(profileId: string) {
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        const query: string = 'SELECT profileId, profileFirstName, profileLastName, profileLanguage, profileEmailAddress, profileActivationToken, profileHash, profileImage FROM profile WHERE profileId=UUID_TO_BIN(:profileId)';
        const [rows] = await mySqlConnection.execute(query, profileId);
        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (error) {
        throw new Error(error);
    }
}