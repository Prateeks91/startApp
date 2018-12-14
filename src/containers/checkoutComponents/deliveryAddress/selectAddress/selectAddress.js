import React,{Component} from 'react';
import AddressContainer from './addressContainer/addressContainer';
import './selectAddress.css';
import addNewIcon from '../../../../assets/icon-addnew.svg'
export default class SelectAddress extends Component{
    constructor(props){
      super(props);
    }
    render(){
      return(<div className="row">
        <div className="addressHeading">
           {this.props.deliveryHeading}
        </div>
        <div className="deliveryAddressContainer">
          <AddressContainer />
        </div>
        <div className="addAddressArea">
            <img className="inlineEl" src={addNewIcon} alt="add address"/>
            <div className="addAddressText inlineEl">Delivery Address</div>
        </div>
      </div>)
    }
}