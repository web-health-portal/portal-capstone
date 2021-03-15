import React from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


export const ArticleSpanish = (props) => {
    const {article} = props;

    const formattedDate = new Date(article.articleSpanishDate).toDateString();
    const categories = useSelector(state => {
        const articleCategories = state.articleCategory.filter(articleCategory => {
            return articleCategory.articleCategoryArticleId === article.articleId
        })
        let category = []
        for (let articleCategory of articleCategories) {
            category.push(state.categories.find(category => category.categoryId === articleCategory.articleCategoryCategoryId))
        }
        return category
    })
    return (
        <>
            <Container className={"pt-4"}>
                <Row>
                    <Col lg={3}>
                        {/*Image for article*/}
                        {/*<Image rounded fluid src={article.articleSpanishImageUrl}*/}
                        <Image rounded fluid src={article.articleSpanishImageUrl}
                               alt={article.articleSpanishImageAlt}/>
                    </Col>
                    <Col lg={9}>
                        <Container>
                            <Row>
                                <Col>
                                    {/*Title for article */}
                                    <a href={article.articleSpanishUrl} target="_blank" rel={"noreferrer"}>
                                        <h4>{article.articleSpanishTitle}</h4>
                                    </a>
                                </Col>
                            </Row>
                            <Row className={"px-3"}>
                                <p>
                                    {categories.map(category => <strong>Categoria: {category.categorySpanishName} </strong>)}
                                </p>
                                <p>
                                    Fecha de publicación: {formattedDate}
                                </p>
                            </Row>
                            <Row>
                                <Link to={"#"} className={"px-3 text-sm-left"}>Salvar</Link>
                                <Link to={"#"} className={"px-3 text-sm-left"}>Borrar</Link>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

