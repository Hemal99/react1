import React, { Component } from "react";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
  }

  /*   onDishSelect(dishId){
      this.setState(
          {selectedDish:dishId});
      
  } */

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    /*     const HomePage =()=>{//mewa funtion nisa call karanatuwa wada karanne na eka nisa mulinma run wenne nikan retur method eka
      return(
        <Home 
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
     />/*meke dish,promotion,leader props widiyta yawanwa HomeComponent ekata widiyta Home*/

    const DishWithId = ({ match }) => {
      //card eka click klma meka active wenwa
      // console.log(match.params)
      //rout eken props widiyta obkect 3 k pass karanwa match,location,history  methandai api ganne match property eka witari
      return (
        //match.paramas.dishId kiyanne string ekak eka base 10 integer ekak karanna parseInt() use karanwa
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          } //meken eka element ekak return unath filter function eken dishes array eke sub array ekak return karana nisa eka 1st element eka ganna one [0] dala tiyenne eketa
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        /> //math kiyanne rout eke tiyana object ekak params kiyanne math eke tiyana property ekak (filter eken return wenne if(comment.dishId === parseInt(match.params.dishId,10)) true wena ewa)
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/home"
            component={
              HomePage
            } /*path eken kiyanne url eka component attribute eken kiyanne e path ekedi renderwenne mokadda kiyala*/
          />
          <Route
            exact
            path="/menu"
            /*exact kiyala danne home ekath mulin '/' ekak tiyna nisa /menu kiyana path eka specific karanna -full menu eka MenuComponent eka
             */ component={() => (
              <Menu dishes={this.props.dishes} />
            )} /* menu component ekata meke idala props  pass karanna one nisa arrow function eka use karanwa (arrow function eken return karanne props yawwata passe display wena menu eka*/
          />
          <Route
            path="/menu/:dishId"
            /*match.params.dishId =id*/ component={
              DishWithId
            } /*select karana menu item eka */
          />
          <Route exact path="/contactus" component={Contact} />
          <Route
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
