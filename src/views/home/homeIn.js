import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, InputGroup, Table } from 'react-bootstrap'
import Comentariomodal from '../../components/modals/comentarioModal/comentariomodal'
import { urlAPI } from '../../utils/config'
import { getUser } from '../../utils/validations'

export default function HomeIn() {
    const [ comment, setComment ] = useState(formularioComment)
    function formularioComment() {
        return {
            id:'',
            comment:'',
            idusuario:getUser().id,
            correo:''
        }

    }
    useEffect(()=>{
        getComment()
    },[])
    const postComment=(e)=>{
        axios.post(`${urlAPI}/comment/add`,JSON.stringify({comment:e, idusuario:getUser().id}),{
            headers: {
                "Content-type": "application/json",
                "authorization": localStorage.getItem('token')
            }
        }).then((suss)=>{
            getComment()
        }).catch((err)=>{})
    }
    const getComment=()=>{
        axios.get(`${urlAPI}/comment/get`,{
            headers: {
                "Content-type": "application/json",
                "authorization": localStorage.getItem('token')
            }
        }).then((suss)=>{
            console.log(suss.data.data);
            if(suss.data.data !== undefined){
                setComment(suss.data.data)
            }
        }).catch((err)=>{})
    }
  return (
    <div className='p-4'>
        {
            comment.length > 0 ?(
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Correo</th>
                        <th>Comentario</th>
                        <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        comment.map((x)=>{
                            return(
                                    <tr>
                                    <td>{x.correo}</td>
                                    <td>{x.comentario}</td>
                                    <td>
                                        <InputGroup >
                                            <Button type='submit' variant="success" className='m-auto'> Editar</Button>
                                        </InputGroup>
                                    </td>
                                    </tr>
                            )
                        })
                    }
                    </tbody>
                    
                </Table>
            ):(
            <div>
                <h1 className='Error404'>404</h1>
                <InputGroup className="mb-3">
                    <Button type='submit' variant="success" className='m-auto'> <Comentariomodal createComment={postComment}/></Button>
                </InputGroup>
            </div>
            )
        }
        
    </div>
  )
}
