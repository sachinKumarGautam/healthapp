// @flow
import * as React from 'react';
import fetchData from '../../libraries/utils/api';
// import PropTypes from 'prop-types';
import AuthFields from '../AuthFields';
import validate from '../AuthFields/validation';
// import connect from './store';

class SignInForm extends React.Component {
  formFields = [
    { key: 1, attr: { name: 'email', type: 'email', label: 'Email' } },
    { key: 2, attr: { name: 'password', type: 'password', label: 'Password' } }
  ];

  state = {
    errors: {},
    serverErrors: {},
    touched: false
  };

  getServerErrors(err) {
    if (err.graphQLErrors) {
      const obj = {};
      obj.message = err.graphQLErrors[0].message;
      this.setState({
        serverErrors: obj
      });
    }
  }

  handleTouch = () => {
    this.setState({ touched: true });
  };

  handleChange = e => {
    const fieldValue = e.currentTarget.value;
    const fieldName = e.currentTarget.name;
    const obj = {};
    obj[fieldName] = fieldValue;
    this.setState(obj);
  };

  handleSubmit(e, valuesPack) {
    console.log('ddd');
    e.preventDefault();

    // reset state
    this.setState({
      errors: {},
      serverErrors: {}
    });

    const handleValidate = validate(valuesPack);

    if (handleValidate.touched) {
      this.setState({ touched: handleValidate.touched });
    }
    if (handleValidate.errors) {
      return this.setState({ errors: handleValidate.errors });
    }

    const body = {
      email: '1schn9891@gmail.com',
      password: '1234'
    };

    fetchData('http://localhost:4000/signup', 'POST', body).then(data =>
      console.log('data', data)
    );

    // this.props.mutations
    //   .signIn(valuesPack)
    //   .then((response: { data: { signinUser: { token: string } } }) => {
    //     if (response.data) {
    //       this.props.actions.signIn(response.data.signinUser.token);
    //     }
    //   })
    //   .catch((err: { graphQLErrors?: Array<{ message: string }> }) => {
    //     this.getServerErrors(err);
    //   });
  }

  render() {
    const fields = this.formFields;
    // Packing all the necessary auth field states
    const valuesPack = {};

    fields.map(x => {
      const y = x.attr.name;
      if (this.state[y]) {
        valuesPack[y] = this.state[y];
      }
      return valuesPack;
    });

    return (
      <div>
        <AuthFields
          handleSubmit={e => {
            this.handleSubmit(e, valuesPack);
          }}
          handleChange={this.handleChange}
          fields={fields}
          errors={this.state.errors}
          touched={this.state.touched}
          handleTouch={this.handleTouch}
          selectFields="signinFields"
        />
        <br />
        <div>
          {Object.keys(this.state.errors).length === 0 &&
            this.state.serverErrors.message}
        </div>
      </div>
    );
  }
}

export default SignInForm;
