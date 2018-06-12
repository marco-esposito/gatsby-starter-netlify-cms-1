import React, { Fragment, Component } from 'react'
import _ from 'lodash'

class Contacts extends Component {

  state = {
    isDangerClass: {
      name: '',
      company: '',
      email: '',
      message: '',
    },
    isHiddenClass: {
      name: 'is-hidden',
      company: 'is-hidden',
      email: 'is-hidden',
      message: 'is-hidden',
    },
    formValues: {
      name: '',
      company: '',
      email: '',
      message: '',
    },
  }

  handleChangeField = (evt) => {
    this.setState({
      ...this.state,
      formValues: {
        ...this.state.formValues,
        [evt.target.name]: evt.target.value,
      }
    });
  }

  // Check empty fields when user blur
  handleBlurField = evt => {
    if (!evt.target.value.length) {
      this.setState({
        ...this.state,
        isDangerClass: {
          ...this.state.isDangerClass,
          [evt.target.name]: 'is-danger',
        },
        isHiddenClass: {
          ...this.state.isHiddenClass,
          [evt.target.name]: '',
        },
      });
    } else {
      this.setState({
        ...this.state,
        isDangerClass: {
          ...this.state.isDangerClass,
          [evt.target.name]: '',
        },
        isHiddenClass: {
          ...this.state.isHiddenClass,
          [evt.target.name]: 'is-hidden',
        },
      });
    }
  }

  handleValidation = evt => {
    // Activate "is-danger" on empty fields
    // useful when user clicks on submit without entering any field
    const formValues = this.state.formValues;
    const isDangerClassObject = Object.keys(formValues).reduce((acc, currValue) => {
      if (!formValues[currValue].length) acc[currValue] = 'is-danger';
      return acc;
    }, {})
    const isHiddenClassObject = _.mapValues(isDangerClassObject, () => '');
    this.setState({
      ...this.state,
      isDangerClass: {
        ...this.state.isDangerClass,
        ...isDangerClassObject,
      },
      isHiddenClass: {
        ...this.state.isHiddenClass,
        ...isHiddenClassObject,
      }
    });

    // Prevent to submit if compulsory fields are empty
    const emptyValues = _.filter(this.state.formValues, value => !value.length);
    if (emptyValues.length) {
      evt.preventDefault();
    };
  }

  renderInputField = (label, name, type) => (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className={`input ${this.state.isDangerClass[name]}`}
          name={name}
          autoComplete={name}
          type={type}
          placeholder="Your text here"
          onChange={this.handleChangeField}
          onBlur={this.handleBlurField}
        />
      </div>
      <p className={`help ${this.state.isDangerClass[name]} ${this.state.isHiddenClass[name]}`}>This is a compulsory field</p>
    </div>
  )

  renderForm = () => (
  <Fragment>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="columns">
          <div className="column is-5">
            {this.renderInputField('Name and surname', 'name', 'text')}
            {this.renderInputField('Company', 'company', 'text')}
            {this.renderInputField('Email', 'email', 'email')}
          </div>
          <div className="column is-5">
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className={`textarea ${this.state.isDangerClass.message}`}
                  name="message"
                  placeholder="Textarea"
                  rows="10"
                  onChange={this.handleChangeField}
                  onBlur={this.handleBlurField}
                >
                </textarea>
              </div>
              <p className={`help ${this.state.isDangerClass.message} ${this.state.isHiddenClass.message}`}>This is a compulsory field</p>
            </div>
          </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-link"
            type="submit"
            onClick={this.handleValidation}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </Fragment>
  )

  render () {
    return (
      <section className="section" id="contacts">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column is-9 is-offset-3">
              <div className="content">
                <div className="section-intro">
                  <h1>Contacts</h1>
                  <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue.</p>
                </div>
                <div className="contact-form">
                  {this.renderForm()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contacts
