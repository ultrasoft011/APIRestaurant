import { Container, Row, Col, Button } from "react-bootstrap";
import PreHeader from "../components/PreHeader/PreHeader";
import "./Home.css";
import CustomNavbar from "../components/CustomNavbar/CustomNavbar";

const Home = () => {
  return (
    <div className="home">
      <PreHeader />
      <CustomNavbar />
      <Container>
        <Row>
          <Col>
            <h1>Bienvenido a nuestra panadería</h1>
            <p>Descubre los deliciosos sabores que tenemos para ti.</p>
            <Button variant="primary">Explora nuestro menú</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
