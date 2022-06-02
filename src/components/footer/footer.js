import React from 'react'
import { Card } from 'react-bootstrap'

export default function Footer() {
  return (
    <Card>
        <Card.Header style={{textAlign:'center'}}>Footer</Card.Header>
        <Card.Body>
            <Card.Title>Contactanos: xxx-xxxx-xxx</Card.Title>
            <Card.Text>
                Ⓒopyright
            </Card.Text>
        </Card.Body>
    </Card>
  )
}
