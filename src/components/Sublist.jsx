import React from 'react';

let style = {
    maxWidth: '300px'
};

const Sublist = (props) => (
    <div style={style}> 
    <button className="btn btn-outline-danger"
        onClick={() => props.handleSwitch(props.sublists)}>
        {props.filter ? "表示" : "表示してるよ"}
     </button>
        {(() => {
            if (props.filter === false) {
                return (
                    <ul className="list">
                        {props.sublists.map((todo, i) => {
                            return (
                                <li key={i} className="list-item">
                                    {todo.title}
                                </li>
                            )
                        })}
                    </ul>
                )
            }
        })()}
    </div>
)

export default Sublist;