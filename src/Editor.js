import { Col, Container, Row } from "react-bootstrap";

const Editor = ({data, setData}) => {
    const handleChange = (e) => {
        setData(e.target.value);
    }

    return ( 
        <Container align="center">
            <div id="editor" className="">
                <Row>
                    <Col align="center">
                        <h2 className="bg-primary text-light">Editor</h2>
                    </Col>
                </Row>
                <Row>
                    <Col align="center">
                        <div className="editor-window">
                            <textarea value={data} onChange={handleChange}></textarea>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}
 
export default Editor;