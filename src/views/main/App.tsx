import React, { memo } from "react";
import AppStyle from "./App.module.css";
import Editor from "./editor";

const App: React.FC = memo(() => {
  return (
    <div className={AppStyle.root}>
      <Editor></Editor>
    </div>
  );
});

export default App;
