/* eslint-disable */
import * as React from 'react';
import router, { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const App = () => {
    return (
        <div>
            <button onClick={notify}>Make me a toast</button>
            <Toaster />
        </div>
    );
};

import persist from '../../libraries/persist';
import { fetchData } from '../../libraries/utils/api';
// import PropTypes from 'prop-types';
import AuthFields from '../AuthFields';
import validate from '../AuthFields/validation';
// import connect from './store';

const SignInForm = () => {
    const formFields = [
        { key: 1, attr: { name: 'name', type: 'name', label: 'Name' } },

        { key: 2, attr: { name: 'email', type: 'email', label: 'Email' } },
        {
            key: 3,
            attr: { name: 'password', type: 'password', label: 'Password' },
        },
    ];
    const [errorState, setErrorState] = React.useState({});
    const [serverErrors, setServerErrorsState] = React.useState({});
    const [touched, setTouched] = React.useState(false);
    const [formValues, setFormValues] = React.useState({});
    const [flowType, setSignInFlow] = React.useState('signin');

    const handleChange = (e, setFormValues) => {
        const fieldValue = e.currentTarget.value;
        const fieldName = e.currentTarget.name;
        const obj = {};
        obj[fieldName] = fieldValue;
        setFormValues(obj);
    };

    const getServerErrors = (err) => {
        if (err.graphQLErrors) {
            const obj = {};
            obj.message = err.graphQLErrors[0].message;
            setServerErrorsState(obj);
        }
    };

    const handleSubmit = async (e, valuesPack) => {
        e.preventDefault();
        // reset state
        setErrorState({});
        setServerErrorsState({});

        const handleValidate = validate(valuesPack);

        if (handleValidate.touched) {
            setTouched(handleValidate.touched);
        }
        if (handleValidate.errors) {
            setErrorState(handleValidate.errors);
        }

        const body = {
            email: `schn9891@gmail.com`,
            password: '1234',
            name: 'Sachin test',
        };

        try {
            const results = await toast.promise(
                fetchData(`http://localhost:4000/${flowType}`, 'POST', body),
                {
                    loading: 'hold on letting you win',
                    success: 'Yay! you are in!',
                    error: 'Something boo happened!!',
                }
            );
            await persist.willSetAccessToken(results.token);
            if (router.query?.returnUrl) {
                router.push(router.query?.returnUrl);
            } else {
                router.push('/');
            }
        } catch (err) {
            console.log(`this is the error`, err);
        }

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
    };

    const valuesPack = {};
    formFields.map((x) => {
        const y = x.attr.name;
        if (formValues[y]) {
            valuesPack[y] = this.state[y];
        }
        return valuesPack;
    });

    return (
        <div>
            <AuthFields
                handleSubmit={(e) => {
                    handleSubmit(e, valuesPack);
                }}
                handleChange={(e) => handleChange(e, setFormValues)}
                fields={formFields}
                errors={errorState}
                touched={touched}
                handleTouch={() => setTouched(true)}
                selectFields="signinFields"
                flowType={flowType}
                setSignInFlow={setSignInFlow}
            />
            <br />
            <div>
                {Object.keys(errorState).length === 0 && serverErrors.message}
            </div>
        </div>
    );
};

// class SignInForm extends React.Component {
//     state = {
//         errors: {},
//         serverErrors: {},
//         touched: false,
//     };

//     getServerErrors(err) {
//         if (err.graphQLErrors) {
//             const obj = {};
//             obj.message = err.graphQLErrors[0].message;
//             this.setState({
//                 serverErrors: obj,
//             });
//         }
//     }

//     handleTouch = () => {
//         this.setState({ touched: true });
//     };

//     render() {
//         const fields = this.formFields;
//         // Packing all the necessary auth field states
//         const valuesPack = {};

//         fields.map((x) => {
//             const y = x.attr.name;
//             if (this.state[y]) {
//                 valuesPack[y] = this.state[y];
//             }
//             return valuesPack;
//         });

//         return (
//             <div>
//                 <AuthFields
//                     handleSubmit={(e) => {
//                         this.handleSubmit(e, valuesPack);
//                     }}
//                     handleChange={this.handleChange}
//                     fields={fields}
//                     errors={this.state.errors}
//                     touched={this.state.touched}
//                     handleTouch={this.handleTouch}
//                     selectFields="signinFields"
//                 />
//                 <br />
//                 <div>
//                     {Object.keys(this.state.errors).length === 0 &&
//                         this.state.serverErrors.message}
//                 </div>
//             </div>
//         );
//     }
// }

export default SignInForm;
