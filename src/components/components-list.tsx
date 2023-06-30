import React, { memo } from "react";
import { componentDataType } from "../custom-component/type/index";
import componentData from "../custom-component/component-data";
import AppStyle from "./App.module.css";

const ComponentList = memo(() => {
  const showComponentList = () => {
    return componentData.map((item: componentDataType, index: number) => {
      return (
        <div className={AppStyle.component} key={index} draggable id={index.toString()}>
          {item.component + index}
        </div>
      );
    });
  };

  const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    e.dataTransfer.setData("index", target.id);
  };

  return <div onDragStart={(e: React.DragEvent<HTMLDivElement>) => dragStart(e)}>{showComponentList()}</div>;
});

export default ComponentList;
