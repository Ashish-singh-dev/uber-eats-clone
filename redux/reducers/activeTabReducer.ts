interface InitialState {
  activeTab: string;
}

const initialState: InitialState = {
  activeTab: "delivery",
};

interface Action {
  type: string;
  payload: string;
}

export const activeTabReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "ACTIVE_TAB":
      let newState = { ...state };
      newState.activeTab = action.payload;
      return newState;

    default:
      return state;
  }
};
