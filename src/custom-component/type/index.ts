interface componentStyleType {
  width?: number;
  height?: number;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: string;
  letterSpacing?: number;
  textAlign?: string;
  color?: string;
  backgroundColor?: string;
}

interface componentEventType {
  click?: string;
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
