import React from 'react';


let style = {
    maxWidth: '300px'
};

const List = (props) => (
  <div style={style}>
        <ul className="list">
          {props.todos.map((todo, i, comp) => {
            return (
              <li key={i} className="list-item">
                {/* <span onClick={() => props.handleEdit(todo)}> */}
                  {todo.title}
                {/* </span> */}
                <span
                  className="btn btn-outline-danger"
                  onClick={() => props.handleComp(props.todos)}
                >
                  完了
                </span>
                <span
                  className="btn btn-outline-danger"
                  onClick={() => props.handleRemove(i)}
                >
                  削除
                </span>
              </li>
            )
          })}
        </ul>
    </div>
)
export default List;