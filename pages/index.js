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
import { useEffect } from 'react';
import { firebaseCloudMessaging } from '../utils/webPush';

import HomeComp from '../components/Home';
// import withData from '../libraries/withData';
// import DefaultCon from "../containers/Default";

const Home = () => {
    useEffect(() => {
        firebaseCloudMessaging.init();
    }, []);
    return <HomeComp />;
};

export default Home;
