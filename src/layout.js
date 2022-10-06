import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row>
        <Col sm={10}>sm=10</Col>
        <Col sm={2}>sm=2</Col>
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;