export const RenderChild = (count) => {
  let n = count;
  return (
    <div>
      <p>자식컴포넌트</p>
      <span>{Math.random()}</span>
    </div>
  );
};
