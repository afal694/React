import React, {Component} from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  BreadcrumbItem,
  Breadcrumb,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Row,
  Label,
  Col
} from "reactstrap";
import {Link} from 'react-router-dom';
import {Control, Errors, LocalForm} from 'react-redux-form';
import { Loading } from './LoadingComponent';
import {baseUrl} from './shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class FormComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);

  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmitComment(values) {
    console.log("Current values is: " + JSON.stringify(values));
    alert("Current values is: " + JSON.stringify(values));

    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  render() {
    return (<div>
      <Button color="primary" onClick={this.toggleModal}>Leave a comment!</Button>

      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Modal Title</ModalHeader>
        <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
          <ModalBody>
            <Row className="form-group">
              <Label htmlFor="rating" md={12}>Rating</Label>
              <Col md={12}>
                <Control.select model=".rating" id="rating" name="rating" className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="author" md={12}>Author</Label>
              <Col md={12}>
                <Control.text model=".author" id="author" name="author" className="form-control" placeholder="Name" validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15)
                  }}/>
                <Errors className="text-danger" model=".author" show="touched" messages={{
                    required: ' Required',
                    minLength: ' Must be greater than 3 characters',
                    maxLength: ' Must be less than 15 characters'
                  }}/>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="comment" md={12}>Comment</Label>
              <Col md={12}>
                <Control.textarea model=".comment" id="comment" name="comment" className="form-control" rows="6"/>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit">
              Send!
            </Button>
          </ModalFooter>
        </LocalForm>
      </Modal>
    </div>);
  }
}

const RenderComments = ({commentsPar}) => {
  const comments = commentsPar.map((comments) => {
    return (
      <Fade in>
        <li key={comments.id}>
          <p className="text-secondary">"{comments.comment}"</p>
          <p className="text-primary">{comments.author}
            - - {
              new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
              }).format(new Date(Date.parse(comments.date)))
            }
          </p>
        </li>
      </Fade>
      
  );
  });
  return comments
}

function RenderDish({dish}) {

  if (dish != null) {
    return (
      <div className="col-md-5 col-12 m-1">
        <FadeTransform in="in" TransformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
          <Card>
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}></CardImg>
            <CardBody>
              <CardTitle className="text-info">
                <h2>{dish.name}</h2>
              </CardTitle>
              <CardText className="text-secondary">
                {dish.description}
              </CardText>
            </CardBody>
          </Card>
        </FadeTransform>
    </div>)

  } else {
    return (<div></div>)
  }
}

const DishDetail = (props) => {

  if (props.isLoading) {
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if(props.errMess){
    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  else if (props.dish != null) {
    return (<div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active="active">{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr/>
        </div>
      </div>

      <div className="row">
        <RenderDish dish={props.dish}/>
        <div className="col-md-5 col-12 m-1">
          <h4 className="text-info">Comments</h4>
          <ul>
            <Stagger in>
              <RenderComments commentsPar={props.comments}/>
            </Stagger>
          </ul>
          <FormComponent dishId={props.dish.id} postComment={props.postComment}/>
        </div>
      </div>
    </div>);

  }
  else {
    return (
      <div></div>
    );
  }

}

export default DishDetail;
