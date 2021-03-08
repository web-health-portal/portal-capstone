import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function selectProfileByProfileEmail(profileEmailAddress: string) {
	try {
		const mysqlConnection = await connect();

		const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileFirstName, profileEmailAddress, profileLastName, profileImage, profileHash FROM profile WHERE profileEmailAddress = :profileEmailAddress', {profileEmailAddress});
		await mysqlConnection.end();
		// @ts-ignore is required so that rows can be interacted with like the array it is
		return rows.length !== 0 ? {...rows[0]} : undefined;
	} catch (error) {
	    throw new Error(error);
	}
}