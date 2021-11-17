import React from "react";
import { Modal, ModalHeader, ModalBody, Button, Row, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const CommentFormModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Submit Comment</ModalHeader>
      <ModalBody>
        <LocalForm onSubmit={(values) => props.onSubmit(values)}>
          <Row className="form-group m-2">
            <Label htmlFor="rating">Rating</Label>
            <Control.input
              type="number"
              className="form-control"
              model=".rating"
              id="rating"
              name="rating"
              defaultValue={1}
              min={1}
              max={5}
            />
          </Row>
          <Row className="form-group m-2">
            <Label htmlFor="author">Your Name</Label>
            <Control.text
              className="form-control"
              model=".author"
              id="author"
              name="author"
              validators={{
                required: props.required,
                minLength: props.minLength,
                maxLength: props.maxLength,
              }}
            />
          </Row>
          <Errors
            className="text-danger"
            model=".author"
            show="touched"
            messages={{
              required: "Required",
              minLength: "Must be greater than 2 characters",
              maxLength: "Must be 15 characters or less",
            }}
          />
          <Row className="form-group m-2">
            <Label htmlFor="comment">Comment</Label>
            <Control.textarea
              className="form-control"
              model=".comment"
              id="comment"
              name="comment"
            />
          </Row>
          <Button type="submit" value="submit" color="primary" className="m-2 ">
            Submit
          </Button>
        </LocalForm>
      </ModalBody>
    </Modal>
  );
};

export default CommentFormModal;
