import React from "react";
import { Card, Col, Container, Button, Form, Row } from "react-bootstrap";
import "../../../assets/css/form.css";
import Image from "../../../assets/img/img_example.svg";
function form() {
  return (
    <div className="mt-4 meetingForm">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <Card className="formData">
              <Card.Body>
                <h2>+ Add Event</h2>
                <Form className="mt-3">
                  <Form.Row>
                    <Form.Group as={Col} controlId="Title">
                      <Form.Control type="text" placeholder="Title Meeting" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="Location">
                      <Form.Control
                        type="text"
                        placeholder="Location Meeting"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="participantCapacity">
                      <Form.Control
                        type="number"
                        placeholder="Participant Meeting"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="dateEvent">
                      <Form.Control type="date" />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="TextareaNote">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Note Meeting"
                      style={{ resize: "none" }}
                    />
                  </Form.Group>
                  <Form.File
                    label="Upload Picture"
                    custom
                    onChange={(e) => {
                      console.log(e.target.value.slice(12));
                    }}
                    id="fileUpload"
                  ></Form.File>
                  <Button className="mt-3 py-2 px-5 btn_submit">Submit</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={{ order: "first" }} lg={{ cols: 6, order: "last" }}>
            <section>
              <img
                className="imagePreview mb-3"
                src={Image}
                alt="image_preview"
              />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default form;
