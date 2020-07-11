import React, {Component} from 'react';
import './App.css';
import Form from './Form';
import List from './List';
import Sublist from './Sublist';
import Goal from './Goal';

let currentId = 0;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      input: "",
      filter: true,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleComp = this.handleComp.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
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
         }
  }

  handleRemove(i) {
    console.log(i)
    const newTodos = this.state.todo.filter(v => v.id !== i)
    this.setState({ todo: newTodos });
    currentId--;

    console.log(this.state.todo)
  }

  handleComp(i) {
    console.log(i)
    const compTodo = this.state.todo.slice()
    compTodo[i].completed = true;
    this.setState({ todo: compTodo });
        console.log(this.state.todo);

  }

  handleSwitch(t) {
    if (t.length > 0 )
    {
      this.setState({ filter: false })
    }
    console.log(this.state.filter);
  }
  
  // handleEdit(title) {
    
  // }


  render() {
    const trueDate = this.state.todo.filter(({ completed }) => completed === true);
    const falseDate = this.state.todo.filter(({ completed }) => completed === false);
    if (trueDate.length >= 5) {
      return (
        <Goal />
      );
    }
    return (
      <div className="App">
        <h1 className="title">TODOリスト作成</h1>
        <Form input={this.state.input} handleAdd={this.handleAdd} />
        <h2>TODOリスト</h2>
        <div className="list-all">
        <div className="list-class">
            <List todos={falseDate}   handleRemove={this.handleRemove} handleComp={this.handleComp}/>
        </div>
        <div className="sublist">
            <Sublist sublists={trueDate} filter={this.state.filter} handleSwitch={this.handleSwitch}/>
          </div>
        </div>
      </div>
    );
  }
}


