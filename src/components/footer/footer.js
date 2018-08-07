import React from 'react';
import { Container, Navbar } from 'reactstrap';
import "./foot.css"

class Footer extends React.Component {
render() {
    return (
    <div>
        <Navbar color="dark" dark id="foot">
            <Container>
                <h5 className="text-light" id="footText">
                    &copy;
                    &nbsp;
                    2018 Chelsea Gieck
                </h5>
            </Container>
        </Navbar>
    </div>
    );
}};

export default Footer;