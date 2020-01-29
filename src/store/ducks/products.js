import {createActions, createReducer} from "reduxsauce";

export const {Types, Creators} = createActions({
  insideCart: ["product"],
  outsideCart: ["product"]
});
export const [ProductTypes, ProductCreators] = [Types, Creators];

export const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: "Google Pixel - Black",
      img: "img/product-1.png",
      price: 10,
      company: "GOOGLE",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      quantity: 0,
      unit_amount: {currency_code: "USD", value: 10},
      unit_of_measure: "QUANTITY"
    },
    {
      id: 2,
      name: "Samsung S7",
      img: "img/product-2.png",
      price: 16,
      company: "SAMSUNG",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      quantity: 0,
      unit_amount: {currency_code: "USD", value: 16},
      unit_of_measure: "QUANTITY"
    },
    {
      id: 3,
      name: "HTC 10 - Black",
      img: "img/product-3.png",
      price: 8,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      quantity: 0,
      unit_amount: {currency_code: "USD", value: 8},
      unit_of_measure: "QUANTITY"
    },
    {
      id: 4,
      name: "HTC 10 - White",
      img: "img/product-4.png",
      price: 18,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      quantity: 0,
      unit_amount: {currency_code: "USD", value: 18},
      unit_of_measure: "QUANTITY"
    },
    {
      id: 5,
      name: "HTC Desire 626s",
      img: "img/product-5.png",
      price: 24,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      quantity: 0,
      unit_amount: {currency_code: "USD", value: 24},
      unit_of_measure: "QUANTITY"
    },
    {
      id: 6,
      name: "Vintage Iphone",
      img: "img/product-6.png",
      price: 17,
      company: "apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      quantity: 0,
      unit_amount: {currency_code: "USD", value: 17},
      unit_of_measure: "QUANTITY"
    },
    {
      id: 7,
      name: "Iphone 7",
      img: "img/product-7.png",
      price: 30,
      company: "apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      quantity: 0,
      unit_amount: {currency_code: "USD", value: 30},
      unit_of_measure: "QUANTITY"
    },
    {
      id: 8,
      name: "Smashed Iphone",
      img: "img/product-8.png",
      price: 2,
      company: "apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      quantity: 0,
      unit_amount: {currency_code: "USD", value: 2},
      unit_of_measure: "QUANTITY"
    }
  ]
};

const insideCart = (state = INITIAL_STATE, action) => {
  return {
    products: toggle(state, action, true)
  };
};
const outsideCart = (state = INITIAL_STATE, action) => {
  return {
    products: toggle(state, action, false)
  };
};

const toggle = (state, action, boolean) => {
  // map products and change the status of the added
  return state.products.map((e) => {
    if (e.id === action.product.id) e.inCart = boolean;
    return e;
  });
};

const ProductReducer = createReducer(INITIAL_STATE, {
  [Types.INSIDE_CART]: insideCart,
  [Types.OUTSIDE_CART]: outsideCart
});

export default ProductReducer;
