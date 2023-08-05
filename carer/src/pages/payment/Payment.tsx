/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Modal, Row } from "react-bootstrap";

export const Payment: React.FC = (): JSX.Element => {
  const [refNumber, setRefNumber] = useState("");
  const [amountDue, setAmountDue] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handlePayOnline() {
    setShowModal(true);
  }

  function viewUpdate() {}
  useEffect(() => {
    viewUpdate();
  }, []);

  function handlePay() {}

  function handleClose() {
    setShowModal(false);
  }

  const modalPayment = (): JSX.Element => {
    return (
      <div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <div>Make Payment</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="loading-center">
              <img width={200} height={50} alt="payment type" />
            </div>
            <form
              style={{
                padding: 30,
                paddingRight: 40,
                paddingLeft: 40,
                paddingTop: 20,
              }}
            >
              <Form.Label>Name on card</Form.Label>
              <Form.Control
                type="name"
                name="nameOnCard"
                className="form-control"
              />
              <Form.Label>Card number</Form.Label>
              <Form.Control
                type="name"
                name="cardNumber"
                onChange={handlePay}
                className="form-control"
              />
              <Form.Label>Card expire date</Form.Label>
              <input
                placeholder="DateRange"
                type="date"
                className="form-control"
                name="datepicker"
                id="datepicker"
              />

              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <Form.Label>Security code</Form.Label>
              <Form.Control
                type="name"
                name="cardNumber"
                onChange={handlePay}
                className="form-control"
              />
            </form>
          </Modal.Body>
          <Modal.Footer className="modal-footer justify-content-between">
            <Button
              variant="success"
              className="modal-padding"
              onClick={handlePay}
            >
              Pay £{amountDue}
            </Button>
            <Button
              variant="primary"
              className="modal-padding"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };

  function referenceNumber() {
    return (
      <Card>
        <Card.Header>Reference number</Card.Header>
        <Card.Body>
          <Card.Text>
            <div style={{ textAlign: "center", fontSize: 20 }}>
              <label>{refNumber}</label>
            </div>

            <div style={{ textAlign: "center", fontSize: 20, padding: 15 }}>
              Amount Due: £{amountDue}
            </div>

            <Button
              variant="primary"
              size="lg"
              className="btn btn-primary btn-lg btn-block"
              onClick={handlePayOnline}
            >
              Pay Now
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  function createPayment(
    year: number,
    amount: number,
    acknowledged: number,
    dateOfPayment: Date
  ) {
    const displayDate =
      dateOfPayment.getDate() +
      "-" +
      (dateOfPayment.getMonth() + 1) +
      "-" +
      dateOfPayment.getFullYear();
    return (
      <tr>
        <td>{year}</td>
        <td>{amount}</td>
        <td>{acknowledged === 1 ? "Yes" : "No"}</td>
        <td>{displayDate}</td>
      </tr>
    );
  }

  function mainBody() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-md-8 mb-5">
              <h2>Payment</h2>
              <hr />
              <div className="loading-center">
                Please use the following reference number when making a payment
              </div>
              <div
                className="loading-center"
                style={{ padding: 30, fontWeight: 5000, fontSize: 35 }}
              >
                <label>{refNumber}</label>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Acknowledged</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
            <div className="col-md-4 mb-5">{referenceNumber()}</div>
          </div>
        </div>
      </div>
    );
  }

  function paypal() {
    return (
      <Card>
        <Card.Header>Paypal</Card.Header>
        <Card.Body>
          <Card.Title>Paypal</Card.Title>
          <Card.Text>Use this section if you want to pay by pay pal</Card.Text>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10 col-form-label">
              <label>something </label>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">House number</label>
            <div className="col-sm-10 col-form-label">
              <label>something here too</label>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div>
      <div>{modalPayment()}</div>
      <div>{mainBody()}</div>
    </div>
  );
};
