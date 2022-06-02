import React from 'react'
import { Card } from 'react-bootstrap'
import Registermodal from '../../components/modals/registermodal/registermodal'
import Slide from '../../components/slide/slide'

export default function Home() {
  const dataImg = [
    {img:'https://cdn.pixabay.com/photo/2014/02/13/07/28/cms-265128_960_720.jpg'},
    {img:'https://cdn.pixabay.com/photo/2014/02/13/07/28/cms-265127_960_720.jpg'},
    {img:'https://cdn.pixabay.com/photo/2014/02/13/07/28/cms-265133_960_720.jpg'}
  ]
  return (
    <div>
        <Slide />
        <div className='d-lg-flex d-md-flex d-block'>
          {
            dataImg.map((x)=>{
              return(
                <div className='col-lg-4 col-md-6 col-sm-12 p-4'>
                  <Card  className='m-auto w-80'>
                    <Card.Img variant="top" src={x.img} style={{maxHeight: '240px'}}/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Registermodal />
                    </Card.Body>
                  </Card>
                </div>
              )
            })
          }
        </div>
       
    </div>
  )
}
