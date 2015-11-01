import test from './test';


export default function app(state = {}, action) {
  console.log(action);
  return {
    test: test(state.test, action)
  };
}
