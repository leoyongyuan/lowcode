import React, { memo } from "react";
import AppStyle from "./App.module.css";
const Editor: React.FC = memo(() => {
  return <div className={AppStyle.editor}>Editor</div>;
});

export default Editor;
