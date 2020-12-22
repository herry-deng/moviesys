import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import App from './App';
// import { store } from './redux/store';
// import MovieAction from './redux/actions/MovieAction';
// import { MovieService } from './services/MovieService';

// store.subscribe(() => {
//   console.log(store.getState());
// })
// store.dispatch(MovieAction.setLoadingAction(true));

// store.dispatch(MovieAction.fetchMovies({
//   page: 2
// }));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// MovieService.add({
//   name: "abc",
//   timeLong: 33,
//   types: ["喜剧"],
//   areas: ["大陆"],
//   isHot: true,
//   isClassic: false,
//   isComing: true
// }).then(resp => {
//   // if(resp.data){
//   //   console.log(resp.err);
//   // console.log(data);
// })

// MovieService.getMovies({
//   page:2
// }).then(movies => {
//   movies.data.forEach(m=>{
//     console.log(m.name, m.types);
//   })
// })
