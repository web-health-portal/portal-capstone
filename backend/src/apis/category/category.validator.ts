import {Schema} from "express-validator";

export const categoryValidator: Schema = {
    categoryId: {
        isUUID: {
        }
    },
    categoryEnglishName: {
        escape: true,
        trim: true,
    },
    categorySpanishName: {
        escape: true,
        trim: true,
    },
};