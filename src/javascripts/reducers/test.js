import { TEST_ACTION } from '../constants/test';


const defaultState = {
  data: 'I am test data. Submit new data to change me'
};


export default function test(state = defaultState, action) {
  switch (action.type) {

    case TEST_ACTION:
      return {
        ...state,
        data: action.data
      };


    default:
      return state;
  }
}
