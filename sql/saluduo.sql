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
    articleMyHealthFinderId INT,
    articleEnglishUrl VARCHAR (255),
    articleSpanishTitle VARCHAR(255),
    articleSpanishDate DATETIME (6),
    articleSpanishImageUrl VARCHAR (255),
    articleSpanishImageAlt VARCHAR (128),
    articleSpanishUrl VARCHAR (255),
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
    profileActivationToken CHAR(97),
    profileEmailAddress VARCHAR (128) NOT NULL,
    profileFirstName VARCHAR (128) NOT NULL,
    profileHash CHAR(97) NOT NULL,
    profileImage VARCHAR(255),
    profileLastName VARCHAR (128) NOT NULL,
    profileLanguage CHAR (7) NOT NULL,
    UNIQUE(profileEmailAddress),
    PRIMARY KEY (profileId)
);

CREATE TABLE articleCategory (
   articleCategoryArticleId BINARY(16) NOT NULL,
   articleCategoryCategoryId BINARY(16) NOT NULL,
   INDEX (articleCategoryArticleId),
   INDEX (articleCategoryCategoryId),
   FOREIGN KEY(articleCategoryArticleId)  REFERENCES article(articleId),
   FOREIGN KEY(articleCategoryCategoryId) REFERENCES category(categoryId),
   PRIMARY KEY (articleCategoryArticleId, articleCategoryCategoryId)
);

CREATE TABLE savedArticle (
    savedArticleArticleId BINARY(16) NOT NULL,
    savedArticleProfileId BINARY(16) NOT NULL,
    INDEX (savedArticleArticleId),
    INDEX (savedArticleProfileId),
    FOREIGN KEY(savedArticleArticleId) REFERENCES article(articleId),
    FOREIGN KEY(savedArticleProfileId) REFERENCES profile(profileId),
    PRIMARY KEY(savedArticleProfileId, savedArticleArticleId)
);