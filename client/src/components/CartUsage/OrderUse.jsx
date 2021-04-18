import React, { useEffect, useState } from "react"
import {Container, Row, Col, Modal, Button, Card, InputGroup, Form} from 'react-bootstrap'
import NumberFormat from "react-number-format"
import NumericInput from 'react-numeric-input'
import swal from 'sweetalert'
import './CartUse.css'

//-------------- Redux ------------------------
import { connect } from 'react-redux'

function OrderUse(prod) {
    // let cantidad = []
    const [state, setState] = useState({
        cantidad: prod.orderline.orderline.quantity
    })
    

    useEffect(() => {

        prod.quantityChange(state.cantidad, prod.orderline.orderline.id)
    }, [state])

    const handleCant = (value) => {
       setState({
        ...state,
        cantidad: value})
      // if (value <= prod.orderline.stock+prod.orderline.orderline.quantity){
      // setState({
      //   ...state,
      //   cantidad: value})}
      //   else{
      //     setState({
      //       ...state,
      //       cantidad})
      //       swal("insufficient Stock!", {
      //         icon: "warning",
      //       })
      //   }
    }
    
    return (
        <Col className="mb-3">
        <Card className="border-0">
          <Card.Body className="bg-light text-center class-card">
            <Row>
              <Col xs={3} md={2}>
                <img alt={'Imagen del producto: '+prod.orderline.name} className="w-75" src={prod.orderline.images.length > 0 ? prod.orderline.images[0].image : 'https://bitsofco.de/content/images/2018/12/broken-1.png'} /> 
              </Col>
              <Col>
                <Row>
                  <Col xs={6} md={4} className="mb-3 text-left number">
                      <h4 style={{color: 'black'}}>{prod.orderline.name} </h4>
                  </Col>
                  <Col xs={6} md={3} className="mb-3 text-center">
                    {console.log('stock------', prod.orderline.stock, 'cantidad------', prod.orderline.orderline.quantity)}
                  <NumericInput style={{color: 'black'}} className={'numberformat'} min={1} max={50} value={
                    prod.logueado?
                    prod.orderline.orderline.quantity: state.cantidad
                    } onChange={value => handleCant(value)}/>
                  </Col>
                  <Col className="text-left">
                    <span className="h6">
                      <NumberFormat
                      style={{color: 'black'}}
                        prefix="$"
                        value={prod.orderline.price}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        displayType={"text"}
                        className={'number'}
                      />
                    </span>
                  </Col>
                  <Col className="text-left number">
                    <button
                      size="sm"
                      className="btn"
                      style={{backgroundColor: '#8a2be2', color: 'white'}}
                      onClick={() => prod.logueado? prod.handleDelete(prod.orderline.orderline.productId):prod.handleDelete(prod.orderline.orderline.id) }
                      
                    >
                      Eliminar
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    )
}

function mapStateToProps(state) {
    return {
            // product: state.productReducer.product,
    }
}


function mapDispatchToProps(dispatch) {
    return {
            // getProduct: (id) => dispatch(getProduct(id)),
            // createProduct: (prod) => dispatch(createProduct(prod)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderUse);
