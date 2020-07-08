// import React,{Component} from 'react';
// import { Card, CardImg, CardTitle, CardText, CardBody, BreadcrumbItem, Breadcrumb } from 'reactstrap';
// import {Link} from 'react-router-dom';


// import {Modal,ModalBody, ModalHeader,Button,Row,Label} from 'reactstrap';
// import {Control, LocalForm, Errors}  from 'react-redux-form';
// import {Loading} from './LoadingComponent';

// import { baseUrl } from '../shared/baseUrl';

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) =>  val && (val.length >= len);

// class CommentForm extends Component{
//     constructor(props){
//         super(props);

//         this.state={
//             isModalOpen: false
//         };

//         this.toggleModal = this.toggleModal.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(values) {
//         // console.log('Current State is: ' + JSON.stringify(this.state));
//         // console.log('Current State is: ' + JSON.stringify(values));
//         // alert('Current State is: ' + JSON.stringify(values));
//         this.toggleModal();
//         this.props.addComment(this.props.dishId,values.rating,values.author,values.comment)
//         // event.preventDefault();
//     }

//     toggleModal(){
//         this.setState(
//             {
//                 isModalOpen: !this.state.isModalOpen
//             }
//         );
//     }

//     render(){
//         return(
//             <div>
//                 <Button outline onClick={this.toggleModal}>
//                 <span className="fa fa-pencil fa-lg">Submit Comment</span>
//                 </Button>
//                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//                 <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
//                 <ModalBody>
//                     <div className="container">
//                     <LocalForm onSubmit={ (values) => this.handleSubmit(values) }>
//                         <Row className="form-group">
//                         <Label  htmlFor="rating" md={2} style={{padding:"0px"}}>Rating</Label>
//                         </Row>
                        
//                         <Row className="form-group">
//                             <Control.select model=".rating" name="rating" className="form-control">
//                                 <option>1</option>
//                                 <option>2</option>
//                                 <option>3</option>
//                                 <option>4</option>
//                                 <option>5</option>
//                             </Control.select>
//                         </Row>
//                         <Row className="form-group">
//                             Your Name
//                         {/* <Label  htmlFor="author" md={2} style={{padding:"0px"}}>Your Name</Label> */}
//                         </Row>
//                         <Row className="form-group">
//                             <Control.text model=".author" 
//                                           name="author"
//                                           id="author"
//                                           className="form-control"
//                                           placeholder="Your Name"
//                                           validators={{
//                                               required,
//                                               minLength: minLength(3),
//                                               maxLength: maxLength(15)
//                                           }}
//                                           />
//                                           <Errors
//                                             className="text-danger"
//                                             model=".author"
//                                             show="touched"
//                                             messages={{
//                                                 required: 'Required',
//                                                 minLength: 'Must be greater than 2 characters',
//                                                 maxLength: 'Must be 15 characters or less'
//                                             }}
//                                         />

                            
//                         </Row>
//                         <Row className="form-group">
//                         <Label style={{width:"90px"}} htmlFor="comment" md={2} style={{padding:"0px"}}>Comment</Label>
//                         </Row>
//                         <Row className="form-group">
//                             <Control.textarea model=".comment" 
//                                               name="comment"
//                                               id="comment"
//                                               rows="6"
//                                               className="form-control"
                                        
//                                           />

                            
//                         </Row>
//                         <Button type="submit" value="submit" color="primary">Submit</Button>
//                     </LocalForm>
//                     </div>
//                 </ModalBody>
//                 </Modal>
//             </div>

          
//         );
//     }
// }


// function RenderDish({dish}){
//     if(dish!=null){
//         return(
       
//             <div className="col-12 col-md-5 m-1">
//                 <Card>
//                     <CardImg width="100%" top src={ baseUrl + dish.image} alt={dish.name} />
//                     <CardBody>
//                       <CardTitle>{dish.name}</CardTitle>
//                       <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
        
//     );

//     }
    
// }

// function RenderComments({comments,addComment,dishId}){
//     if(comments!=null){
//         console.log(comments);
//         return(
//             <div className="col-12 col-md-5 m-1">
//                 <h4>Comments</h4>
//                 <ul className="list-unstyled">
//                     {comments.map((comment) => {
//                             return(
//                                 <li key={comment.id}>
//                                     <p>{comment.comment}</p>
//                                     <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
//                                 </li>
//                             );
//                         })}
//                 </ul>
//                 <CommentForm dishId={dishId} addComment={addComment} />
//             </div>
//         );
//     }
// }

// const DishDetail = (props) => {
//     if(props.isLoading){
//         return(
//             <div className="container">
//                 <div className="row">
//                     <Loading />
//                 </div>
//             </div>
//         );
//     }
//     else if(props.errMess){
//         return(
//             <div className="container">
//                 <div className="row">
//                     <h4>{props.errMess}</h4>
//                 </div>
//             </div>
//         );
//     }
//     else if(props.dish!=null){
//         return(
//             <div className="container">
//                 <div className="row">
//                     <Breadcrumb>
//                         <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
//                         <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
//                     </Breadcrumb>
//                     <div className="col-12">
//                         <h3>{props.dish.name}</h3>
//                         <hr />
//                     </div>                
//                 </div>
//                 <div className="row">
        
//                     <RenderDish dish={props.dish} />
//                     <RenderComments comments={props.comments}
//                                     addComment={props.addComment}
//                                     dishId={props.dish.id} /> 
                    
//                 </div>
//             </div>
//         );
//     }
// }


// export default DishDetail;

import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Col,
  Label
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }

  render() {
    return (
      <div>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil" /> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>
                  Rating
                </Label>
                <Col md={{ size: 12 }}>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows={5}
                    className="form-control"
                  />
                </Col>
              </Row>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)"
        }}
      >
        <Card>
          <CardImg top src={baseUrl + dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    </div>
  );
}

function RenderComments({ comments, postComment, dishId }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <Stagger in>
          {comments.map(comment => {
            return (
              <Fade in key={comment.id}>
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    -- {comment.author} ,{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li>
              </Fade>
            );
          })}
        </Stagger>
        <CommentForm dishId={dishId} postComment={postComment} />
      </div>
    );
  } else return <div />;
}

const DishDetailComponent = props => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null)
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
            postComment={props.postComment}
            dishId={props.dish.id}
          />
        </div>
      </div>
    );
};

export default DishDetailComponent;