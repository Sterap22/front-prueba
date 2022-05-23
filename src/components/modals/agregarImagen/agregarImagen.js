import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { urlAPI } from '../../../utils/config';

export default function AgregarImagen() {
    const [show, setShow] = useState();
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [imgRtaDB, setimgRtaDB] = useState(ImagenProducto)
    let rutafta;

    function ImagenProducto() {
        return {
            img:'',
            titulo:'',
            descripcion:''
        }

    }

    const handleInputChange = (e) => {
        let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        let reader = new FileReader();
        reader.onload = _handleReaderLoaded.bind(e);
        reader.readAsDataURL(file);
    }
    const _handleReaderLoaded = (e) => {
        let reader = e.target;
        rutafta = reader.result.toString()
        imgRtaDB.img = "data:image/jpeg;base64," +reader.result.split('jpeg;base64,')[1];
        
    }
    const Guardarproducto = (e) =>{
        e.preventDefault();
        imgRtaDB.titulo = document.getElementById('textTitulo').value
        imgRtaDB.descripcion = document.getElementById('textDescription').value
        console.log(imgRtaDB);
        axios.post(`${urlAPI}/producto/crearProducto`,JSON.stringify(imgRtaDB),{
            headers: {
                "Content-type": "application/json",
                "authorization": localStorage.getItem('token')
            }
        })
        handleClose()
    }
    return (
        <>
            <span class="nav-link" onClick={handleShow}>
                Agregar producto
            </span>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form onSubmit={(e)=>{Guardarproducto(e)}}>
                    <InputGroup className="mb-3">
                        <p className='m-auto'>Agrega tu producto</p>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Titulo</InputGroup.Text>
                            <FormControl aria-label="Titulo del producto" id="textTitulo"/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Descripción</InputGroup.Text>
                            <FormControl aria-label="descripción del producto" id="textDescription" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <input type='file' id="inputPhoto" name="file" accept="image/*" onChange={(e) => { handleInputChange(e) }}/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Button type='submit' variant="success" className='m-auto'> Agregar </Button>
                        </InputGroup>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
