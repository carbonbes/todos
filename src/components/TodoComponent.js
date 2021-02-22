import React from 'react';

const TodoComponent = ({ todo }) => {
  return (
  <tbody>
    <tr>
      <th scope="row">{todo.id}</th>
      <td style={{ textDecoration: todo.completed ? 'line-through' : null }}>{todo.title}</td>
    </tr>
  </tbody>
  );
};

export default TodoComponent;