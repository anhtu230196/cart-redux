const initialState = [
  {
    id: 1,
    name: "Iphone 10",
    image: "",
    description: "Sản phẩm do apple sản xuất",
    price: 50,
    inventory: 10,
    rating: 5,
  },
  {
    id: 2,
    name: "Samsung A10",
    image: "",
    description: "Sản phẩm do samsung sản xuất",
    price: 50,
    inventory: 20,
    rating: 4,
  },
  {
    id: 3,
    name: "Oppp",
    image: "",
    description: "Sản phẩm do tàu sản xuất",
    price: 30,
    inventory: 100,
    rating: 1,
  },
];

const product = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default product;
