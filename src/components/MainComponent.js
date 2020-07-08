// import React, { Component } from 'react';
// import Menu from './MenuComponent';
// import Home from './HomeComponent.js';
// import Contact from './ContactComponent.js'
// import About from './AboutComponent';
// import DishDetail from './DishDetailComponent';
// import Header from './HeaderComponet.js';
// import Footer from './FooterComponent.js';

// import {Switch, Route,Redirect, withRouter} from 'react-router-dom';
// import {connect} from 'react-redux';

// import {addComment, fetchDishes, fetchComments, fetchPromos} from '../redux/ActionCreaters'; //Action

// import {actions} from 'react-redux-form'; //for form


// const mapStateToProps = (state) => {
//       return{
//         dishes: state.dishes,
//         comments: state.comments,
//         promotions: state.promotions,
//         leaders: state.leaders
//       }
// };

// const mapDispathToProps = (dispatch) => ({
//   addComment: (dishId,rating,autor,comment) => dispatch( addComment(dishId,rating,autor,comment) ),
//   fetchDishes: () => {dispatch(fetchDishes())} ,
//   resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
//   fetchComments: () => {dispatch(fetchComments())},
//   fetchPromos: () => {dispatch(fetchPromos())}
// });

// class Main extends Component {

//   constructor(props) {
//     super(props);
    
//   }
  
//   componentDidMount(){
//     this.props.fetchDishes();
//     this.props.fetchComments();
//     this.props.fetchPromos();
//     console.log("Main Component is Mounted");
//     console.log(this.props.dishes.dishes)
//   }



//   // onDishSelect(dishId) {
//   //   this.setState({ selectedDish: dishId});
//   // }

//   render() {
    
//     const HomePage = () => {
//       console.log(this.props.dishes.dishes)
//       return(
//         <Home 
//           dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
//           dishesLoading={this.props.dishes.isLoading}
//           dishErrMess={this.props.dishes.errMess}
//           promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
//           promoLoading={this.props.promotions.isLoading}
//           promoErrMess={this.props.promotions.errMess}
//           leader={this.props.leaders.filter((leader) => leader.featured)[0]}
//         />
//       );
//     }

//     const DishWithId = ({match}) => {
//       return(
//           <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
//             isLoading={this.props.dishes.isLoading}
//             errMess={this.props.dishes.errMess}
//             comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
//             commentsErrMess={this.props.comments.errMess}
//             addComment={this.props.addComment}
//           />
//       );
//     };

    
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route path="/home" component={HomePage} />
//           <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} /> } />
//           <Route path="/menu/:dishId" component={DishWithId} />
//           <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
//           <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
//           <Redirect to="/home" />
//         </Switch>
//         {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
//         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
//         <Footer />
//       </div>
//     );
//   }
// }

// export default withRouter( connect(mapStateToProps,mapDispathToProps) (Main) );

import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Contact from "./ContactComponent";
import AboutUs from "./AboutComponent";
import Header from "./HeaderComponet";
import Footer from "./FooterComponent";
import {
  postComment,
  postFeedback,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders
} from '../redux/ActionCreaters';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (
    firstname,
    lastname,
    telnum,
    email,
    agree,
    contactType,
    message
  ) =>
    dispatch(
      postFeedback(
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message
      )
    )
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errMess}
          promotion={
            this.props.promotions.promotions.filter(promo => promo.featured)[0]
          }
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={
            this.props.leaders.leaders.filter(leader => leader.featured)[0]
          }
          leaderLoading={this.props.leaders.isLoading}
          leaderErrMess={this.props.leaders.errMess}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              classNames="page"
              timeout={300}
            >
              <Switch location={this.props.location}>
                <Route path="/home" component={HomePage} />
                <Route
                  exact
                  path="/aboutus"
                  component={() => (
                    <AboutUs
                      leaders={this.props.leaders.leaders}
                      leaderLoading={this.props.leaders.isLoading}
                      leaderErrMess={this.props.leaders.errMess}
                    />
                  )}
                />
                {/* } /> */}
                <Route
                  exact
                  path="/menu"
                  component={() => <Menu dishes={this.props.dishes} />}
                />
                <Route path="/menu/:dishId" component={DishWithId} />
                <Route
                  exact
                  path="/contactus"
                  component={() => (
                    <Contact
                      resetFeedbackForm={this.props.resetFeedbackForm}
                      postFeedback={this.props.postFeedback}
                    />
                  )}
                />
                <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);