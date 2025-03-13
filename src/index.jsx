import Post from "@models/post.js";
import '@css/style.css';
import '@less/style.less';
import '@sass/style.sass';
import '@sass/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import data from '@assets/data.json';
import logo from '@assets/logo.png';
import '@models/lodash';
// import $ from 'jquery';


const post = new Post('Webpack Post Title', logo);

// console.log('Post to string:', post.toString());
// $('pre').addClass('code').text(post.toString());


console.log('JSON:', data);

async function start() {
  return await new Promise((r) => setTimeout(() => r('Async done'), 2000));
}

start().then((res) => console.log(res)); 

const App = () => (
  <>
    <h1>Webpack training</h1>
    <div className="logo"/>
    <pre/>
    <div className="less-demo">
      <h2>Less Demo</h2>
    </div>
    <div className="sass-demo">
      <h2>Sass Demo</h2>
    </div>
    <div className="scss-demo">
      <h2>Scss Demo</h2>
    </div>
    </>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);