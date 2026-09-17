import { memo } from "react";

const Child = memo(({handleClick}) => {
  console.log("called from child components");
  return <div>
    Child 
  </div>;
});

export default Child;
