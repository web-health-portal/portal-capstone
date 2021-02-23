export interface Profile {
    profileId: string,
    profileFirstName: string,
    profileLastName: string,
    profileLanguage: string,
    profileEmailAddress: string,
    profileActivationToken: string|null,
    profileHash: string,
    profileImage: string|null
}