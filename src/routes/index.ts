import { Router } from 'express';
import PostRouter from './PostRouter';

class IndexRouter {
  public router: Router;
  public postRouter: PostRouter = new PostRouter();

  constructor() {
    this.router = Router();
    this.initializeRouters();
  }

  public initializeRouters() {
    this.router.use('/posts', this.postRouter.router);
  }
}

export default IndexRouter;
