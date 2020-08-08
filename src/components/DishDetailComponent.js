import React from 'react';
import {
  Card, CardImg, CardText, CardTitle, CardBody,
  BreadcrumbItem, Breadcrumb
} from "reactstrap";
import { Link } from 'react-router-dom';

const RenderComments = ({ commentsPar }) => {
  const comments = commentsPar.map((comments) => {
    return (
      <li key={comments.id}>
        <p className="text-secondary">"{comments.comment}"</p>
        <p className="text-primary">{comments.author} - -
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comments.date)))}
        </p>

      </li>
    );
  });
  return comments
}

function RenderDish({ dish }) {

  if (dish != null) {
    return (


      <div className="col-md-5 col-12 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle className="text-info"> <h2>{dish.name}</h2></CardTitle>
            <CardText className="text-secondary"> {dish.description} </CardText>
          </CardBody>
        </Card>
      </div>

    )

  } else {
    return (
      <div></div>
    )
  }
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
        <h3>{props.dish.name}</h3>
        <hr />
      </div>
      </div>

      <div className="row">
        <RenderDish dish={props.dish} />
        <div className="col-md-5 col-12 m-1">
          <h4 className="text-info">Comments</h4>
          <ul>
            <RenderComments commentsPar={props.comments} />
          </ul>
        </div>
      </div>
    </div>

  );
}


export default DishDetail;