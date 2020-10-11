import axios from 'axios';

export async function getSortedPostsData() {
  const response = await axios.get( 'https://composerscape-api.herokuapp.com/posts?_sort=created_at:desc' );
  return response.data;
}

export async function getAllPostIds() {
  const response = await axios.get( 'https://composerscape-api.herokuapp.com/posts?_sort=created_at:desc' );
  return response.data.map(post => {
    return {
      params: {
        id: `${post.id}`
      }
    }
  })
}

export async function getPostData(id) {
  const response = await axios.get( `https://composerscape-api.herokuapp.com/posts/${id}` );
  return {
    id,
    ...response.data,
  }
}

export async function getHomeData() {
  const response = await axios.get( `https://composerscape-api.herokuapp.com/dev-home` );
  return {
    ...response.data,
  }
}
