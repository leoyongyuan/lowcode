import React, { memo, useRef } from "react";
import componentList from "../../custom-component/component-data";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { deepCopy, generateID } from "../../utils/index";
import AppStyle from "./App.module.css";
import { addComponent } from "../../redux/modules/index";
import { componentDataType } from "../../custom-component/type/index";
import Render from "./render";

const Editor: React.FC = memo(() => {
  const editorRef = useRef(null);
  const { editorComponent } = useSelector(
    (state: any) => ({ editorComponent: state.componentData.editorComponent }), // eslint-disable-line
    shallowEqual
  );
  const dispatch = useDispatch();
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const index = e.dataTransfer.getData("index");
    if (editorRef.current) {
      const editor = editorRef.current as HTMLDivElement;
      const rectInfo = editor.getBoundingClientRect();
      if (index) {
        const component = deepCopy<componentDataType>(componentList[Number(index)]);
        component.style.top = e.clientY - rectInfo.y;
        component.style.left = e.clientX - rectInfo.x;
        component.id = generateID();
        dispatch(addComponent(component));
      }
    }
  };

  const renderComponent = () => {
    return editorComponent.map((component: componentDataType) => {
      return Render(component);
    });
  };

  return (
    <div
      ref={editorRef}
      className={AppStyle.editor}
      onDrop={(e) => handleDrop(e)}
      onDragOver={(e) => {
        e.preventDefault(); /**需要添加才可以触发Drop事件 */
      }}
    >
      {renderComponent()}
    </div>
  );
});

export default Editor;
