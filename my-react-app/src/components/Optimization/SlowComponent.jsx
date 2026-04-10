// (Memoized Component)

import { memo } from "react";

const SlowComponent = memo(({ name }) => {
  let startTime = performance.now();
  console.log("Re-rendered !!")
  while (performance.now() - startTime < 100) {}

  return <div> Heavy Component: {name}</div>;
});

export default SlowComponent;
