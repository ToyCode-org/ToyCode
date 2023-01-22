import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/slice/commentSlice";
import { LoadingSpinner } from "../../util/LoadingSpinner";

export const InfiListBox = () => {
  const dispatch = useDispatch();
  const { comment, isLoading } = useSelector((state) => state.commentSlice);

  const [page, setPage] = useState(1);
  console.log(comment);
  useEffect(() => {
    dispatch(getComments(page));
  }, [page]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        comment?.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <span>ID: {item?.id}</span>
              </div>
              <div>
                <div>{item?.title}</div>
                <div>{item?.content}</div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};
