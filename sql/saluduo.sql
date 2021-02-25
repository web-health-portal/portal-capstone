-- More information about NO NULL
-- More information about INDEX
DROP TABLE IF EXISTS savedArticle;
DROP TABLE IF EXISTS articleCategory;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS profile;

CREATE TABLE article (
    articleId BINARY(16) NOT NULL,
    articleEnglishTitle VARCHAR(255),
    articleEnglishDate DATETIME (6),
    articleEnglishImageUrl VARCHAR (255),
    articleEnglishImageAlt VARCHAR (128),
    articleEnglishUrl VARCHAR (255),
    articleSpanishTitle VARCHAR(255),
    articleSpanishDate DATETIME (6),
    articleSpanishImageUrl VARCHAR (500),
    articleSpanishImageAlt VARCHAR (128),
    articleSpanishUrl VARCHAR (500),
    PRIMARY KEY (articleId)
);

CREATE TABLE category (
    categoryId BINARY(16) NOT NULL,
    categoryEnglishName VARCHAR(255),
    categorySpanishName VARCHAR(255),
    PRIMARY KEY (categoryId)
);

CREATE TABLE profile (
    profileId BINARY(16) NOT NULL,
    profileFirstName VARCHAR (128) NOT NULL,
    profileLastName VARCHAR (128) NOT NULL,
    profileLanguage CHAR (7) NOT NULL,
    profileEmailAddress VARCHAR (128) NOT NULL,
    profileActivationToken CHAR(97),
    profileHash CHAR(97) NOT NULL,
    profileImage VARCHAR(255),
    UNIQUE(profileEmailAddress),
    PRIMARY KEY (profileId)
);
CREATE TABLE articleCategory (
   articleCategoryCategoryID BINARY(16) NOT NULL,
   articleCategoryArticleID BINARY(16) NOT NULL,
   FOREIGN KEY(articleCategoryCategoryID) REFERENCES category(categoryId),
   FOREIGN KEY(articleCategoryArticleID)  REFERENCES article(articleId),
   PRIMARY KEY (articleCategoryCategoryID, articleCategoryArticleID)
);

CREATE TABLE savedArticle (
    savedArticleProfileId BINARY(16) NOT NULL,
    savedArticleArticleId BINARY(16) NOT NULL,
    FOREIGN KEY(savedArticleProfileId) REFERENCES profile(profileId),
    FOREIGN KEY(savedArticleArticleId) REFERENCES article(articleId),
    PRIMARY KEY(savedArticleProfileId, savedArticleArticleId)
);