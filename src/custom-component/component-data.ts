import { componentDataType, commonAttrType } from "./type/index";
const commonAttr: commonAttrType = {
  animations: [],
  events: {},
  groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
  isLock: false, // 是否锁定组件
  collapseName: "", // 编辑组件时记录当前使用的是哪个折叠面板，再次回来时恢复上次打开的折叠面板，优化用户体验
  linkage: {
    duration: 0, // 过渡持续时间
    data: [
      {
        id: "", // 联动的组件 id
        label: "", // 联动的组件名称
        event: "", // 监听事件
        style: [{ key: "", value: "" }], // 监听的事件触发时，需要改变的属性
      },
    ],
  },
};

const list: componentDataType[] = [
  {
    component: "_Button",
    name: "按钮",
    icon: "icon-button",
    style: {
      width: 100,
      height: 34,
      borderWidth: 1,
      borderColor: "",
      borderRadius: "",
      fontSize: "",
      fontWeight: 400,
      lineHeight: "",
      letterSpacing: 0,
      color: "",
      backgroundColor: "",
    },
    event: {},
  },
  {
    component: "_Button",
    name: "按钮",
    icon: "icon-button",
    style: {
      width: 100,
      height: 34,
      borderWidth: 1,
      borderColor: "",
      borderRadius: "",
      fontSize: "",
      fontWeight: 400,
      lineHeight: "",
      letterSpacing: 0,
      color: "",
      backgroundColor: "",
    },
    event: {},
  },
  {
    component: "_Button",
    name: "按钮",
    icon: "icon-button",
    style: {
      width: 100,
      height: 34,
      borderWidth: 1,
      borderColor: "",
      borderRadius: "",
      fontSize: "",
      fontWeight: 400,
      lineHeight: "",
      letterSpacing: 0,
      color: "",
      backgroundColor: "",
    },
    event: {},
  },
];

for (let i = 0; i < list.length; i++) {
  const item = list[i];
  item.style = { ...item.style, ...commonAttr.groupStyle };
  list[i] = { ...item, ...commonAttr };
}

export default list;
