import {connect} from "../database.utils";

export async function getProfileByProfileActivationToken(profileActivationToken: string) {
	try {
		const mysqlConnection = await connect();

		const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileFirstName, profileLastName, profileLanguage, profileEmailAddress, profileImage FROM profile WHERE profileActivationToken = :profileActivationToken', {profileActivationToken});

		// @ts-ignore is required so that rows can be interacted with like the array it is
		return rows.length !== 0 ? {...rows[0]} : undefined;
	} catch (error) {
	    throw new Error(error);
	}
}