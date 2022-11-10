import React from "react";
import Header from "../../component/header";
import GoToTop from "../../component/GoToTop";

export default function Rendang() {
  return (
    <>
      <Header />
      <body>
        <center className="body">
          <div
            id="carouselExampleControlsNoTouching"
            className="carousel slide"
            data-bs-touch="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Frendang%2Frendang.jpg?alt=media&token=e34a90b2-21d0-4b46-a55c-df668c5be42b"
                  className="d-block rounded"
                  alt="food"
                ></img>
              </div>
              <div className="carousel-item carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Frendang%2Frendang2.jpg?alt=media&token=b5e6f752-6a5e-40c9-9100-6e4a68dc4ac9"
                  className="d-block rounded"
                  alt="food"
                ></img>
              </div>
              <div className="carousel-item carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Frendang%2Frendang3.jpg?alt=media&token=215980ac-a532-49af-965e-5bf2b5a9a092"
                  className="d-block "
                  alt="food"
                ></img>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </center>
        {/*Deskripsi*/}
        <div className="margin-food bg-transparent mt-4" data-aos="fade-down">
          <div className="card-body">
            <h2 className="card-title title-family">Rendang</h2>
            <p className="card-text text-family fs-5">
              Rendang merupakan makanan khas yang berasal dari Padang, Sumatera.
              Makanan tersebut terpilih sebagai makanan nomor 1 di dunia oleh
              CNN & Unesco karena memiliki rasa yang sangat lezat. Selain itu
              rendang memiliki kekhasan nya tersendiri yaitumemiliki banyak
              rempah-rempah didalam nya, sehingga membuat masakan ini sangat
              super wangi dan enak rasanya.
            </p>
          </div>
        </div>
        {/*Bahan*/}
        <div className="row margin-food" data-aos="fade-down">
          <div className="col-sm-5">
            <div className="mt-5 pt-4 mb-5">
              <div className="card-body">
                <h2 className="card-title title-family">Bahan-Bahan</h2>
                <ol className="card-text text-family fs-5">
                  <li>600g daging sapi bagian sengkel, potong kotak 5 cm</li>
                  <li>3 lembar daun jeruk</li>
                  <li>2 batang serai, memarkan</li>
                  <li>2 lembar daun salam</li>
                  <li>1 lembar daun kunyit</li>
                  <li>½ sdt pala bubuk</li>
                  <li>2.5L air</li>
                  <li>130ml santan instan</li>
                  <li>1sdm Royco Kaldu Sapi</li>
                  <li>½ sdm garam</li>
                  <li>5sdm minyak, untuk menumis</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mt-5 pt-4 mb-5">
              <div className="card-body">
                <h2 className="card-title title-family">Cara Pembuatan</h2>
                <ol className="card-text text-family fs-5">
                  <li>
                    Panaskan minyak, tumis bumbu halus bersama daun jeruk,
                    serai, daun salam, daunkunyit, dan pala hingga harum.
                  </li>
                  <li>
                    Masukkan daging, aduk rata. Tuang air, masak hingga mendidih
                  </li>
                  <li>
                    Tambahkan santan, Royco Kaldu Sapi, dan garam. Masak sambil
                    diaduk hinggaairnya terserap habis dan minyaknya keluar.
                  </li>
                  <li>Angkat. Dan makanan siap disajikan</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <GoToTop />
      </body>
    </>
  );
}
