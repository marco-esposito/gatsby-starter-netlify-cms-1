import React, { Fragment } from 'react'

const renderForm = () => (
  <Fragment>
    <form name="contact" method="POST" netlify>
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Your Role: <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Fragment>
  )

const Contacts = () => (
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
              {renderForm()}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contacts
