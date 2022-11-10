import { generateDiceBearAvataaars } from "../../utils/index";

export default function ListComment({ comment }) {
  return (
    <>
        <div className="container" >
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            data-aos="fade-down"
          >
            <div className="d-flex align-items-center container">
              <img
                src={generateDiceBearAvataaars(Math.random())}
                alt="randomImage"
                style={{ maxWidth: "60px", maxHeight: "60px" }}
                className="rounded-circle"
              />
              <div className="ms-2">
                <p className="fw-bold mb-1">{comment.nama}</p>
                <p className="text-muted mb-0">
                  <small>
                    commented on <b>{comment.konten}</b>
                  </small>
                </p>
                <div className="mt-2">
                  <p className="comment-text fs-4">{comment.isi}</p>
                </div>
              </div>
            </div>
          </li>
        </div>
    </>
  );
}
