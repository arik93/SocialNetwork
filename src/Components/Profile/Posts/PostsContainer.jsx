import Posts from './../Posts/Posts';
import { addPost } from './../../../Redux/Reducers/ProfileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
};

const PostsContainer = connect(mapStateToProps, { addPost })(Posts);

export default PostsContainer;
