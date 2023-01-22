import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/slice/commentSlice";

export const InfiListBox = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentSlice);

  const [page, setPage] = useState(1);
  console.log(comments);
  useEffect(() => {
    dispatch(getComments(page));
  }, [page]);

  return (
    <>
      {/* {comments?.map((item, index) => {
        return (
          <div>
            <div>
              <span>ID: {item?.id}</span>
            </div>
            <div>
              <div>{item?.title}</div>
              <div>{item?.content}</div>
            </div>
          </div>
        );
      })} */}
    </>
  );
};
