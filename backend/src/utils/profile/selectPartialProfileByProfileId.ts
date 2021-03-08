import {connect} from "../database.utils";
import {PartialProfile} from "../interfaces/Profile";

export async function selectPartialProfileByProfileId(profileId: string) {
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        const [rows] = await mySqlConnection.execute('SELECT profileId, profileFirstName, profileLastName, profileLanguage, profileEmailAddress, profileImage FROM profile WHERE profileId=UUID_TO_BIN(:profileId)', {profileId});
        await mySqlConnection.end();
        // @ts-ignore is required so that rows can be interacted with like the array it is
        return rows.length !== 0 ? {...rows[0]} : undefined;
    }
    catch(error) {
        throw new Error(error);
    }
}