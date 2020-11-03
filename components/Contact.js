import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Label } from 'reactstrap'
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation'
import styles from './Contact.module.scss'
import { Tween } from 'react-gsap'

class ContactForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sent: false,
      name: '',
      email: '',
      subject: '',
      message: '',
      errorMessage: null
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: '<YOUR_EMAIL_ID>',
      subject: subject,
      message: message
    }
    emailjs.send(
      'Web Dev Portfolio',
      'template_0soe06q',
      templateParams,
      'user_a9AZgmEP5clP4eqlkWOLo'
    )
      .then(response => {
        this.setState({ sent: true })
      }, error => {
        this.setState({ sent: false, errorMessage: error })
      })
  }

  resetForm () {
    if (!this.state.sent && !this.state.errorMessage) {
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }
  }

  handleChange (param, e) {
    this.setState({ [param]: e.target.value })
  }

  render () {
    return this.state.sent ? (
      <Tween from={{ y: '100', opacity: 0 }} duration={2} ease={'power2.out'}>
        <div className={styles.contactForm}>
          <div className={styles.contactFormContainer}>
            <h3>Thanks for contacting me, I will respond as soon as possible.</h3>
          </div>
        </div>
      </Tween>
    ) : (
      <div className={styles.contactForm} id={'contactForm'}>
        <AvForm onSubmit={this.handleSubmit.bind(this)}>
          <AvGroup controlid="formBasicEmail">
            <Label>Email address</Label>
            <AvInput
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this, 'email')}
              placeholder="Enter email"
              required
            />
            <AvFeedback>This field is required</AvFeedback>
          </AvGroup>
          <AvGroup controlid="formBasicName">
            <Label>Name</Label>
            <AvInput
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
              placeholder="Name"
              required
            />
            <AvFeedback>This field is required</AvFeedback>
          </AvGroup>
          <AvGroup controlid="formBasicSubject">
            <Label>Subject</Label>
            <AvInput
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, 'subject')}
              placeholder="Subject"
              required
            />
            <AvFeedback>This field is required</AvFeedback>
          </AvGroup>
          <AvGroup controlid="formBasicMessage">
            <Label>Message</Label>
            <AvInput
              type="textarea"
              name="message"
              value={this.state.message}
              onChange={this.handleChange.bind(this, 'message')}
              required
            />
            <AvFeedback>This field is required</AvFeedback>
          </AvGroup>
          <Button variant="primary" type="submit" className={'border-button'}>
              Submit
          </Button>
        </AvForm>
      </div>
    )
  }
}
export default ContactForm
