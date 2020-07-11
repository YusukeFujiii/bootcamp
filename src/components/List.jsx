import React from 'react';


let style = {
    maxWidth: '300px'
};

const List = (props) => (
  <div style={style}>
          <ul className="list">
      {props.todo.map((value, index) => {
        return (
          (() => {
            if (value.completed === false) {
              return (
                <li key={index} className="list-item">
                  <span onClick={() => props.handleEdit(value.id)}>
                  {value.title}
                  </span>
                  <span
                    className="btn btn-outline-danger"
                    onClick={() => props.handleComp(value.id)}
                  >
                    完了
                  </span>
                  <span
                    className="btn btn-outline-danger"
                    onClick={() => props.handleRemove(value.id)}
                  >
                    削除
                  </span>
                </li>
              );
            }
          })())
      })}
          </ul>

  </div>
);
export default List;