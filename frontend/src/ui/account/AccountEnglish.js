import React from "react"
import {Form, Button, Col, Container, FormControl, FormGroup, Row} from "react-bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faCamera} from "@fortawesome/free-solid-svg-icons";
import {ArticleEnglish} from "../shared/components/article/ArticleEnglish";
import {AccountPreferencesEnglish} from "../shared/components/account-preferences/AccountPreferencesEnglish";
import "../styles.css"
import profile from "../../store/profile";

library.add(faCamera, faUser);


export const AccountEnglish = (props) => {
    const {englishSavedArticle} = props;
    const {username} = props;

    return (
        <>
            <h1 className={"mx-3"}>Account</h1>
            <h3 className={"mx-3"}>{`Hello ${username}`}</h3>
            <Container as={"section"} fluid className={"p-3"}>
                <Row>
                    <Col md={4} className={"border-right border-dark md-auto"}>
                        <Row className={"justify-content-center align-items-center"}>
                            <FontAwesomeIcon icon={faUser} size="10x" className={"p-4 border rounded-circle"}/>
                            <FontAwesomeIcon icon={faCamera} size="lg" className={"mx-2"}/>
                        </Row>
                        <Row className={"mt-1 justify-content-center"}>
                                <Col>
                                    {profile && <AccountPreferencesEnglish profile={profile}/>}
                                </Col>
                            </Row>
                        <Row className={"mt-1"}>
                        </Row>
                    </Col>
                    <Col md={8} className={"pt-3"}>
                        <h3>Your Saved Articles</h3>
                        <Row>
                            <Container>
                                <Row>
                                    <Col className={"article-grid"}>
                                        {
                                            englishSavedArticle.map(article => <ArticleEnglish key={article.articleId}
                                                                                               article={article}/>)
                                        }
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </>

    )
}