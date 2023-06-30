import { createSlice } from "@reduxjs/toolkit";
// import componentDataList from "../../../custom-component/compnent-data";
import { componentDataType } from "../../custom-component/type/index";

const componentDataSlice = createSlice({
  name: "componentData",
  initialState: {
    editorComponent: [] as Array<componentDataType>,
  },

  reducers: {
    addComponent(state, action) {
      const component = action.payload;
      const index = component.id;
      console.log(component, index);
      if (index === undefined) {
        state.editorComponent.splice(index, 0, component);
      } else {
        state.editorComponent.push(component);
      }
      console.log(state.editorComponent);
    },
  },
});

export const { addComponent } = componentDataSlice.actions;
export default componentDataSlice.reducer;
