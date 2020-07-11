import React from "react";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

    render() {
    return (
        <div>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChange}
          autoFocus
        />
            <button className="btn btn-primary"
                onClick={this.handleSubmit}>
          保存
        </button>{" "}
      </div>
    );
  }
  handleChange = (e) => {
      this.setState({ title: e.currentTarget.value });
            console.log(e.currentTarget.value);
  };
  handleSubmit = (e) => {
      const { onSubmit, id } = this.props;
      if (!this.state.title) return;
      else if (this.props.title === this.state.title) {
             return alert("編集項目が変更されていません");
           }
    onSubmit(id, this.state.title);
  };
}

export default Edit;
