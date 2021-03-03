import {Schema} from "express-validator";

export const articleValidator: Schema = {
    articleId: {
        isUUID: {
        }
    },
    articleEnglishTitle: {
        escape: true,
        trim: true,
    },
    articleEnglishDate: {
        escape: true,
        trim: true,
    },
    articleEnglishImageUrl: {
        escape: true,
        trim: true,
    },
    articleEnglishImageAlt: {
        escape: true,
        trim: true,
    },
    articleEnglishUrl: {
        escape: true,
        trim: true,
    },
    articleSpanishTitle: {
        escape: true,
        trim: true,
    },
    articleSpanishDate: {
        escape: true,
        trim: true,
    },
    articleSpanishImageUrl: {
        escape: true,
        trim: true,
    },
    articleSpanishImageAlt: {
        escape: true,
        trim: true,
    },
    articleSpanishUrl: {
        escape: true,
        trim: true,
    },
}