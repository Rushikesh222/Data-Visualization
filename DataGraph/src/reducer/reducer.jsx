import { salesData } from "../assets/data";

const initialState = {
  salesData: salesData,
  filterSales: [],
};

const saleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_SALES":
      return { ...state, filterSales: action.payload };

    default:
      return state;
  }
};
export default saleReducer;
