import { Col, Form, Row } from "react-bootstrap";

export function SearchForm() {
    return (
        <div>
            <Form className="my-4">
                <Row className="justify-content-center">
                    <Col md={4} className="d-flex align-items-center">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Buscar.." aria-label="Buscar.." aria-describedby="button-addon2" />
                            <button className="btn btn-primary" type="button" id="button-addon2">Buscar</button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>

    )
}