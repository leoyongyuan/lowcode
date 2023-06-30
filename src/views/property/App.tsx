import React, { memo } from "react";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import Attr from "./Attr/App";
import Advanced from "./advanced/App";
import "./App.css";

const App: React.FC = memo(() => {
  return (
    <React.Fragment>
      <Tabs
        defaultActiveKey="1"
        items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
          const id = String(i + 1);
          const component = id === "1" ? <Attr /> : <Advanced />;
          const name = id === "1" ? "属性" : "高级";
          return {
            label: (
              <span>
                <Icon />
                {name}
              </span>
            ),
            key: id,
            children: component,
          };
        })}
      />
    </React.Fragment>
  );
});

export default App;
