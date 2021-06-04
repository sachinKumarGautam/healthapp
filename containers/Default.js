/* eslint-disable react/prop-types */

import * as React from 'react';
import { withRouter } from 'next/router';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
import App from '../components/App';
import Header from '../components/shared/header';
// import ProjectInfo from '../components/ProjectInfo';
import NetworkStatus from '../components/NetworkStatus';

// type Props = {
//   title?: string,
//   router: Object,
//   children: React.Element<*>
// };

const Default = props => (
  <App>
    <Helmet>
      <title>
        {props.title && props.title !== ''
          ? `${props.title} :: RAN! React . GraphQL . Next.js Toolkit`
          : 'RAN! React . GraphQL . Next.js Toolkit'}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    {props.router.url.pathname !== '/' ? (
      <Header pathname={props.router.url.pathname} />
    ) : null}

    {/* <ProjectInfo /> */}
    {props.children}
    <NetworkStatus />
  </App>
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
