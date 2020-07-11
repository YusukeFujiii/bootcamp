import React from "react";

const Form = (props) => (
  <div className="form-all">
    <form className="input-form" onSubmit={props.handleAdd}>
      <input type="text" name="title" placeholder="やること"/>
      <input className="btn btn-primary" type="submit" value="保存" />
    </form>
  </div>
);

export default Form;