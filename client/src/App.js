import { Col, Container, Row } from "react-bootstrap";
import Todo from "./pages/Todo";
import Toastr from "./global/Toastr";

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <center>
              <Todo />
            </center>
          </Col>
        </Row>
      </Container>
      <Toastr />
    </>
  );
};

export default App;
