//** Create Read */

import * as express from 'express';
import catsRouter from './cats/cats.route';

class Server { // 싱글톤 패턴. 인스턴스가 하나만 절대적으로 존재함을 보증
  public app: express.Application;

  constructor() {
    const app: express.Application = express(); //생성자로 app 객체 만들고
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter); // 하나의 app객체는 catsRouter라는 라우터를 하나 추가한다
  }

  private setMiddleware() {
    //* logging middleware
    this.app.use((req, res, next) => { // 미들웨어
      console.log(req.rawHeaders[1]);
      console.log('this is logging middleware');
      next();
    });

    //* json middleware
    this.app.use(express.json());
    this.setRoute();

    //* 404 middleware
    this.app.use((req, res, next) => {
      console.log('this is error middleware');
      res.send({ error: '404 not found error' });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log('server is on...');
    });
  }
}

function init() {
  const server = new Server(); //싱글톤 인스턴스 실행
  server.listen();
}

init();