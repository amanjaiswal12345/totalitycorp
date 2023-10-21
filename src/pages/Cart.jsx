import { useContext, useEffect, useState } from "react";
import { DataContainer } from "../App";
import {
  Button,
  Col,
  Container,
  Row,
  Modal,
  Card,
  ListGroup,
  InputGroup,
} from "react-bootstrap";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

const Cart = () => {
  const { CartItem, setCartItem, addToCart, decreaseQty, deleteProduct } =
    useContext(DataContainer);
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [next, setNext] = useState(1);
  const [totalPrices, setTotalPrices] = useState();

  const handleNext = () => setNext(2);

  // Calculate total items in the cart
  const totalItems = CartItem.reduce((total, item) => total + item.qty, 0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (CartItem.length === 0) {
      const storedCart = localStorage.getItem("cartItem");
      setCartItem(JSON.parse(storedCart));
    }
  }, []);
  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {CartItem.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.imgUrl} alt="" />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            ${item.price}.00 * {item.qty}
                            <span>${productQty}.00</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          <button
                            className="incCart"
                            onClick={() => addToCart(item)}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="desCart"
                            onClick={() => decreaseQty(item)}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <button
                      className="delete"
                      onClick={() => deleteProduct(item)}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Cart Summary</h2>

              <div className=" d_flex flex-row">
                <h4>Total Item :</h4>
                <h3>{totalItems}</h3>

                <div className=" d_flex">
                  <h4>Total Price :</h4>
                  <h3>${totalPrice}.00</h3>
                </div>
              </div>
              <div className=" p-4">
                <Button onClick={handleShow}>Place Order</Button>
                {/*  modal create */}
                <Modal
                  show={show}
                  onHide={handleClose}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Payment</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                   
                  {next == "1" ? (
                    <>

{/*   card start */}
<Card>
                          <ListGroup variant="flush">
                            <ListGroup.Item>
                              <div className="row">
                                <div className="col-md-8 mb-4">
                                  <div className="card mb-4">
                                    <div className="card-header py-3">
                                      <h5 className="mb-0">Biling details</h5>
                                    </div>
                                    <div className="card-body">
                                      <form>
                                        {/* 2 column grid layout with text inputs for the first and last names */}
                                        <div className="row mb-4">
                                          <div className="col">
                                            <div className="form-outline">
                                              <input
                                                type="text"
                                                id="form7Example1"
                                                className="form-control border"
                                                placeholder="First Name"
                                              />
                                            </div>
                                          </div>
                                          <div className="col">
                                            <div className="form-outline">
                                              <input
                                                type="text"
                                                id="form7Example2"
                                                className="form-control border"
                                                placeholder="Last name"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        {/* Text input */}
                                        {/* Text input */}
                                        <div className="form-outline mb-4">
                                          <input
                                            type="text"
                                            id="form7Example4"
                                            className="form-control border"
                                            placeholder=" Address"
                                          />
                                        </div>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                          <input
                                            type="email"
                                            id="form7Example5"
                                            className="form-control border"
                                            placeholder="Email"
                                          />
                                        </div>
                                        {/* Number input */}
                                        <div className="form-outline mb-4">
                                          <input
                                            type="number"
                                            id="form7Example6"
                                            className="form-control border"
                                            placeholder="Phone"
                                          />
                                        </div>
                                        {/* Message input */}
                                        <div className="form-outline mb-4">
                                          <textarea
                                            className="form-control border"
                                            id="form7Example7"
                                            rows={4}
                                            defaultValue={""}
                                            placeholder="Additional Information"
                                          />
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                  <div className="card mb-4">
                                    <div className="card-header py-3">
                                      <h5 className="mb-0">Summary</h5>
                                    </div>
                                    <div className="card-body">
                                      <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                          Products
                                          <span>${totalPrice}.00</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                          Shipping
                                          <span>Gratis</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                          <div>
                                            <strong>Total amount</strong>
                                          </div>
                                          <span>
                                            <strong>${totalPrice}.00</strong>
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
{/* card end  */}


                      </>
                    ) : (
                      <>
                    
                   
                        <MDBRow className=" d-flex justify-content-center">
                          <MDBCol md="10" lg="10" xl="10">
                            <MDBCard className="rounded-3">
                              <MDBCardBody className="p-4">
                                <div className="text-center mb-4">
                                  <h3>Settings</h3>
                                  <h6>Payment</h6>
                                </div>
                                <p className="fw-bold mb-4 pb-2">
                                  Saved cards:
                                </p>
                                <div className="d-flex flex-row align-items-center mb-4 pb-1">
                                  <img
                                    className="img-fluid"
                                    src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                                  />
                                  <div className="flex-fill mx-3">
                                    <div className="form-outline">
                                      <MDBInput
                                      
                                        id="form1"
                                        type="text"
                                        size="lg"
                                        value="**** **** **** 3193"
                                      />
                                    </div>
                                  </div>
                                  <a href="#!">Remove card</a>
                                </div>
                               
                                 
                                <p className="fw-bold mb-4">Add new card:</p>
                                <input
                                            type="number"
                                            id="form7Example6"
                                            className="form-control border"
                                            placeholder="Card Holder name"
                                          />
                                <MDBRow className="my-4">
                                  <MDBCol size="7">
                                  <input
                                            type="number"
                                            id="form7Example6"
                                            className="form-control border"
                                            placeholder="Card Number"
                                          />
                                  </MDBCol>
                                  <MDBCol size="3">
                                  <input
                                            type="number"
                                            id="form7Example6"
                                            className="form-control border"
                                            placeholder="MM/YYYY"
                                          />
                                  </MDBCol>
                                  <MDBCol size="2">
                                  <input
                                            type="number"
                                            id="form7Example6"
                                            className="form-control border"
                                            placeholder="CVV"
                                          />
                                  </MDBCol>
                                </MDBRow>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>
                        </MDBRow>

                      </>
                    )}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    {next == "1" ? (
                      <>
                        <Button variant="primary" onClick={handleNext}>
                          Next
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="primary"
                          onClick={() => {
                            setShow(false);
                            setNext(1);
                          }}
                        >
                          Submit
                        </Button>
                      </>
                    )}
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
