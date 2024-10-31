import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useRef } from "react";

const Contato = () => {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://script.google.com/macros/s/AKfycbxDtxVaG63tBcYVWyd3mhLD-h6aUe_mlwTOewl3woPUDLyxfw3ggRUpwkftGK_vNB1q/exec", {
      method: 'POST',
      body: new FormData(formRef.current),
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        alert(data.msg);
      })
      .catch(err => console.log(err));
  };
  return (
    <Container style={{ width: "50%", height: "100vh", alignItems: "center", display: "flex", justifyContent: "center" }}>
      <Form style={{ textAlign: "left", backgroundColor: "gray", padding: "5%", borderRadius: "15px" }} ref={formRef} onSubmit={handleSubmit}>
        <h3>Formulario de Contato</h3>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome" name="Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" name="Email" required />
          <Form.Text className="text-muted">
            Não compartilhe seu email para qualquer pessoa!
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Description">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" rows={3} name="Message" required />
        </Form.Group>
        <Button style={{ float: "right" }} variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
export default Contato;