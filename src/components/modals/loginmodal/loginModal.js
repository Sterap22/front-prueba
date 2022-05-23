import axios from 'axios';
import React, { useState } from 'react'
import { Form, FormControl, InputGroup, Modal, Button } from 'react-bootstrap';
import { urlAPI } from '../../../utils/config';

export default function LoginModal() {
    const [show, setShow] = useState();
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [dataLogin, sedataLogin] = useState(formLogin)

    function formLogin() {
        return {
            correo:'',
            clave:''
        }

    }
    const iniciarSesion = (e) =>{
        e.preventDefault();
        dataLogin.correo = document.getElementById('correo').value
        dataLogin.clave = document.getElementById('clave').value
        axios.post(`${urlAPI}/user/login`,JSON.stringify(dataLogin),{
            headers: {
                "Content-type": "application/json"
            }
        }).then(succ=>{
            console.log(succ.data);
            if (succ.data.status === 202) {
                localStorage.setItem('token', succ.data.token)
                window.location.href ='/'
            }
        })
        handleClose()
    }

  return (
      <>
          <span class="nav-link" onClick={handleShow}>
              Iniciar sesion
          </span>
          <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                  <Form onSubmit={(e)=>{iniciarSesion(e)}}>
                  <InputGroup className="mb-3 m-auto">
                      <h4>
                      Inicio de sesion
                          </h4>
                          </InputGroup>
                      <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                          <FormControl
                            id="correo"
                              placeholder="Username"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                          />
                      </InputGroup>
                      <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">*</InputGroup.Text>
                          <FormControl
                            id="clave"
                              placeholder="Password"
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
