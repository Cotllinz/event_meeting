import React from "react";
import {
  Card,
  Col,
  Container,
  FormControl,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import "../../../assets/css/dashboard.css";
import { useSelector } from "react-redux";
import moment from "moment";
import { meeting } from "../Forms/formReducer";
function Dashboard() {
  const Meeting = useSelector(meeting);
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="dashboard_meeting mt-5 mt-lg-0">
      <Container>
        <Row>
          <Col xs={12}>
            <FormControl className="searchInput" placeholder="Search" />
          </Col>
          <Col xs={12} className="mt-3">
            <Card className="table__wrapper">
              <Card.Body>
                <Table className="mt-3" striped bordered hover>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Title Meet</th>
                      <th>Location</th>
                      <th>Date</th>
                      <th>Participant</th>
                      <th>Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Meeting.map((items, index) => {
                      return (
                        <tr key="index">
                          <td>{index + 1}</td>
                          <td>{items.meetingName}</td>
                          <td>{items.locationMeeting}</td>
                          <td>{moment(items.dateMeeting).format("LL")}</td>
                          <td>{items.participantMeeting}</td>
                          <td>{items.notesMeeting}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>

                <Pagination
                  className="d-flex justify-content-center mt-4"
                  size="md"
                >
                  {items}
                </Pagination>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
