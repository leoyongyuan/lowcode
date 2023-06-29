import React, { memo } from "react";
import AppStyle from "./App.module.css";
import Attr from "./views/property/App";
import Slider from "./views/slider/App";
import Main from "./views/main/App";
// function MyComponent<T>(props: T) {
//   return (
//   	<div></div>
//   );
// }

const App = memo((props) => {
  console.log(props);
  return (
    <div className={AppStyle.root}>
      <div className={AppStyle.header}>header</div>
      <div className={AppStyle.body}>
        <div className={AppStyle.left}>
          <Slider></Slider>
        </div>
        <div className={AppStyle.main}>
          <Main></Main>
        </div>
        <div className={AppStyle.right}>
          <Attr></Attr>
        </div>
      </div>
    </div>
  );
});

export default App;
