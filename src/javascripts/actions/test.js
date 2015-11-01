import { TEST_ACTION } from '../constants/test';


export function sendData(data) {
  return {
    type: TEST_ACTION,
    data
  };
}
