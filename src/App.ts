import express, { Request, Response } from 'express';
import IndexRouter from './routes';
import { db } from './database/AppDataSource';

class App {
  public app: express.Application;
  public indexRouter: IndexRouter = new IndexRouter();

  constructor() {
    this.app = express();
    this.default();
    this.initializeDatabase();
    this.initializeMiddlewares();
    this.initializeRouters();
  }

  private default(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hi! This is my first express server');
    });
  }

  private initializeDatabase(): void {
    db.initialize()
      .then(() => {
        console.log('Data Source has been initialized!');
      })
      .catch((err) => {
        console.error('Error during Data Source initialization:', err);
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
