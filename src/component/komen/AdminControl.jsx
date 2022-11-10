import { useDispatch } from "react-redux";
import { deleteComment } from "../../store/features/commentSlice";

import { generateDiceBearAvataaars } from "../../utils/index";

export default function ListComment({ comment }) {
  const dispatch = useDispatch();
  return (
    <>
      <div data-aos="fade-down">
        <div className="d-flex flex-row user-info">
          <img
            className="rounded-circle"
            src={generateDiceBearAvataaars(Math.random())}
            style={{ width: "70px", height: "70px", margin: "10px" }}
            alt="images"
          ></img>
          <div className="d-flex flex-column justify-content-start ml-2">
            <span className="d-block font-weight-bold name fs-3">
              {comment.nama}
            </span>
            <p className="fs-6">
              <small>
                commented on <b>{comment.konten}</b>
              </small>
            </p>
          </div>
        </div>
        <div className="mt-2">
          <p className="comment-text fs-4">{comment.isi}</p>
        </div>
        <div className="action komentar">
          <input
            type="submit"
            value="Delete"
            className="fa-solid btn btn-danger btn-sm"
            onClick={() => dispatch(deleteComment(comment.id))}
          ></input>
        </div>
        <hr />
      </div>
    </>
  );
}
