import { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../store/features/commentSlice";

export default function FormComment() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handlerOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nama = formData.get("nama");
    const konten = formData.get("konten");
    const isi = formData.get("isi");
    let newToDoList = !input
      ? alert("Title can't be empty")
      : dispatch(createComment({ nama, konten, isi }));
      e.target.reset()

    return newToDoList;
  };

  return (
    <div className="content container">
      <form onSubmit={handleOnSubmit} name="myForm">
        <div className="form-input">
          <div className="mb-3">
            <label className="form-label">Nama :</label>
            <input
              type="text"
              placeholder="Masukkan nama"
              className="form-control me-4 input-text"
              onChange={handlerOnChange}
              name="nama"
            ></input>
          </div>
          <label className="form-label">Makanan yang dibuat :</label>
          <select
            id="konten"
            className="form-select"
            name="konten"
            aria-label="Default select example"
          >
            <option value="Rawon">Rawon</option>
            <option value="Kerak Telor">Kerak Telor</option>
            <option value="Rendang">Rendang</option>
            <option value="Pempek">Pempek</option>
            <option value="Papeda">Papeda</option>
            <option value="Amparan Tatak">Amparan Tatak</option>
          </select>
          <label className="form-label">Komentar :</label>
          <div className="form-floating">
            <textarea
              className="form-control me-4 input-text"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              onChange={handlerOnChange}
              name="isi"
            ></textarea>
            <label for="floatingTextarea2">
              Bagaimana pengalaman kamu membuatnya :
            </label>
          </div>
        </div>
        <div className="button-design mt-3">
          <input type="submit" className="btn btn-success btn-sm me-3" />
        </div>
      </form>
    </div>
  );
}
