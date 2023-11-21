const filterInitialState = {
  filter: '',
};
export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'contact/filter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const setFilter = filterValue => {
  return {
    type: 'contact/filter',
    payload: filterValue,
  };
};
