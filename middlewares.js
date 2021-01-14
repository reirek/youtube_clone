import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  next();
};
//express response locals 
//미들웨어가 next에 req를 전달해야함 
//이경우엔 미들웨어가 커넥션과 라우트 사이에 있어서 next()라고 하면 됨