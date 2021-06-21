/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Main, SubmitButton } from './styles';

// type Props = {
//   selectFields: string,
//   fields: Array<{ key: number, attr: { [string]: string } }>,
//   handleTouch: Function,
//   handleChange: Function,
//   handleSubmit: Function,
//   touched: boolean,
//   errors: ?{ [string]: string }
// };

const AuthFields = (props) => {
    const {
        selectFields,
        fields,
        handleTouch,
        handleChange,
        handleSubmit,
        // touched,
        errors,
        flowType,
        setSignInFlow,
    } = props;
    const authMethod = (flowType === 'signin' && 'Sign In') || 'Sign Up';
    const updatedfields =
        flowType === 'signin' ? fields.reverse().slice(0, 2).reverse() : fields;

    const mapFields = updatedfields.map((field) => (
        <div key={field.key} className="flex flex-col space-y-1">
            <input
                className="space-y-1 border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                id={field.key}
                name={field.attr.name}
                type={field.attr.type}
                placeholder={field.attr.label}
                onChange={handleChange}
                onFocus={handleTouch}
                autoComplete="new-password"
            />
            {errors && <div>{errors[field.attr.name]}</div>}
        </div>
    ));

    const toggleSignUpflow = () => {
        if (flowType === 'signup') {
            setSignInFlow('signin');
        } else {
            setSignInFlow('signup');
        }
    };
    return (
        <div className="min-h-screen antialiased bg-gray-900 pt-24 pb-5">
            <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
                <h1 className="font-bold text-center text-4xl text-yellow-500">
                    Health<span className="text-blue-500">App</span>
                </h1>
                <form
                    autoComplete="off"
                    className="flex flex-col bg-white p-10 rounded-lg shadow space-y-6"
                >
                    <h1 className="font-bold text-xl text-center">
                        {authMethod}
                    </h1>
                    <input
                        autoComplete="false"
                        type="text"
                        style={{ display: 'none' }}
                    />
                    <input
                        autoComplete="false"
                        type="password"
                        style={{ display: 'none' }}
                    />
                    {flowType === 'signin' ? mapFields : mapFields}
                    <br />
                    <div
                        onClick={toggleSignUpflow}
                        className="inline-block text-blue-500 hover:text-blue-800 hover:underline"
                    >
                        {flowType === 'signin'
                            ? 'New user ?'
                            : 'Already a user ?'}
                    </div>
                    <button
                        className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
                        onClick={handleSubmit}
                        // touched={touched}
                        // disabled={!touched}
                    >
                        {authMethod}
                    </button>
                </form>
            </div>
        </div>
    );
};

// export const Main = styled.div`
//   border-bottom: 1px solid #ececec;
//   padding-bottom: 20px;
//   margin-bottom: 20px;
//   padding-top: 60px;
//   > h1 {
//     font-size: 20px;
//   }
//   > input {
//     display: block;
//     margin-bottom: 10px;
//   }
// `;
// AuthFields.propTypes = {
//   selectFields: PropTypes.string.isRequired,
//   fields: PropTypes.array.isRequired,
//   handleTouch: PropTypes.func.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   touched: PropTypes.bool.isRequired,
//   errors: PropTypes.object.isRequired
// };

export default AuthFields;
