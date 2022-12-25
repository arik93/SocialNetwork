import Posts from './../Posts/Posts';
import { addPost } from './../../../Redux/Reducers/ProfileReducer';
import { connect } from 'react-redux';
import { getPosts } from '../../../Redux/Selectors/ProfileSelector';

const mapStateToProps = (state) => {
  return {
    posts: getPosts(state)
  }
};

const PostsContainer = connect(mapStateToProps, { addPost })(Posts);

export default PostsContainer;
