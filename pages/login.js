// @flow
import * as React from 'react';
import SignInForm from '../components/SignInForm';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';

const login = (props) => {
    return (
        <DefaultCon title="Sign In" {...props}>
            <SignInForm />
        </DefaultCon>
    );
};

export default login;
