import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values: ContactFormValues) => {
    onSubmit(values);
    setSubmitted(true);
  };

  const validate = (values: ContactFormValues) => {
    const errors: Partial<ContactFormValues> = {};

    if (!values.name) {
      errors.name = 'Required';
    }
    
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!values.message) {
      errors.message = 'Required';
    }
    
    return errors;
  };

  if (submitted) {
    return (
      <div aria-atomic='true' aria-label='form submitted'>
      {`thank ${name} you for your submission!`}
      </div>)
      ;
  }

  return (
    <Form<ContactFormValues> onSubmit={handleSubmit} validate={validate}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} className='form'>
          <div className='form__item'>
            <label className='form__item-label'>Name</label>
            <Field className='form__item-input' name="name" component="input" type="text" placeholder="Name" />
          </div>

          <div className='form__item'>
        <label className='form__item-label'>Email</label>
        <Field<string> className='form__item-input' name="email" component="input" type="email" placeholder="Email" />
      </div>

      <div className='form__item'>
        <label className='form__item-label'>Message</label>
        <Field<string> className='form__item-input' name="message" component="textarea" placeholder="Message" />
      </div>
      <div className="form">
        <div className="form__item">
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        </div>
      </div>
        </form>
      )}
    </Form>
  );
};

export default ContactForm;