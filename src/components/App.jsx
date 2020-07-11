import React, {Component} from 'react';
import './App.css';
import Form from './Form';
import List from './List';
import Sublist from './Sublist';
import Goal from './Goal';
import Edit from './Edit';

let currentId = 0;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      filter: true,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleComp = this.handleComp.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdateTodoText = this.handleUpdateTodoText.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    if (!e.target.title.value) {
      return alert("やることを入力してください");
    }
    else if (this.state.todo.find((v) => v.title === e.target.title.value)) {
           return alert("同名の項目が存在します");
         } else {
           this.state.todo.push({
             title: e.target.title.value,
             id: currentId,
             completed: false,
             editing: false,
           });
           this.setState({ todo: this.state.todo });
           e.target.title.value = "";
      currentId++;
      console.log(this.state.todo)
         }
  }

  handleRemove(i) {
    const newTodos = this.state.todo.filter(todo => todo.id !== i)
    this.setState({ todo: newTodos });

  }

  handleComp(i) {
    const copyTodo = this.state.todo.slice();
    const number = this.state.todo.findIndex(index => index.id === i)
    copyTodo[number].completed = true;
    this.setState({ todo: copyTodo });
  }

  handleSwitch() {
    const compTodos = this.state.todo.filter((value) => value.completed === true);
    if (compTodos.length > 0) {
      this.setState({ filter: false });
    }
    console.log(this.state.filter);
  }
  
  handleEdit(i) {
    const copyTodo = this.state.todo.slice();
    const number = this.state.todo.findIndex((index) => index.id === i);
    copyTodo[number].editing = true;
    this.setState({ todo: copyTodo });
    console.log(this.state.todo)
  }

  handleUpdateTodoText(id, title) {
    const newTodos = this.state.todo.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          title,
          editing: false
        }
      }

      return todo;
    });

    this.setState({ todo: newTodos });
  };


  render() {
    const fiveComp = this.state.todo.filter(value => value.completed === true);
        const editTodo = this.state.todo.filter(
          (value) => value.editing === true
        );
    if (fiveComp.length >= 5) {
      return <Goal />;
    }
    return (
      <div className="App">
        <h1 className="title">TODOリスト作成</h1>
        {editTodo.length > 0 ? (
          <ul>
            {editTodo.map(({ title, id }) => (
              <li key={id}>
                <Edit
                  id={id}
                  title={title}
                  onSubmit={this.handleUpdateTodoText}
                  handleReturn={this.handleReturn}
                />
              </li>
            ))}
            </ul>
        ) : (
          <Form handleAdd={this.handleAdd} />
        )}
        <h2>TODOリスト</h2>
        <div className="list-all">
          <div className="list-class">
            <List
              todo={this.state.todo}
              handleRemove={this.handleRemove}
              handleComp={this.handleComp}
              handleEdit={this.handleEdit}
            />
          </div>
          <div className="sublist">
            <Sublist
              todo={this.state.todo}
              filter={this.state.filter}
              handleSwitch={this.handleSwitch}
            />
          </div>
        </div>
      </div>
    );
  }
}


