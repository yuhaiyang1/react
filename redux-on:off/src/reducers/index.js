import { combineReducers } from 'redux';
import todos from './todos';
const todoApp = combineReducers({//Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。
  todos,
});
export default todoApp;
