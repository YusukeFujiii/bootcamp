import React from 'react';

let style = {
    maxWidth: '300px'
};

const Sublist = (props) => (
    <div style={style}> 
    <button className="btn btn-outline-danger"
        onClick={() => props.handleSwitch()}>
        {props.filter ? "表示" : "表示してるよ"}
     </button>
        {(() => {
            if (props.filter === false) {
                return (
                    <ul className="list">
                        {props.todo.map((value, index) => {
                            return (
                                (() => {
                                    if (value.completed === true) {
                                        return (
                                            <li key={index} className="list-item">
                                                {value.title}
                                            </li>
                                        )
                                    }
                                })()
                            )
                        })}
                    </ul>
                )
            }
        })()}
    </div>
)

export default Sublist;