import React,{Component} from 'react';
import './payment.css'
export default class Payment extends Component{
    render(){
        return(<div>
            <div className="paymentInfo">
              <div className="row">
                <div className="col-12 col-xs-12 col-md-12 col-lg-12 paymentHeading">
                  Payment summary
                </div>          
              </div>
              <div className="row payEL">
               <div className="col-sm-7 col-md-7 col-lg-7 col-xs-7">
                 Products
               </div>
               <div className="col-sm-5 col-md-5 col-lg-5 col-xs-5 rightAl">
                 SR 0 
               </div>
              </div>
              <div className="row payEL">
               <div className="col-sm-7 col-md-7 col-lg-7 col-xs-7">
                Service Fee
               </div>
               <div className="col-sm-5 col-md-5 col-lg-5 col-xs-5 rightAl">
               SR 0
               </div>
              </div>
              <div className="row payTotal">
               <div className="col-sm-7 col-md-7 col-lg-7 col-xs-7">
                 Amount inculding VAT
               </div>
               <div className="col-sm-5 col-md-5 col-lg-5 col-xs-5 rightAl">
               SR 0
               </div>
              </div>
            </div>   
            <div className="paymentButton">
                <button>NEXT</button>
            </div>    
        </div>);
    }
}