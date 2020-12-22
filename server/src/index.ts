import "reflect-metadata";
import Express from "express";
import MovieRouter from "./routes/MovieRoute";
import UploadRouter from "./routes/UploadRoute";
// import { Movie } from "./entities/Movie";
// import { MovieService } from "./services/MovieService";
// import {  MovieModel } from "./db";
// import { Movie } from "./entities/Movie";
// import { validate } from "class-validator";
// import { Movie } from "./entities/Movie";
// import { plainToClass } from "class-transformer";

// // const m = new Movie();
// const m: any = {};  // plain Object 平面对象
// m.name = 2343;
// m.types = "fhgujds";
// m.areas = ["中国大陆"];
// m.isClassic = true;
// m.timeLong = 2;

// // 将 plain Object转换为Movie的对象
// const movie = plainToClass(Movie, m as object);
// // console.log(movie, typeof movie.name);
// validate(movie).then(errors => {
//     console.log(errors);
// })

// MovieModel.find().then(ms => {
//     console.log(ms);
//     // ms.forEach(m=>{

//     // })
// });

// const m: any = {
//     name: "唐人街探案3",
//     isHot: true,
//     poster: "sfsdf",
//     description: "asdfasf",
//     timeLong: 150,
//     types:["喜剧", "侦探"],
//     areas: ["中国大陆", "美国"],
// };
// const m = new Movie();

// m.name = "sfdjsf";

// const movie = Movie.transform(m);


// m.validateThis().then(err => {
//     console.log(err);
// });

// MovieService.add(m).then(result => {
//     if(Array.isArray(result)) {
//         console.log(result);
//     }
//     else{
//         console.log(result._id);
//     }
// });

// MovieService.add(m).then(result => {
//     console.log(result)
// });

// MovieService.delete("5f886720c4592344c895a80c").then(() => {
//     console.log("删除成功");
// })

// MovieService.findById("5f888f0fc9df661b001c82fc").then(result => {
//     console.log(result);
// })

// function getRandom(min: number, max: number) {
//     const dec = max - min;
//     return Math.floor(Math.random() * dec + min);
// }

// for (let i = 0; i < 100; i++) {
//     const m = new Movie();
//     m.name = "电影" +(i + 1);
//     m.areas = ["中国大陆", "美国"];
//     m.types = ["喜剧", "动作"];
//     m.isClassic = true;
//     m.timeLong = getRandom(70, 240);
//     MovieService.add(m);
// }

// const condi: any = {
//     page: 3,
//     limit:5,
//     key: "2"
// };
// MovieService.find(condi).then(result => {
//     if (result.errors.length > 0) {
//         console.log(result.errors);
//     }
//     else {
//         result.data.forEach(m => {
//             console.log(m.name);
//         });
//         console.log("总数："+ result.count)
//     }
// })

// express ,koa2 nodejs端服务器框架

const app = Express();

app.use("/upload", Express.static("public/upload"));   // 8.静态资源如何在EXPRESS里里面访问

app.use(Express.json());  // 配置中间件，用于解析请求消息中的json格式数据

// 使用postman进行测试
app.use("/api/movie", MovieRouter);

app.use("/api/upload", UploadRouter);

app.listen(3000);