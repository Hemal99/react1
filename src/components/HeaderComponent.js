import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
   ModalHeader,
   ModalBody,
   Form,
   FormGroup,
   Label,
   Input
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen:false
    };
    this.toggleNav = this.toggleNav.bind(this); //you need to bind this toggleNav method for use in jsx so in simply specify onClick={this.toggleNav} in he code
    this.toggleModal=this.toggleModal.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
  }

  toggleNav() {
    //setters
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      isModalOpen:false
    });
  }

  toggleModal(){
     this.setState({
       isModalOpen: !this.state.isModalOpen
     });
  }

  handleLogin(event){
    this.toggleModal();
    alert("Username"+this.username.value+"Password:"+this.password.value+"Remember: "+this.remember.checked);
    event.preventDefault();
  }


  render() {
    //render method eken karanne outpit eka kohomada render wenna one kiyana eka tostrib=ng method eka wage
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler
              onClick={this.toggleNav} /*or ()=>{this.toggleNav()}*/
            />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Ristorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" /* mehema dammahama left margin eka denwa as much as posible etacota meka atule content eka dakunata push karanwa*/  navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"> Login </span>
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Restaurant Management</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalBody>
                <Form onSubmit={this.handleLogin}>
                  <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" id="username" name="username"  innerRef={(input)=>this.username=input}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password"innerRef={(input)=>this.password=input} />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" id="remember" innerRef={(input)=>this.remember=input} /*input eken html input tag ekak render wenwa e input tag eke reference eka ganna innerRef eka danwa  */ />
                        Remember me
                    </Label>
                  </FormGroup>
                  <Button type="submit" value="submit" className="bg-primary">Login</Button>
                </Form>
            </ModalBody>
          </ModalHeader>
        </Modal>
      </div>
    );
  }
}
export default Header;
