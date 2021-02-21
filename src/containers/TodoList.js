import { connect } from 'react-redux';
import TodoListComponent from '../components/TodoListComponent';

const mapStateToProps = (state) => ({
  todos: state.todos,
  foundTodos: state.foundTodos,
  searchFilter: state.searchFilter,
  completedFilter: state.completedFilter,
  isFetching: state.isFetching
});

export default connect(mapStateToProps, null)(TodoListComponent);
