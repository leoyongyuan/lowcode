import React, { memo, useEffect } from "react";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateCurComponentStyle, setCurComponent } from "../../../redux/modules/index";
import "../App.css";

const App = memo(() => {
  const { curComponent } = useSelector(
    (state: any) => ({ curComponent: state.componentData.curComponent })// eslint-disable-line
  );
  const dispatch = useDispatch();
  const { style } = curComponent;
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const target = e.target;
    dispatch(updateCurComponentStyle([key, target.value]));
    dispatch(setCurComponent(curComponent));
  };
  const renderList = () => {
    if (!style) return <div></div>;
    return Object.keys(style).map((key: string, index: number) => {
      return (
        <div className="input-container" key={index}>
          {key} {curComponent.id}
          <Input
            style={{ width: "70%", marginLeft: "10px" }}
            onChange={(e) => inputChange(e, key)}
            value={style[key]}
          />
        </div>
      );
    });
  };
  useEffect(() => {
    curComponent;
  }, [curComponent]);

  return <div className="Attr">{renderList()}</div>;
});

export default App;
