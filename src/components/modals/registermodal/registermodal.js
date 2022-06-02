import axios from 'axios';
import * as CryptoJS from "crypto-js";
import React, {  useState } from 'react'
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { urlAPI } from '../../../utils/config';
import { validateEmail } from '../../../utils/validations';

export default function Registermodal() {
    const [show, setShow] = useState();
    const [showMess, setShowMess] = useState(false);
    const handleClose = () => {
        setShow(false)
        setShowMess(false)
        window.history.pushState(null,'','/')
    }
    const handleShow = () => {
        setShow(true)
        window.history.pushState(null,'','/registrar')
    }
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
        console.log(validateEmail(dataLogin.correo),'validacion');
        if(validateEmail(dataLogin.correo)  && dataLogin.clave !== ''){

            axios.post(`${urlAPI}/user/register`,JSON.stringify(dataLogin),{
                headers: {
                    "Content-type": "application/json"
                }
            }).then(succ=>{
                console.log(succ.data);
                if (succ.data.status === 202) {
                    localStorage.setItem('token', succ.data.token)
                    localStorage.setItem('user', CryptoJS.AES.encrypt(JSON.stringify(succ.data.data[0]), "Wsweh38w_ds"))
                    window.location.href ='/auth/inicio'
                }
            })
            handleClose()
        }else{
            setShowMess(true)
        }
    }

  return (
      <>
          <span class="nav-link" onClick={handleShow} style={{cursor: 'pointer'}}>
              Quiero unirme
          </span>
          <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                  <Form onSubmit={(e)=>{iniciarSesion(e)}}>
                  <InputGroup className="mb-3 m-auto">
                      <h4>
                        Registrar usuario
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
                              type='password'
                          />
                      </InputGroup>
                      <InputGroup className="mb-3">
                            <span style={{display:showMess?'block':'none', color:'red'}} >Erro tus datos no estan completos o son incorrectos</span>
                          <Button type='submit' variant="success" className='m-auto'> Registrar </Button>
                      </InputGroup>
                  </Form>
              </Modal.Body>
          </Modal>
      </>
  )
}

