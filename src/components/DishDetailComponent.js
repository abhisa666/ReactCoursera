import React,{Component} from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import {Link} from 'react-router-dom';


import {Modal,ModalBody, ModalHeader,Button,Row,Label} from 'reactstrap';
import {Control, LocalForm, Errors}  from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) =>  val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);

        this.state={
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        // console.log('Current State is: ' + JSON.stringify(this.state));
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    toggleModal(){
        this.setState(
            {
                isModalOpen: !this.state.isModalOpen
            }
        );
    }

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil fa-lg">Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <div className="container">
                    <LocalForm onSubmit={ (values) => this.handleSubmit(values) }>
                        <Row className="form-group">
                        <Label  htmlFor="rating" md={2} style={{padding:"0px"}}>Rating</Label>
                        </Row>
                        
                        <Row className="form-group">
                            <Control.select model=".rating" name="rating" className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Row>
                        <Row className="form-group">
                            Your Name
                        {/* <Label  htmlFor="author" md={2} style={{padding:"0px"}}>Your Name</Label> */}
                        </Row>
                        <Row className="form-group">
                            <Control.text model=".author" 
                                          name="author"
                                          id="author"
                                          className="form-control"
                                          placeholder="Your Name"
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
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />

                            
                        </Row>
                        <Row className="form-group">
                        <Label style={{width:"90px"}} htmlFor="comment" md={2} style={{padding:"0px"}}>Comment</Label>
                        </Row>
                        <Row className="form-group">
                            <Control.textarea model=".comment" 
                                              name="comment"
                                              id="comment"
                                              rows="6"
                                              className="form-control"
                                        
                                          />

                            
                        </Row>
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </LocalForm>
                    </div>
                </ModalBody>
                </Modal>
            </div>

          
        );
    }
}


function RenderDish({dish}){
    return(
       
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        
    );
}

function RenderComments({comments}){
    if(comments!=null){
        console.log(comments);
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                                </li>
                            );
                        })}
                </ul>
                <CommentForm />
            </div>
        );
    }
}

const DishDetail = (props) => {
    if(props.dish!=null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
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
                    <RenderComments comments={props.comments} /> 
                    
                </div>
                </div>
        );
    }
}


export default DishDetail;