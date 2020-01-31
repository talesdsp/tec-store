import React, {Component} from "react";
import {PayPalButton} from "react-paypal-button-v2";

export default class V2Paypal extends Component {
  render() {
    const checklist = this.props.checklist;
    const total = this.props.total;
    const history = this.props.history;
    return (
      <PayPalButton
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: `${[...checklist.items]}`,
                amount: {
                  currency_code: "BRL",
                  value: total
                }
              }
            ]
          });
        }}
        onApprove={(data, action) => {
          return action.order.capture().then((details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
            alert("checklist: " + checklist.items);
          });
        }}
        // options={
        //   {
        //     // clientId: process.env.REACT_APP_APP_ID
        //   }
        // }
        onCancel={(data) => alert(data)}
        onError={(err) => alert(err)}
      />
    );
  }
}

// createOrder={(data, actions) => {
//   return actions.order.create({
//     purchase_units: [
//       ...checklist.items.map((product) => ({
//         description: product.name,
//         amount: {
//           currency_code: "USD",
//           value: product.price
//         }
//       }))
//     ]
//   });
// }}
// onApprove={(data, action) => {
//   console.log({data});
//   console.log({action});
//   return action.order.capture().then((details) => {
//     console.log({details});
//     alert("Transaction completed by " + details.payer.name.given_name);
//     alert("checklist: " + checklist.items);
//     console.log(details.purchase_units.items);
//     console.log("%c Parabens pela compra", "font-size:3rem;", checklist.items);

//     // OPTIONAL: Call your server to save the transaction
//     // return fetch("/paypal-transaction-complete", {
//     //   method: "post",
//     //   body: JSON.stringify({
//     //     orderID: data.orderID
//     //   })
//     // });
//   });
// }}
