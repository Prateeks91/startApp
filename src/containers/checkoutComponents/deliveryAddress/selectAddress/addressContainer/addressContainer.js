import React,{Component} from 'react';
import './addressContainer.css';
export default class AddressContainer extends Component{

    constructor(props){
      super(props);
      this.renderAddressData = this.renderAddressData.bind(this);
    }
    renderAddressData(){
      if(!this.props.addressData){
        return;
      }
      return this.props.addressData.map((item)=>{
        return(
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 ">
             <div className="card">
             <div className="inlineEl radio">
              <div className="activeRadio">
              </div>
            </div>
            <div className="inlineEl savedAddress">
              <div className="name">
              {item.name}
              </div>
              <div className="address">
              {item.address}
              </div>
            </div>
             </div>
          
            </div>          
          </div>);
      });
    }
    render(){
      return(
        <div>
         {this.renderAddressData()}
        </div>
      )
    }
}