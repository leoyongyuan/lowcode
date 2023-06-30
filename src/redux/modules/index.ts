import { createSlice } from "@reduxjs/toolkit";
// import componentDataList from "../../../custom-component/compnent-data";
import { componentDataType } from "../../custom-component/type/index";

const componentDataSlice = createSlice({
  name: "componentData",
  initialState: {
    curComponent: {} as componentDataType,
    editorComponent: [] as Array<componentDataType>,
  },

  reducers: {
    addComponent(state, action) {
      const component = action.payload;
      const index = component.id;
      if (index === undefined) {
        state.editorComponent.splice(index, 0, component);
      } else {
        state.editorComponent.push(component);
      }
    },
    setCurComponent(state, action) {
      for (let i = 0; i < state.editorComponent.length; i++) {
        if (state.editorComponent[i].id === action.payload.id) {
          state.curComponent = state.editorComponent[i];
          break;
        }
      }
    },
    updateCurComponentStyle(state, action) {
      const key: string = action.payload[0];
      const value: number | string = action.payload[1];
      for (let i = 0; i < state.editorComponent.length; i++) {
        if (state.editorComponent[i].id === state.curComponent.id) {
          state.editorComponent[i].style[key] = Number(value);
          break;
        }
      }
    },
  },
});

export const { addComponent, setCurComponent, updateCurComponentStyle } = componentDataSlice.actions;
export default componentDataSlice.reducer;
