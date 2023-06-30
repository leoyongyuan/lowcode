import React from "react";
import _Button from "../../custom-component/Button/App";
import { componentDataType } from "../../custom-component/type/index";
function render(component: componentDataType) {
  switch (component.component) {
    case "_Button":
      return <_Button {...component} key={component.id} />;
      break;
  }
}
export default render;
