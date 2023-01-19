import { db } from '../database/AppDataSource';
import { Post } from '../entity/post.entity';

class PostService {
  public getPosts = async () => {
    return await db.getRepository(Post).find();
  };
}

export default PostService;
