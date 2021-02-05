#ERD CONCEPTUAL MODEL

##Article
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

##ArticleCategory (weak entity)
- FK: articleCategoryCategoryId
- FK: articleCategoryArticleId

##Category
- PK: categoryId
- categoryEnglishName
- categorySpanishName

##Profile
- PK: profileId
- profileFirstName
- profileLastName
- profileLanguage
- profileEmailAddress
- profileActivationToken
- profileHash
- profileImage

##SavedArticle (weak entity)
- FK: savedArticleProfileId
- FK: savedArticleArticleId 
- savedArticleDateSaved
