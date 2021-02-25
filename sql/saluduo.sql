-- More information about NO NULL
-- More information about INDEX
DROP TABLE IF EXISTS savedArticle;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS articleCategory;
DROP TABLE IF EXISTS article;

CREATE TABLE article (
    articleId BINARY(16) NOT NULL,
    articleEnglishTitle VARCHAR(255),
    articleEnglishDate UNSIGNED INT,
    articleEnglishImageUrl VARCHAR (500),
    articleEnglishImageAlt VARCHAR (128) NOT NULL,
    articleEnglishUrl VARCHAR (500),
    articleSpanishTitle VARCHAR(255),
    articleSpanishDate UNSIGNED INT,
    articleSpanishImageUrl VARCHAR (500),
    articleSpanishImageAlt VARCHAR (128) NOT NULL,
    articleSpanishUrl VARCHAR (500),
    PRIMARY KEY (articleId)
);

CREATE TABLE articleCategory (
    articleCategoryCategoryID BINARY(16),
    articleCategoryArticleID BINARY(16),
    FOREIGN KEY(articleCategoryCategoryID) REFERENCES category(categoryId),
    FOREIGN KEY(articleCategoryArticleID)  REFERENCES article(articleId)
);

CREATE TABLE category (
    categoryId BINARY(16),
    categoryEnglishName VARCHAR(255),
    categorySpanishName VARCHAR(255),
    PRIMARY KEY (categoryId)
);

CREATE TABLE profile (
    profileId BINARY(16) NOT NULL,
    profileFirstName VARCHAR (128),
    profileLastName VARCHAR (128),
    profileLanguage,
    profileEmailAddress VARCHAR (128) NOT NULL,
    profileActivationToken,
    profileHash CHAR(97) NOT NULL,
    profileImage,
    UNIQUE(profileEmailAddress),
    PRIMARY KEY (profileId)
);

CREATE TABLE savedArticle (
    savedArticleProfileId BINARY(16),
    savedArticleArticleId BINARY(16),
    FOREIGN KEY(savedArticleProfileId) REFERENCES profile(profileId),
    FOREIGN KEY(savedArticleArticleId) REFERENCES article(articleId)
);