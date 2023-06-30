type styleType =
  | "width"
  | "height"
  | "borderWidth"
  | "borderColor"
  | "borderRadius"
  | "fontSize"
  | "fontWeight"
  | "lineHeight"
  | "letterSpacing"
  | "color"
  | "backgroundColor";

type AdditionalStyles = {
  [key: string]: string | number | undefined;
};

// Record<styleType, string | number> 表示一个对象类型，其中键的类型为 styleType，值的类型为 string 或 number。
// Partial<Type> 用于将对象类型中的所有属性变为可选属性
type componentStyleType = Partial<Record<styleType, string | number>> & AdditionalStyles;

interface componentEventType {
  click?: (param?: any) => void; // eslint-disable-line
}

interface componentDataType {
  component: string;
  name: string;
  icon: string;
  id?: number;
  style: componentStyleType;
  event: componentEventType;
}

interface commonAttrType {
  animations: string[];
  events: componentEventType;
  groupStyle: componentStyleType;
  isLock: boolean;
  collapseName: string;
  linkage: {
    duration: number;
    data: [
      {
        id: string;
        label: string;
        event: string;
        style: [{ key: string; value: string }];
      }
    ];
  };
}

export type { componentDataType, componentStyleType, componentEventType, commonAttrType };
