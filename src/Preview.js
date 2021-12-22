import { marked } from "marked";
import { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";

const Preview = (props) => {
    const render = (text) => {
        return marked.parse(text);
    }

    useEffect(() => {
        console.log("useEffect ran");
        
    }, []);

    return ( 
        <Container>
            <div id="preview">
                <Row align="center">
                    <Col>
                        <h2 className="bg-primary text-light">Preview</h2>
                    </Col>
                </Row>
                <Col>
                    <div dangerouslySetInnerHTML={{ __html: render(props.data)}}></div>
                    {/* <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>test</th>
                                <th>test 2</th>
                                <th>tset 3</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                    </table> */}
                </Col>
            </div>
        </Container>
     );
}
 
export default Preview;