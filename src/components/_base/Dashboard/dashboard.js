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
function dashboard() {
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
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry the Bird</td>
                      <td>@twitter</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>@mdo</td>
                    </tr>
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

export default dashboard;
