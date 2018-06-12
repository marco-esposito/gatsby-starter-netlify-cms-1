import React, { Fragment, Component } from 'react'


class Contacts extends Component {

  state = {
    formValues: {
      name: '',
      company: '',
      email: '',
      message: '',
    }
  }

  changeField = (evt) => {
    this.setState({
      ...this.state,
      formValues: {
        ...this.state.formValues,
        [evt.target.name]: evt.target.value,
      }
    });
  }

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
            <div className="field">
              <label className="label">Name and surname</label>
              <div className="control">
                <input
                  className="input"
                  name="name"
                  autoComplete="name"
                  type="text"
                  placeholder="Your text here"
                  onChange={this.changeField}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Company</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="company"
                  autoComplete="company"
                  placeholder="Your text here"
                  onChange={this.changeField}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-danger"
                  type="email"
                  name="email"
                  placeholder="Your text here"
                  onChange={this.changeField}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p className="help is-danger">This email is invalid</p>
            </div>
          </div>
          <div className="column is-5">
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="Textarea"
                  rows="10"
                  onChange={this.changeField}
                >
                </textarea>
              </div>
            </div>
          </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" type="submit">Submit</button>
        </div>
      </div>
    </form>
  </Fragment>
  )

  render () {
    console.log(this.state.formValues);
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
