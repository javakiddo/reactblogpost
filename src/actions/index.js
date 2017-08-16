import axios from 'axios';

export const FETCH_POSTS='fetch_posts';


const API_KEY='?key=warrior';

export function fetchPosts(){
  const request=axios.get(`${ROOT_URL}/posts${API_KEY}`);

return {
  type: FETCH_POSTS,
  payload:request
};

}
