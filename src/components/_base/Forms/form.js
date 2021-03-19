import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Button,
  Form,
  Row,
  Alert,
} from "react-bootstrap";
import "../../../assets/css/form.css";
import { useDispatch } from "react-redux";
import { setMeeting } from "./formReducer";
import ImageDefault from "../../../assets/img/img_example.svg";
function Forms() {
  const [Image, setImage] = useState("");
  const [Error, setError] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [Success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const Forms = {
      meetingName: event.target[0].value,
      locationMeeting: event.target[1].value,
      participantMeeting: event.target[2].value,
      dateMeeting: event.target[3].value,
      notesMeeting: event.target[4].value,
      Images:
        event.target.files && event.target[5].files[0]
          ? URL.createObjectURL(event.target[5].files[0])
          : "",
    };
    if (
      Forms.Images &&
      Forms.dateMeeting &&
      Forms.meetingName &&
      Forms.locationMeeting &&
      Forms.notesMeeting &&
      Forms.participantMeeting
    ) {
      if (Forms.notesMeeting.length > 50) {
        dispatch(setMeeting(Forms));
        /* Clear Fill Form */
        setSuccess(true);
        setImage("");
        event.target[0].value = null;
        event.target[1].value = null;
        event.target[2].value = null;
        event.target[3].value = null;
        event.target[4].value = null;
        event.target[5].value = null;
      } else {
        setErrorMsg("Note Meeting Min 50 kata");
        setError(true);
      }
    } else {
      setErrorMsg("Fill all form first");
      setError(true);
    }
    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 4000);
  };
  const onImageReview = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className="mt-4 meetingForm">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <Card className="formData">
              <Alert transition={true} show={Error} variant="danger">
                {ErrorMsg}
              </Alert>
              <Alert transition={true} show={Success} variant="success">
                Success Create Meeting Rooms
              </Alert>
              <Card.Body>
                <h2>+ Add Event </h2>
                <Form onSubmit={handleSubmit} className="mt-3">
                  <Form.Row>
                    <Form.Group as={Col} controlId="Title">
                      <Form.Control
                        type="text"
                        name="title"
                        placeholder="Title Meeting"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="Location">
                      <Form.Control
                        type="text"
                        name="location"
                        placeholder="Location Meeting"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="participantCapacity">
                      <Form.Control
                        type="number"
                        name="parrticipant"
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
                      name="notes"
                      placeholder="Note Meeting"
                      style={{ resize: "none" }}
                    />
                  </Form.Group>
                  <Form.File
                    label="Upload Picture"
                    custom
                    name="files"
                    onChange={onImageReview}
                    id="fileUpload"
                  ></Form.File>
                  <Button type="submit" className="mt-3 py-2 px-5 btn_submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={{ order: "first" }} lg={{ cols: 6, order: "last" }}>
            <section>
              <img
                className="imagePreview mb-3"
                src={Image ? Image : ImageDefault}
                alt="image_preview"
              />
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Forms;
