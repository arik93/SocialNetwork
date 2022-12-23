import React from 'react';
import ProfileStyle from './Posts.module.css';
import ProfilePostForm from '../../Forms/ProfilePostForm';

const {
  item
} = ProfileStyle;

export default function Posts(props) {
  const {
    posts,
    addPost,
  } = props;

  const mapPostsFunc = posts.map((post) => {
    return (
      <div className={item} key={post.id}>
        {post.text}
      </div>
    )
  });

  const onSubmit = (formData) => {
    console.log(formData);
    addPost(formData.newPostBody);
  };

  return (
    <div className={""}>
      {mapPostsFunc}
      <ProfilePostForm onSubmit={onSubmit} />
    </div>
  )
}
