import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);

    }
    

    renderDish(dish){
        if(dish !=null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            );
        }
        else
        return(
            <div></div>
        );
    }

    renderComments(comments){
        
        if(comments!=null){
            
          return (
              
            comments.map( (thiscomment)=>{
                return(
                    <ul className="list-unstyled">
                            <li className="mb-3">{thiscomment.comment} </li>
                            <li>--{thiscomment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(thiscomment.date)))} </li>
                    </ul>
                    
                );
            }

          )
          )

        }
        
    }

    render(){
        
        const dish = this.props.dish;
        var comments=null;
        if(dish!=null){
            comments = dish.comments;
        }

        //const comments = dish.comments;

        return(
            
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>    
                
                <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                    {this.renderComments(comments)}
                </div>

            </div>
            
            
        );
    }
}

export default DishDetail;