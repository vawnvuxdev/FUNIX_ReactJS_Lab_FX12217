import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import CommentFormModal from "./CommentFormComponent";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-6 p-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments, onClick }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-6 p-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  --{comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(comment.date))}
                </p>
              </li>
            );
          })}
        </ul>
        <Button outline color="primary" onClick={onClick}>
          <i className="fa fa-pencil"></i> Submit comment
        </Button>
      </div>
    );
  } else return <div></div>;
}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

const DishDetail = (props) => {
  const [isCmtFormModalOpen, setIsCmtFormModalOpen] = useState(false);

  const toggleCmtFormModal = () => {
    setIsCmtFormModalOpen(!isCmtFormModalOpen);
  };

  const handleCmtFormSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments
            comments={props.comments}
            onClick={toggleCmtFormModal}
          />
        </div>
        <CommentFormModal
          isOpen={isCmtFormModalOpen}
          toggle={toggleCmtFormModal}
          onSubmit={(values) => handleCmtFormSubmit(values)}
          required={required}
          minLength={minLength(2)}
          maxLength={maxLength(15)}
        />
      </div>
    );
  else return <div></div>;
};

export default DishDetail;
