import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import './breadCrumb.css';
import appConstants from '../../constants';
import {getSessionData,setSessionData} from '../../utilities/utility';
export default class BreadCrumb extends Component {

  constructor(props){
    super(props);
    this.currentStep = appConstants.DELIVERY_FLAG;
  }

  handleLinkClick(history,path,val){
   history.push(path);
   setSessionData(appConstants.CURRENT_STEP,val)
  }

  setCurrentStep(){
    this.currentStep = getSessionData(appConstants.CURRENT_STEP);
    console.log("----------",this.currentStep);
  }
  render() {
    this.setCurrentStep();
    return (<div>
      <div className="breadCrumbHeader row">
        <div className="borders col-sm-3 col-lg-3 col-xs-3 col-md-3">

        </div>
        <div className="col-sm-6 col-lg-6 col-xs-6 col-md-6 borders">
          <Route render={({ history }) => (
            <div className={"delivery linkdirects col-sm-4 col-lg-4 col-xs-4 col-md-4" 
            + (this.currentStep == appConstants.DELIVERY_FLAG ? " activeLink":"" )} 
            onClick={() => { this.handleLinkClick(history,appConstants.DELIVERY_ROUTE,appConstants.DELIVERY_FLAG) }}>
              <div className="linkImage">
              </div>
              <div className="linkText">
                Delivery
            </div>

            </div>
          )} />

          <Route render={({ history }) => (
                   <div className={"dateTime linkdirects col-sm-4 col-lg-4 col-xs-4 col-md-4" 
                   + (this.currentStep == appConstants.DATETIME_FLAG ? " activeLink":"" )} 
                   onClick={() => { this.handleLinkClick(history,appConstants.DATETIME_ROUTE,appConstants.DATETIME_FLAG) }}>
              <div className="linkImage">
              </div>
              <div className="linkText">
                Date & Time
            </div>

            </div>
          )} />

          <Route render={({ history }) => (
                      <div className={"reviewPay linkdirects col-sm-4 col-lg-4 col-xs-4 col-md-4" 
                      + (this.currentStep == appConstants.REVIEWPAY_FLAG ? " activeLink":"" )} 
                      onClick={() => { this.handleLinkClick(history,appConstants.REVIEWPAY_ROUTE,appConstants.REVIEWPAY_FLAG) }}>
              <div className="linkImage">
              </div>
              <div className="linkText">
                Review And Pay
            </div>

            </div>
          )} />


        </div>
        <div className="borders col-sm-3 col-lg-3 col-xs-3 col-md-3">

        </div>
      </div>

    </div>)
  }
}