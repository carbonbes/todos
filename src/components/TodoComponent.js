import React from 'react';

const TodoComponent = ({ todo, completed }) => {
  return (
  <tbody style={{ textDecoration: todo.completed ? 'line-through' : null }}>
    <tr>
      <th scope="row">{todo.id}</th>
      <td>{todo.title}</td>
    </tr>
  </tbody>
  );
};

export default TodoComponent;