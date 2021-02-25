import {Schema} from "express-validator";

export const signupValidator: Schema = {
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
        isLength: {
            errorMessage: 'Language must be between 1 and 7 characters',
            options: {min: 1, max: 7}
        }
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'confirm password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
};