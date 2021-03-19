import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../../../assets/css/cardMeeting.css";
import Image from "../../../assets/img/img_example.svg";
import HumanImage from "../../../assets/img/human_example.svg";
import { GeoAltFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import moment from "moment";
import { meeting } from "../Forms/formReducer";
function CardMeeting() {
  const Meeting = useSelector(meeting);

  return (
    <div className="card__meeting mt-lg-4 mt-4">
      <Container>
        <Row xs={1} lg={3}>
          {Meeting.map((items, index) => {
            return (
              <Col key={index}>
                <Card className="card_main mb-3">
                  <Card.Img
                    variant="top"
                    src={items.Images ? items.Images : Image}
                  />
                  <Card.Body>
                    <Card.Title className="card_title">
                      <div className="location_meeting d-flex align-items-center">
                        <GeoAltFill className="mr-1" color="orange" />
                        <h5 className="mt-1">{items.locationMeeting}</h5>
                      </div>
                      <div className="title_meeting mt-2">
                        <h2>{items.meetingName}</h2>
                        <p>{moment(items.dateMeeting).format("LL")}</p>
                      </div>
                    </Card.Title>
                    <hr />
                    <main className="participant d-flex justify-content-center">
                      <section className="d-flex participant_wrapper align-self-center mr-2">
                        <img
                          className="participant_images mr-2"
                          src={HumanImage}
                          alt="humanPicture"
                        />
                        <p>Rudy Galih</p>
                      </section>
                      <section className="d-flex participant_wrapper align-self-center mr-2">
                        <img
                          className="participant_images mr-2"
                          src={HumanImage}
                          alt="humanPicture"
                        />
                        <p>Rudy Galih</p>
                      </section>
                      <section className="d-flex participant_wrapper align-self-center mr-2">
                        <img
                          className="participant_images mr-2"
                          src={HumanImage}
                          alt="humanPicture"
                        />
                        <p>Rudy Galih</p>
                      </section>
                    </main>
                    <hr className="mt-0" />
                    <section className="Note">
                      <h5>Note :</h5>
                      {items.notesMeeting}
                    </section>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default CardMeeting;
