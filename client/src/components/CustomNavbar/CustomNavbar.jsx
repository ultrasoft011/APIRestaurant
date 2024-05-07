import { Container, Navbar, Nav } from "react-bootstrap";
import "./CustomNavbar.css"; // Importa el archivo de estilos CSS

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="container-main">
        {/* Elementos a la izquierda */}
        <Navbar.Brand href="#home" className="mr-auto navbar-left">
          Left 1
        </Navbar.Brand>{" "}
        {/* Agrega la clase mr-auto para empujar los elementos hacia la izquierda */}
        <Nav className="d-flex flex-row">
          {" "}
          {/* Utiliza d-flex y flex-row para hacer que los elementos se muestren en la misma fila */}
          <Nav.Link href="#home" className="navbar-left">
            Left 2
          </Nav.Link>
          <Nav.Link href="#features" className="navbar-left">
            Left 3
          </Nav.Link>
        </Nav>
        {/* Elemento en el centro */}
        <Navbar.Brand className="mx-auto navbar-center" href="#home">
          {" "}
          {/* Agrega las clases mx-auto y navbar-center */}
          Centro
        </Navbar.Brand>
        {/* Elementos a la derecha */}
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="navbar-right">
            Right 1
          </Nav.Link>
          <Nav.Link href="#features" className="navbar-right">
            Right 2
          </Nav.Link>
          <Nav.Link href="#pricing" className="navbar-right">
            Right 3
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
