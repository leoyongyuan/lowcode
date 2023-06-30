import React, { memo } from "react";
import { Button } from "antd";
import { componentDataType } from "../../custom-component/type/index";
const _Button = memo((props) => {
  const attr = props as componentDataType;
  return <Button>{attr.name + attr.id}</Button>;
});

export default _Button;
