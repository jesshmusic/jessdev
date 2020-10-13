import axios from 'axios';

export async function getSortedPostsData() {
  const response = await axios.get( `${process.env.STRAPI_URL}/posts?_sort=created_at:desc` );
  return response.data;
}

export async function getAllPostIds() {
  const response = await axios.get( `${process.env.STRAPI_URL}/posts?_sort=created_at:desc` );
  return response.data.map(post => {
    return {
      params: {
        id: `${post.id}`
      }
    }
  })
}

export async function getAllProjectSlugs() {
  const response = await axios.get( `${process.env.STRAPI_URL}/dev-projects` );
  return response.data.map(project => {
    return {
      params: {
        slug: `${project.slug}`
      }
    }
  })
}

export async function getPostData(id) {
  const response = await axios.get( `${process.env.STRAPI_URL}/posts/${id}` );
  return {
    id,
    ...response.data,
  }
}

export async function getHomeData() {
  const response = await axios.get( `${process.env.STRAPI_URL}/dev-home` );
  return {
    ...response.data,
  }
}

export async function getProjectData(slug) {
  const response = await axios.get( `${process.env.STRAPI_URL}/dev-projects?slug=${slug}` );
  return {
    slug,
    ...response.data[0],
  }
}
