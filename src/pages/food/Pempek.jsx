import React from "react";
import Header from "../../component/header";
import GoToTop from "../../component/GoToTop";

export default function Pempek() {
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
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Fpempek%2Fpempek.jpg?alt=media&token=166a6b21-da8f-42bf-b56d-21d57c2776e8"
                  className="d-block rounded"
                  alt="food"
                ></img>
              </div>
              <div className="carousel-item carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Fpempek%2Fpempek2.jpg?alt=media&token=40d4eaf3-2e07-4638-86b8-6614f086ba02"
                  className="d-block rounded"
                  alt="food"
                ></img>
              </div>
              <div className="carousel-item carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Fpempek%2Fpempek3.jpg?alt=media&token=4d7eeab4-a699-48a8-bef6-c0099d5adabf"
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
            <h2 className="card-title title-family">Pempek</h2>
            <p className="card-text text-family fs-5">
              Pempek merupakan makanan khas yang berasal dari Palembang,
              Sumatera Selatan. Masakan ini khas karena terbuat dari ikan
              tenggiri yang digiling lembut lalu dicampur tepung kanji atau
              tepung sagu. Tentu saja makanan ini juga rasanya sangat enak dan
              banyak diminati oleh khalayak banyak
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
                  <li>1 kg daging ikan tenggiri yang telah digiling halus</li>
                  <li>1 kg tepung sagu</li>
                  <li>250 ml air es</li>
                  <li>penyedap rasa secukupnya</li>
                  <li>garam secukupnya</li>
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
                    Masukkan ikan, garam, penyedap rasa dan air es, lalu
                    campurkan hingga merata.
                  </li>
                  <li>
                    Tambahkan tepung sedikit demi sedikit, aduk hingga adonan
                    menjadi kalis.
                  </li>
                  <li>
                    Bentuk adonan sesuai seleramu.Rebus adonan pempek yang telah
                    dibentuk keair mendidih.
                  </li>
                  <li>
                    Jika adonan telah mengapung, itu artinya pempek sudah
                    matang. Tiriskan.
                  </li>
                  <li>
                    Kamu bisa langsung menyajikannya atau bisa digoreng dulu.
                  </li>
                  <li>
                    Terakhir jangan lupa gunakan cuka supaya rasanya lebih
                    lezat.
                  </li>
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
