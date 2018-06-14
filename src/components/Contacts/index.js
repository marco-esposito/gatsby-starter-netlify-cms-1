import React, { Fragment, Component } from 'react'
import _ from 'lodash'

import Input from './Input'
import TextArea from './TextArea'

class Contacts extends Component {

  state = {
    isDangerClass: {
      name: '',
      company: '',
      email: '',
      message: '',
    },
    isHiddenClass: {
      name: 'is-invisible',
      company: 'is-invisible',
      email: 'is-invisible',
      message: 'is-invisible',
    },
    buttonLoadingClass: '',
    buttonDisabled: false,
    notificationSuccessClass: 'is-invisible',
    notificationDangerClass: 'is-invisible',
    formValues: {
      name: '',
      company: '',
      email: '',
      message: '',
    },
  }

  //****************//
  // VALIDATION
  //****************//

  // Check empty fields when user blurs
  validateSingleEmptyField = evt => {
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
          [evt.target.name]: 'is-invisible',
        },
      });
    }
  }

  validateAllEmptyFields = () => {
    // Activate "is-danger" on empty fields when user submits the form
    // "Reduce" creates a new filtered object containing only the empty fields
    const formValues = this.state.formValues;
    const isDangerFilteredObject = Object.keys(formValues).reduce((acc, currValue) => {
      if (!formValues[currValue].length) acc[currValue] = 'is-danger';
      return acc;
    }, {})
    const emptyFieldsObject = _.mapValues(isDangerFilteredObject, () => '');
    this.setState({
      ...this.state,
      isDangerClass: {
        ...this.state.isDangerClass,
        ...isDangerFilteredObject,
      },
      isHiddenClass: {
        ...this.state.isHiddenClass,
        ...emptyFieldsObject,
      }
    });
    const emptyValues = _.filter(this.state.formValues, value => !value.length);
    return !emptyValues.length;
  }

  validateEmail = () => {
      const email = this.state.formValues.email;
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(email).toLowerCase())) {
        // Email not valid
        this.setState({
          ...this.state,
          isDangerClass: {
            ...this.state.isDangerClass,
            email: 'is-danger',
          },
          isHiddenClass: {
            ...this.state.isHiddenClass,
            email: '',
          },
        });
        return false;
      };
      return true;
  }


  //****************//
  // SUBMISSION
  //****************//

  encode = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
  }

  clearFields = () => {
    this.setState({
      ...this.state,
      formValues: {
        name: '',
        company: '',
        email: '',
        message: '',
      }
    });
  }

  fetchSubmit = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state.formValues })
    })
    .then(() => {
      this.setState({
        ...this.state,
        buttonLoadingClass: '',
        buttonDisabled: false,
        notificationSuccessClass: 'is-success',
        notificationDangerClass: 'is-invisible',
      });
      this.clearFields();
    })
    .catch(() => {
      this.setState({
        ...this.state,
        buttonLoadingClass: '',
        buttonDisabled: false,
        notificationDangerClass: 'is-danger',
        notificationSuccessClass: 'is-invisible',
      });
    });
  }

  handleSubmit = evt => {
    // Submit with a fetch
    if (this.validateAllEmptyFields() && this.validateEmail()) {
      this.setState({
        ...this.state,
        buttonLoadingClass: 'is-loading',
        buttonDisabled: true,
      });
      this.fetchSubmit();
    }
    evt.preventDefault();
  }

  handleDeleteNotification = (evt) => {
    this.setState({
      ...this.state,
      notificationSuccessClass: 'is-invisible',
      notificationDangerClass: 'is-invisible',
    });
    evt.preventDefault();
  }


  //****************//
  // FORM HANDLING
  //****************//

  handleChangeField = (evt) => {
    this.setState({
      ...this.state,
      formValues: {
        ...this.state.formValues,
        [evt.target.name]: evt.target.value,
      }
    });
  }

  renderField = (tag, label, name, type) => (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        {(() => {
          switch (tag) {
          case 'input':
          return (
            <Input
              className={`input ${this.state.isDangerClass[name]}`}
              isHiddenClass={this.state.isHiddenClass}
              isDangerClass={this.state.isDangerClass}
              name={name}
              type={type}
              value={this.state.formValues[name]}
              onChangeField={this.handleChangeField}
              onBlurField={this.validateSingleEmptyField}
            />
          )
          case 'textarea':
          return (
            <TextArea
              className={`textarea ${this.state.isDangerClass[name]}`}
              isHiddenClass={this.state.isHiddenClass}
              isDangerClass={this.state.isDangerClass}
              name={name}
              value={this.state.formValues[name]}
              onChangeField={this.handleChangeField}
              onBlurField={this.validateSingleEmptyField}
            />
          )
        }
        })()
        }
      </div>
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

      {/* the following line is necessary to submit the form to Netlify */}
      <input type="hidden" name="form-name" value="contact" />

      <div className="columns">
          <div className="column is-5">
            {this.renderField('input', 'Name and surname', 'name', 'text')}
            {this.renderField('input', 'Company', 'company', 'text')}
            {this.renderField('input', 'Email', 'email', 'email')}
          </div>
          <div className="column is-5">
            {this.renderField('textarea', 'Message', 'message')}
          </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button
            className={`button is-link ${this.state.buttonLoadingClass}`}
            disabled={this.state.buttonDisabled}
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="is-inline-flex">
        <div className={`notification ${this.state.notificationSuccessClass}`}>
          <button className="delete" onClick={this.handleDeleteNotification}></button>
          Your message has been successfully sent!
        </div>
        <div className={`notification ${this.state.notificationDangerClass}`}>
          <button className="delete" onClick={this.handleDeleteNotification}></button>
          Something went wrong. Please try again.
        </div>
      </div>
    </form>
  </Fragment>
  )


  //****************//
  // REACT RENDERING
  //****************//

  render () {
    return (
      <section className="section even" id="contacts">
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
