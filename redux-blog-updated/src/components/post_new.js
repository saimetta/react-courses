import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends Component {

  renderField(field) {
    const { meta: {error, touched}} = field; //Deconstruct meta and then meta.error and meta.touched
    //const className = `form-group ${field.meta.error && field.meta.touched?'has-danger':''}`;
    const className = `form-group ${error && touched?'has-danger':''}`;
    return (
      <div key="{field.label}" className={className}>
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}//Wire all the redux-form event handlers to the component
        />
        <div className="text-help">
          {touched?bberror:''}
        </div>
      </div>
    );
  }

  onSubmit (values) {
    console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push('/')
    });
  }

  render () {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderField}/>
        <Field name="categories" label="Categories" component={this.renderField}/>
        <Field name="content" label="Content" component={this.renderField}/>
        <button className="btn btn-primary" type="submit">Submit  </button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}
//Executes on submit
function validate (values) {
  //values contains all the values entered on the form
  //If errors is empty means all good, submit allowed
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter a category';
  }
  if (!values.content) {
    errors.content = 'Enter a content';
  }
  //If errors has *any* properties redux assumes the form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'//the name of the form
})(
  connect(null,{ createPost })(PostNew)
);
