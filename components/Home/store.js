import { graphql } from 'react-apollo';
import homeGql from './home.gql';

const withData = graphql(homeGql, {
  options: ({ postId }) => ({
    variables: {
      postId
    }
  }),
  props: ({ data: { loading, Post, error } }) => ({
    loading,
    Post,
    error
  })
});

export default comp => withData(comp);
