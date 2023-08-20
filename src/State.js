export const initialState = {
    title: "Scheduling",
}

export function reducer(state, action) {
    switch (action.type) {
      case "SET_TITLE":
        return {
          ...state,
          title: action.title
        };
        default:
            return state;
    }
}