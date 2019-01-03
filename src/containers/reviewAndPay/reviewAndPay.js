import React, {Component} from 'react';
import BreadCrumb from '../breadCrumb/breadCrumb';
import Payment from '../checkoutComponents/payment/payment';
import PaymentForm from './paymentForm/paymentForm';
import ShowAddress from './showAddress/showAddress';
import Products from './products/products'
import './reviewAndPay.css'
import {getLocalData} from './../../utilities/utility';
import appConstants from '../../constants';
export default class ReviewAndPay extends Component{
    constructor(props){
        super(props);
        this.productData = {
            productPrice:0,
            vat:0,
            serviceFee:0
        };
        this.currentAddress = {};
        this.calculatePayment = this.calculatePayment.bind(this);      
        this.getSelectedAddress = this.getSelectedAddress.bind(this);
            
    }

    getSelectedAddress(){
        this.currentAddress = getLocalData(appConstants.SELECTED_ADDRESS);
    }

    componentWillMount(){
        this.calculatePayment();
        this.getSelectedAddress();
    }

    calculatePayment(){      
        const productData = getLocalData(appConstants.PRODUCT_LIST);
        if (!productData) return;
        let itemPrice = 0;
        productData.products.map((item)=>{
          itemPrice += parseInt(item.qty) * parseInt(item.price);
        });
        this.productData.productPrice = itemPrice;
   
        this.productData.serviceFee = appConstants.SERVICE_FEE;
        this.productData.vat = itemPrice+ appConstants.VAT * itemPrice+ this.productData.serviceFee;
        
    }
  
    render(){
        return(<div>
            <BreadCrumb />
            <div className="row ReviewAndPayContent">
                <div className="col-md-8 col-sm-8 col-lg-8 col-xs-12">
                <div className="row">
                 <div className="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                     <ShowAddress keyHeading="Delivery and billing address" name={this.currentAddress.name} address={this.currentAddress.address}/>
                 </div>
                 <div className="col-6 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                     <ShowAddress keyHeading="Delivery date & time" name="dumma summa" address="dummy"/>
                 </div>
                </div>
                <div className="row">
                 <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-1g-12">
                    <Products />
                 </div>
                </div>
                <div className="row">
                 <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-1g-12">
                     <PaymentForm totalAmount={this.productData.vat}/>
                 </div>
                </div>
               
                 
                </div>
                <div className="col-md-4 col-sm-4 col-lg-4 col-xs-12">
                 <Payment productPrice={this.productData.productPrice} vat={this.productData.vat} serviceFee={this.productData.serviceFee}/>
                </div>
            </div>
           
            
            </div>);
    }
}