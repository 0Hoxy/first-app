import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

setInterval(function () {
  root.render(React.createElement(App));
}, 1000);

// function App() {
//   return React.createElement("div", null, [
//     React.createElement("h1", null, "처음 앱"),
//     React.createElement("p", null, `현재 시간 : ${new Date().toLocaleString()}.`),
//     React.createElement("small", null, "Copyright Footer Text")
//     //type, (태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment)
//     //[props], (리액트 컴포넌트에 넣어주는 데이터 객체)
//     //[ ... children]  (자식으로 넣어주는 요소들)
//   ]);
// }