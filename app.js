import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

app.use(helmet());
app.set("view engine", "pug"); //set engin을 pug로
app.use(cookieParser()); // cookie를 파싱하고
app.use(bodyParser.json()); //body에 담긴 정보를 파싱함
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev")); //그 후에 컨트롤러와 라우트들이 있음
app.use(localsMiddleware) //local 변수를 global변수로 사용하도록 만들어주는 거


app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
