import React, { memo, useMemo, useState } from "react";
import { Button, Tooltip } from "antd";
import AppStyle from "./App.module.css";

const App: React.FC = memo(() => {
  const [arrow] = useState("Show");
  const [isShowComponentList, setIsShowComponentList] = useState(false);

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  return (
    <div className={AppStyle.root}>
      <Tooltip placement="right" title={"Right"} arrow={mergedArrow}>
        <Button onClick={() => setIsShowComponentList(!isShowComponentList)}>组件</Button>
      </Tooltip>
      <Tooltip placement="right" title={"Right"} arrow={mergedArrow}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="right" title={"Right"} arrow={mergedArrow}>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip placement="right" title={"Right"} arrow={mergedArrow}>
        <Button>Right</Button>
      </Tooltip>
      {isShowComponentList && <div className={AppStyle.showPanel}></div>}
    </div>
  );
});

export default App;
