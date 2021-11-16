import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
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

function RenderComment() {
    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                <li>Comment 1</li>
                <li>Comment 2</li>
                <li>Comment 3</li>
            </ul>
        </div>
    );
}

const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className="row">
                <RenderDish className="col-12 col-md-5 m-1" dish={props.dish} />
                <RenderComment className="col-12 col-md-5 m-1" />
            </div>
        );
    else return <div></div>;
};

export default DishDetail;
