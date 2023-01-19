import { Request, Response } from 'express';
import { PostService } from '../services';

class PostController {
  private postService = new PostService();
  public createUser = async (req: Request, res: Response) => {
    const hello = this.postService.createUser();
    res.json({ word: hello });
  };
}

export default PostController;
