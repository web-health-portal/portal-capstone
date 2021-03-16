import React from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


export const ArticleSpanish = (props) => {
    const {article} = props;

    const formattedDate = new Date(article.articleSpanishDate).toLocaleDateString("es-ES");
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
            <Container className={"pt-4 border rounded"}>
                <Row>
                    <Col lg={3}>
                        {/*Image for article*/}
                        <Image rounded fluid src={article.articleSpanishImageUrl}
                               alt={article.articleSpanishImageAlt}/>
                    </Col>
                    <Col lg={9}>
                        <Container>
                            <Row>
                                <Col>
                                    {/*Title for article */}
                                    <a href={article.articleSpanishUrl} target="_blank" rel={"noreferrer"}>
                                        <h5>{article.articleSpanishTitle}</h5>
                                    </a>
                                </Col>
                            </Row>
                            <Row className={"px-3"}>
                                <Col className={"col-6"}>
                                    <p>
                                        <strong className={"mr-1"}>Categoria: </strong>
                                        {categories.map(category => category.categorySpanishName)}
                                    </p>
                                </Col>
                                <Col className={"col-6"}>
                                    <p>
                                        Fecha de publicación: {formattedDate}
                                    </p>
                                </Col>
                            </Row>
                            <Row className={"px-3"}>
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

