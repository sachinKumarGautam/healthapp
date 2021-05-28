// // @flow
// import * as React from 'react';
// import PostList from '../components/PostList';
// import withData from '../libraries/withData';
// import DefaultCon from '../containers/Default';

// export default withData(props => (
//   <DefaultCon {...props}>
//     <PostList />
//   </DefaultCon>
// ));

// @flow
import * as React from 'react';
import HomeComp from '../components/Home';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';

export default withData(props => (
  <DefaultCon {...props}>
    <HomeComp />
  </DefaultCon>
));
