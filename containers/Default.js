/* eslint-disable react/prop-types */

import * as React from "react";
import { withRouter } from "next/router";
// import PropTypes from 'prop-types';
// import App from '../components/App';
// import Header from '../components/shared/header';
// import ProjectInfo from '../components/ProjectInfo';
import NetworkStatus from "../components/NetworkStatus";

// type Props = {
//   title?: string,
//   router: Object,
//   children: React.Element<*>
// };

const Default = (props) => (
  <div>
    {props.children}
    <NetworkStatus />
  </div>
);

// Default.propTypes = {
//   title: PropTypes.string,
//   router: PropTypes.object.isRequired,
//   children: PropTypes.element.isRequired
// };

// Default.defaultProps = {
//   title: ''
// };

export default withRouter(Default);
