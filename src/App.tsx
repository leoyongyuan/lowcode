import React, { memo } from "react";
import "./App.css";
// function MyComponent<T>(props: T) {
//   return (
//   	<div></div>
//   );
// }

interface IProps {}

const App: React.FC<IProps> = memo((props) => {
  console.log(props);
  return <div>App</div>;
});

export default App;
