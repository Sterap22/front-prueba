import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';

export default function Comentariomodal(props) {
    const [show, setShow] = useState();
    const handleClose = () => {
        setShow(false)
        window.history.pushState(null,'','/auth/inicio')
    }
    const handleShow = () => {
        setShow(true)
        window.history.pushState(null,'','/crearCometario')
    }
    const iniciarSesion = (e) =>{
        e.preventDefault();
        let data = document.getElementById('Comentario').value
        props.createComment(data)
        handleClose()
    }

  return (
      <>
          <span class="nav-link" onClick={handleShow} style={{cursor: 'pointer',color:'#fff'}}>
            Crear comentario
          </span>
          <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                  <Form onSubmit={(e)=>{iniciarSesion(e)}}>
                  <InputGroup className="mb-3 m-auto">
                      <h4>
                        Crear comentario
                          </h4>
                          </InputGroup>
                      <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                          <FormControl
                            id="Comentario"
                              placeholder="Username"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                          />
                      </InputGroup>
                      <InputGroup className="mb-3">
                          <Button type='submit' variant="success" className='m-auto'> Iniciar sesion </Button>
                      </InputGroup>
                  </Form>
              </Modal.Body>
          </Modal>
      </>
  )
}
