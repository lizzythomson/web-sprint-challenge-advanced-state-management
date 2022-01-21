import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const SUCCESSFUL_FETCH = 'SUCCESSFUL_FETCH';
export const FAILED_FETCH = 'FAILED_FETCH';
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => (dispatch) => {
  dispatch(fetchStart());
  axios
    .get('http://localhost:3333/smurfs')
    .then((response) => {
      dispatch(fetchSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchFail(error));
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch(fetchStart());
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then((response) => {
      const newSmurf = response.data[response.data.length - 1];
      dispatch(addNewSmurf(newSmurf));
    })
    .catch((error) => {
      dispatch(fetchFail(error));
    });
};

export const addNewSmurf = (smurf) => {
  return { type: ADD_NEW_SMURF, payload: smurf };
};

export const fetchStart = () => {
  return { type: START_FETCH };
};

export const fetchSuccess = (smurfs) => {
  return { type: SUCCESSFUL_FETCH, payload: smurfs };
};

export const fetchFail = (errorMessage) => {
  return { type: FAILED_FETCH, payload: errorMessage };
};

export const setError = (errorMessage) => {
  return { type: SET_ERROR, payload: errorMessage };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
