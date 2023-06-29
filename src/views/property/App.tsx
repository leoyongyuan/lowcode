import React, { memo } from "react";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import "./App.css";

const App: React.FC = memo(() => {
  return (
    <React.Fragment>
      <Tabs
        defaultActiveKey="1"
        items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
          const id = String(i + 1);
          return {
            label: (
              <span>
                <Icon />
                Tab {id}
              </span>
            ),
            key: id,
            children: `Tab ${id}`,
          };
        })}
      />
    </React.Fragment>
  );
});

export default App;
