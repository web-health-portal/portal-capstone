#ERD CONCEPTUAL MODEL

##Profile
- PK: profileId
- profileFirstName
- profileLastName
- profileLanguage
- profileEmailAddress
- profileActivationToken
- profileHash
- profileImage

##Category
- PK: categoryId
- categoryEnglishName
- categorySpanishName

##ArticleCategory (weak entity)
- FK: articleCategoryCategoryId
- FK: articleCategoryArticleId

##SavedArticle (weak entity)
- FK: savedArticleProfileId
- FK: savedArticleArticleId 
- savedArticleDateSaved

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
