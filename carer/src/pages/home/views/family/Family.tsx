/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import "./style.css";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import ApplicationContext from "../../../../context/ApplicationContext";
export const Family: React.FC = (): JSX.Element => {
  const context = useContext(ApplicationContext);
  const [showModal, setShowModal] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [name, setname] = useState("");
  const [dob, setDob] = useState("");

  function handleNew() {
    setShowModal(true);
  }

  function handleClose() {
    setSubmitSuccess(false);
    setShowModal(false);
  }

  function handleSubmit() {
    //TODO : call the api here to store the new member!

    setSubmitSuccess(true);
  }
  const newForm = (): JSX.Element => {
    return (
      <form>
        <div className="mb-3">
          <label className="form-label">Full name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">DOB</label>
          <input
            type="date"
            className="form-control"
            id="exampleInputPassword1"
          ></input>
        </div>
        <div className="mb-3">
          <Form.Check
            inline
            label="Male"
            name="group1"
            type="radio"
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            type="radio"
            id={`inline-radio-3`}
          />
        </div>
      </form>
    );
  };

  const modalNewMember = (): JSX.Element => {
    return (
      <div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>PBS confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {submitSuccess === false ? (
              newForm()
            ) : (
              <>
                Thank you for adding new member. This will need to be approved
                by us. so please bear with us.
              </>
            )}
          </Modal.Body>
          <Modal.Footer className="modal-footer justify-content-between">
            {submitSuccess ? (
              <Button
                variant="success"
                className="modal-padding"
                onClick={handleClose}
              >
                Ok I will wait
              </Button>
            ) : (
              <></>
            )}
            {submitSuccess === false ? (
              <Button
                variant="success"
                className="modal-padding"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : (
              <></>
            )}
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

  function createMember(name: string, dob: Date, m: number) {
    const dateOfBirth =
      dob.getDate() + "-" + (dob.getMonth() + 1) + "-" + dob.getFullYear();

    return (
      <div>
        <Card>
          <Card.Header>Member {m}</Card.Header>
          <Card.Body>
            <div></div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10 col-form-label">
                <label>{name}</label>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Date of birth</label>
              <div className="col-sm-10 col-form-label">
                <label>{dateOfBirth}</label>
              </div>
            </div>
          </Card.Body>
        </Card>
        <br></br>
      </div>
    );
  }

  function family() {
    return (
      <div>
        {context.FamilyData.getFamily() === undefined ? (
          <></>
        ) : (
          context.FamilyData.getFamily().familyComplete.familyMembers.map(
            (m, i) => {
              return createMember(m.name, new Date(m.dateOfBirth), i + 1);
            }
          )
        )}
      </div>
    );
  }

  const errorView = (): JSX.Element => {
    return (
      <div className="loading-center" style={{ padding: 100 }}>
        Error Communicating with server!
      </div>
    );
  };

  return (
    <div className="row">
      <div className="col-md-8 mb-5">
        <h2>Family</h2>
        <hr />
        {family()}
        {modalNewMember()}
      </div>
      <div className="col-md-4 mb-5">
        <h2>Missing member? </h2>
        <hr />
        <div>
          <Button onClick={handleNew}> New </Button>
        </div>
      </div>
    </div>
  );
};
