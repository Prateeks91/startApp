import React,{Component} from 'react';
import BreadCrumb from './breadCrumb/breadCrumb';
import Payment from './payment/payment'
import DeliveryAddress from './deliveryAddress/deliveryAddress';
import {Route,Link,Redirect} from 'react-router-dom';
import Ikealogo from "../../assets/IKEA-logo.png";
import './checkout.css';
export default class Checkout extends Component{
    render(){
      return(
      <div>
              <div className="row ikeaHeader">
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6">
                   <img src={Ikealogo} alt="ikea logo" />
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xs-6">
                    <div className="returnCart">Return to Cart</div>
                  </div>
              </div>  
        <BreadCrumb />
        <div className="row checkoutContent">
          <div className="col-md-8 col-sm-8 col-lg-8 col-xs-8">
           <DeliveryAddress />
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4 col-xs-4">
           <Payment/>
          </div>
        </div>
        
      </div>  );
    }
}