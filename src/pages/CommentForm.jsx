import FormComment from "../component/komen/FormComment";
import Header from "../component/header";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <>
      <body>
        <Header />
        <div className="margin-all-ctrl container">
          <div>
            <center>
              <Link to="/comment">
                <button type="button" className="btn btn-info float-start mb-2">
                  List Komentar
                </button>
              </Link>
              <h2 className="form-title mb-5 pb-4">Tambah Komentar</h2>
            </center>
          </div>
          <FormComment />
        </div>
      </body>
    </>
  );
}
