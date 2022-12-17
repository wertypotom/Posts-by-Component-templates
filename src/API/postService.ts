import axios from 'axios';

export default class PostService {
  static async getAll(page: number = 1, limit: number = 10) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }
}
