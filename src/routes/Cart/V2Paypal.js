import React, {Component} from "react";
import {PayPalButton} from "react-paypal-button-v2";

export default class V2Paypal extends Component {
  render() {
    const checklist = this.props.checklist;
    const total = this.props.total;
    // const history = this.props.history;

    return (
      <PayPalButton
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: `${[...checklist.items]}`,
                amount: {
                  currency: "BRL",
                  value: total
                }
              }
            ]
          });
        }}
        style={{shape: "pill"}}
        onApprove={(data, action) => {
          return action.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
            alert("checklist: " + checklist.items);
          });
        }}
        options={{
          clientId:
            "Ae7DfccDlJ5O9razBWUSukOJZ2sJjhihhDkG4lepNXT2cX08V32G5X6IqvrruAL8ycb-f1ZfzBDLuUk4",
          currency: "BRL",
          commit: false
        }}
        onCancel={(data) => alert(data)}
        onError={(err) => alert(err)}
      />
    );
  }
}
