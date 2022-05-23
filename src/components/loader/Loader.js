import React, { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";

export default function Loader(props) {
  const [show] = useState(props.show);
  return (
    <>
      {show && (
        <div>
          <Modal show={show} centered>
            <Modal.Body className="p-5">
              <h4 style={{ textAlign: "center" }}>
                Por favor espere, cargando...
              </h4>
              <Row>
                <Col></Col>
                <Col></Col>
              </Row>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}
