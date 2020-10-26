import React from 'react';
import {Card, CardImg ,CardText, CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


    // eslint-disable-next-line no-useless-constructor
  

    function RenderComments({comments}){
        if(comments!=null){
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const cmnts= comments.map((comment)=>{
            var d = new Date(comment.date);
            var m = months[d.getMonth()];
            var dt = d.getDate();
            var y = d.getFullYear();
                return(
                    <li key={comment.id}>
                    <p>{comment.comment}</p>
                <p>-- {comment.author},&nbsp; {m}&nbsp;{dt},&nbsp;{y}</p>
                    </li>
                );
            });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {cmnts}
                </ul>
            </div>
        );
        }
    }

    function RenderDish({dish}){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1 ">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    const DishDetail=(props)=>{
        const dish=props.dish;
        if(dish!=null){
            return (
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
                <div className="Container">
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>
                    
                </div>
                </div>
        
            );
        }
        else{
            return(
                <div></div> 
            );
        }
    }



export default DishDetail;