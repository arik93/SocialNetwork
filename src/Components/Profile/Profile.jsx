import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

export default function Profile(props) {
  return (
    <div>
      <ProfileInfoContainer {...props} />
      <PostsContainer />
    </div>
  )
}
