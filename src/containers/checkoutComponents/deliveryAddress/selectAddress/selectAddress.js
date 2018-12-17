import React, { Component } from 'react';
import AddressContainer from './addressContainer/addressContainer';
import './selectAddress.css';
import addNewIcon from '../../../../assets/icon-addnew.svg';
import { connect } from 'react-redux';
import appConstants from '../../../../constants';
class SelectAddress extends Component {
  constructor(props) {
    super(props);
    this.renderDeliveryText = this.renderDeliveryText.bind(this);
  }

  renderDeliveryText() {
    if (this.props.tabSelected === appConstants.CP)
      return (<div></div>)
    return (
      <div className="addAddressArea">
        <img className="inlineEl" src={addNewIcon} alt="add address" />
        <div className="addAddressText inlineEl">Delivery Address</div>
      </div>
    );
  }
  render() {
    return (<div className="row">
      <div className="addressHeading">
        {this.props.deliveryHeading}
      </div>
      <div className="deliveryAddressContainer">
        <AddressContainer addressData={this.props.addressData} />
      </div>
      {this.renderDeliveryText()}
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    tabSelected: state.tabSelected
  }
}

export default connect(mapStateToProps)(SelectAddress);