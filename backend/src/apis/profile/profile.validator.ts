import {Schema} from "express-validator";

export const profileValidator: Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'please provide a valid profileId'
        }
    },
    profileFirstName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'first name must be between 1 and 128 two characters',
            options: {min: 1, max: 128}
        }
    },
    profileLastName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'last name must be between 1 and 128 characters',
            options: {min: 1, max: 128}
        }
    },
    profileLanguage: {
        escape: true,
        trim: true,
        //check exact match for Español or English
        matches: {
            options: [new RegExp(/Español|English/)],
            errorMessage: 'Language must be Español or English'
        },
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },
    profileImageUrl: {
        optional: {
            options: {
                nullable: true
            }
        },
        isURL: {
            errorMessage: "profile image is malformed please upload a new image"
        },
    },
};