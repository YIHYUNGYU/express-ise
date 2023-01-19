import express, { NextFunction, Request, Response } from 'express';
import IndexRouter from './routes';

class App {
  public app: express.Application;
  public indexRouter: IndexRouter = new IndexRouter();

  constructor() {
    this.app = express();
    this.default();
    this.initializeMiddlewares();
    this.initializeRouters();
  }

  private default(): void {
    this.app.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.send('Hi! This is my first express server');
    });
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRouters(): void {
    this.app.use(this.indexRouter.router);
  }
}

export default App;
