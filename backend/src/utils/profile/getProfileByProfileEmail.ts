import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function getProfileByProfileEmail(profileEmail: string) {
	try {
		const mysqlConnection = await connect();

		const [rows] = await mysqlConnection.execute('SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileFirstName, profileEmailAddress, profileLastName, profileImage FROM profile WHERE profileEmailAddress = :profileEmail', {profileEmail});
		await mysqlConnection.end();
		// @ts-ignore is required so that rows can be interacted with like the array it is
		return rows.length !== 0 ? {...rows[0]} : undefined;
	} catch (error) {
	    throw new Error(error);
	}
}