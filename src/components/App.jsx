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
      console.log(this.state.todo)
         }
  }

  handleRemove(i) {
    const newTodos = this.state.todo.filter(todo => todo.id !== i)
    this.setState({ todo: newTodos });

  }

  handleComp(i) {
    const C = this.state.todo.slice();
    const N = this.state.todo.findIndex(index => index.id === i)
        console.log(N);
    C[N].completed = true;
    console.log(C[N]);
    this.setState({ todo: C });
  }

  handleSwitch() {
        const K = this.state.todo.filter((value) => value.completed === true);
    if (K.length > 0 )
    {
      this.setState({ filter: false })
    }
    console.log(this.state.filter);
  }
  
  // handleEdit(title) {
    
  // }


  render() {
    const K = this.state.todo.filter( value => value.completed === true);
    if (K.length >= 5) {
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
            <List
              todo={this.state.todo}
              handleRemove={this.handleRemove}
              handleComp={this.handleComp}
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


