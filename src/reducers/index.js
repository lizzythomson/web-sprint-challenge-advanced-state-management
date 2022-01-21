import {
  START_FETCH,
  SUCCESSFUL_FETCH,
  FAILED_FETCH,
  ADD_SMURF,
  ERROR_MESSAGE,
} from '../actions/index';

export const initialState = {
  smurfs: [],
  isLoading: false,
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH:
      return { ...state, smurfs: [], isLoading: true, error: '' };
    case SUCCESSFUL_FETCH:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: '',
      };
    case FAILED_FETCH:
      return {
        ...state,
        smurfs: [],
        isFetching: false,
        error: action.payload,
      };
    case ADD_SMURF:
      const newSmurf = {
        id: action.payload.id,
        name: action.payload.name,
        position: action.payload.position,
        nickname: action.payload.nickname,
        description: action.payload.description,
      };
      return { ...state, smurfs: [...state.smurfs, newSmurf] };
    case ERROR_MESSAGE:
      return state;
    default:
      return state;
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
