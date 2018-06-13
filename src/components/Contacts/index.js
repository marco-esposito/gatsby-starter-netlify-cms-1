import React, { Fragment, Component } from 'react'
import _ from 'lodash'

import Input from './Input'
import Textarea from './TextArea'

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
              name={name}
              type={type}
              onChangeField={this.handleChangeField}
              onBlurField={this.handleBlurField}
            />
          )
          case 'textarea':
          return (
            <Textarea
              className={`textarea ${this.state.isDangerClass[name]}`}
              name={name}
              onChangeField={this.handleChangeField}
              onBlurField={this.handleBlurField}
            />
          )
        }
        })()
        }
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
