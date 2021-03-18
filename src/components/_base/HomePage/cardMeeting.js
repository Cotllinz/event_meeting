import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../../../assets/css/cardMeeting.css";
import Image from "../../../assets/img/img_example.svg";
import HumanImage from "../../../assets/img/human_example.svg";
import { GeoAltFill } from "react-bootstrap-icons";
function cardMeeting() {
  return (
    <div className="card__meeting mt-lg-4 mt-4">
      <Container>
        <Row xs={1} lg={3}>
          <Col>
            <Card className="card_main mb-3">
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Title className="card_title">
                  <div className="location_meeting d-flex align-items-center">
                    <GeoAltFill className="mr-1" color="orange" />
                    <h5 className="mt-1">PISANGAN TIMUR, JAKARTA</h5>
                  </div>
                  <div className="title_meeting mt-2">
                    <h2>Meeting With CEO</h2>
                    <p>17 Agustus 2020</p>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  sint assumenda molestias accusantium dolorem dolore cumque
                  porro! Incidunt dolore odio, numquam iste, provident atque
                  dolores
                </section>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card_main mb-3">
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Title className="card_title">
                  <div className="location_meeting d-flex align-items-center">
                    <GeoAltFill className="mr-1" color="orange" />
                    <h5 className="mt-1">PISANGAN TIMUR, JAKARTA</h5>
                  </div>
                  <div className="title_meeting mt-2">
                    <h2>Meeting With CEO</h2>
                    <p>17 Agustus 2020</p>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  sint assumenda molestias accusantium dolorem dolore cumque
                  porro! Incidunt dolore odio, numquam iste, provident atque
                  dolores
                </section>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card_main  mb-3">
              <Card.Img variant="top" src={Image} />
              <Card.Body>
                <Card.Title className="card_title">
                  <div className="location_meeting d-flex align-items-center">
                    <GeoAltFill className="mr-1" color="orange" />
                    <h5 className="mt-1">PISANGAN TIMUR, JAKARTA</h5>
                  </div>
                  <div className="title_meeting mt-2">
                    <h2>Meeting With CEO</h2>
                    <p>17 Agustus 2020</p>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  sint assumenda molestias accusantium dolorem dolore cumque
                  porro! Incidunt dolore odio, numquam iste, provident atque
                  dolores
                </section>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default cardMeeting;
