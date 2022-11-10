import Header from "../component/header";
import AdminProcces from "../component/komen/AdminProcess";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <body>
        <Header />
        <div className="content-form container" id="article">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="card">
                <div className="card-body text-center">
                  <h4 className="card-title">List Komen</h4>
                  <Link to="/comment">
                    <button
                      type="button"
                      className="btn btn-info float-start mb-2"
                    >
                      List Komentar
                    </button>
                  </Link>
                </div>
                <div className="comment-widgets">
                    <AdminProcces />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      ;
    </>
  );
}
