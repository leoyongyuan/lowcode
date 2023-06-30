import { configureStore } from "@reduxjs/toolkit";
import componentDataReduer from "../modules/index";
const store = configureStore({
  reducer: {
    componentData: componentDataReduer,
  },
});

export default store;
