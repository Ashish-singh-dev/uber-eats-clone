interface InitialState {
  items: {
    name: string;
    description: string;
    image_url: string;
    price: number;
  }[];
  restaurantName: string;
}

const initialState: InitialState = {
  items: [],
  restaurantName: "",
};

interface Action {
  type: string;
  payload: any;
}

export const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let newState = { ...state };
      if (action.payload.isChecked) {
        newState.items = [...newState.items, action.payload.item];
        newState.restaurantName = action.payload.restaurantName;
      } else {
        newState.items = newState.items.filter(
          (item) => item.name !== action.payload.item.name
        );
        newState.restaurantName = action.payload.restaurantName;
      }
      return newState;
    default:
      return state;
  }
};
