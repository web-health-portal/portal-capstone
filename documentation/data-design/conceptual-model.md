# ERD CONCEPTUAL MODEL

## Article
- PK: articleId
- articleEnglishTitle
- articleEnglishDate
- articleEnglishImageUrl
- articleEnglishImageAlt
- articleEnglishUrl
- articleSpanishTitle
- articleSpanishDate
- articleSpanishImageUrl
- articleSpanishImageAlt
- articleSpanishUrl

## ArticleCategory (weak entity)
- FK: articleCategoryCategoryId
- FK: articleCategoryArticleId

## Category
- PK: categoryId
- categoryMyHealthFinderId
- categoryEnglishName
- categorySpanishName

## Profile
- PK: profileId
- profileFirstName
- profileLastName
- profileLanguage
- profileEmailAddress
- profileActivationToken
- profileHash
- profileImage

## SavedArticle (weak entity)
- FK: savedArticleProfileId
- FK: savedArticleArticleId 
- savedArticleDateSaved


# Relationships
- Foreign Key **savedArticleProfileId points** to primary key **profileId**
- Foreign Key **savedArticleArticleId points** to primary key **articleCateId**
- Foreign Key **articleCategoryArticleId** points to primary key **articleId**
- Foreign Key **articleCategoryCategoryId** points to primary key **categoryId**
