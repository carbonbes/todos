import { call, put, takeEvery } from 'redux-saga/effects';
import { TODO_REQUEST } from '../actions/actionTypes';
import { failedTodo, successTodo } from '../actions/todoActions';

function* getTodos() {
  try {
    const todos = yield call(() => fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()));
    yield put(successTodo(todos));
  } catch(e) {
    yield put(failedTodo(e));
  }
}

export function* getTodosWatcher() {
  yield takeEvery(TODO_REQUEST, getTodos);
}
