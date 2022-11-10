import { useEffect } from "react";
import ListComment from "./ListComment";
import { useSelector, useDispatch } from "react-redux";
import { fetchComment } from "../../store/features/commentSlice";

export default function CommentProcess() {
  const dispatch = useDispatch();
  const listOfKomentar = useSelector((state) => state.komentar.data);
  const componentStatus = useSelector(
    (state) => state.komentar.componentStatus
  );

  useEffect(() => {
    dispatch(fetchComment());
  }, [componentStatus, dispatch]);

  return (
    <>
      <div>
        <ul>
          {listOfKomentar.map((comment) => (
            <ListComment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    </>
  );
}
