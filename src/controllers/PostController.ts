import { Request, Response } from 'express';
import { PostService } from '../services';

class PostController {
  private postService = new PostService();
  public getPosts = async (req: Request, res: Response) => {
    const hello = await this.postService.getPosts();
    res.json({ hello });
  };
}

export default PostController;
