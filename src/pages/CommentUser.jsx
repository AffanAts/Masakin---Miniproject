import Header from "../component/header";
import CommentProcess from "../component/komen/CommentProcess";
import { Link } from "react-router-dom";
import GoToTop from "../component/GoToTop";

export default function Comment() {
  return (
    <>
      <GoToTop />
      <Header />
      <div className="container">
        <ul className="list-group list-group-light container-fluid margin-top-header">
          <center>
            <li>
              <h2>List Komentar</h2>
            </li>
          </center>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/form">
              <button
                type="submit"
                className="btn btn-success btn-rounded"
                style={{ marginLeft: "45px" }}
              >
                Tambah Komentar
              </button>
            </Link>
          </li>

          <div>
            <CommentProcess />
          </div>
        </ul>
      </div>
    </>
  );
}
