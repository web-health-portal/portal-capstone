import {ButtonGroup, Container, Row, ToggleButton} from "react-bootstrap";
import React, {useState} from "react";


export const LanguageToggle = () => {
    const [radioValue, setRadioValue] = useState('1');

    //for English buttons
    const radioButtons = [
        {name: 'English', value: '1'},
        {name: 'Español', value: '2'},
    ];

    return (
        <>
            <Container fluid>
                <Row className={"justify-content-center py-2 bg-dark"}>
                    <ButtonGroup toggle>
                        {radioButtons.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="primary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Row>
            </Container>
        </>
    )
}
