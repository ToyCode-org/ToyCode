import { useState } from "react";
import { RenderChild } from "../components/render/RenderChild";

export const RenderTest = () => {
  const [count, setCount] = useState(0);
  setInterval(() => {
    setCount(count + 1);
  }, 3000);
  console.log(count);

  return (
    <div>
      <p>렌더링 테스트</p>
      <RenderChild count={count} />
    </div>
  );
};
