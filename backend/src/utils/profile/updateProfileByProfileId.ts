import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";


export async function updateProfileByProfileId(profile: Profile): Promise<string> {
    try {
        //establish connection with the database
        const mySqlConnection = await connect();
        //query is a string for holding a sql statement (prepared statement)
        const query : string = `UPDATE profile 
                                SET profileFirstName=${profile.profileFirstName},
                                SET profileLastName=${profile.profileLastName},
                                SET profileLanguage=${profile.profileLanguage},
                                SET profileEmailLanguage=${profile.profileEmailAddress},
                                SET profileActivationToken=${profile.profileActivationToken},
                                SET profileHash=${profile.profileHash},
                                SET profileImage=${profile.profileImage}
                                WHERE profileId=UUID_TO_BIN(${profile.profileId})`;
        const [rows] = await mySqlConnection.execute(query, profile);
        return "profile successfully updated";
    }
    catch(error) {
        console.error(error.msg);
        return error.msg
    }
}