import React, { memo } from "react";
import { Button } from "antd";
import { componentDataType } from "../../custom-component/type/index";
const _Button = memo((props) => {
  const attr = props as componentDataType;
  const style = attr.style as React.CSSProperties;
  return (
    <Button style={style}>
      {attr.name}
      {style.width}
    </Button>
  );
});

export default _Button;
