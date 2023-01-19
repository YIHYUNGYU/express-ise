import { Router } from 'express';
import { PostController } from '../controllers';

class PostRoute {
  public router: Router;
  public postController: PostController = new PostController();

  constructor() {
    this.router = Router();
    this.initializeRoute();
  }

  public initializeRoute() {
    this.router.get('/', this.postController.createUser);
  }
}

export default PostRoute;
