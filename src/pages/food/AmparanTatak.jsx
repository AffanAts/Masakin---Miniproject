/* eslint-disable array-callback-return */
import React from "react";
import Header from "../../component/header";
import GoToTop from "../../component/GoToTop";

export default function AmparanTatak() {
  return (
    <>
      <Header />
      <body className="margin-top-header">
        <center>
          <div
            id="carouselExampleControlsNoTouching"
            className="carousel slide"
            data-bs-touch="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Famparan%20tatak%2FAmparan.jpg?alt=media&token=74ffeabe-e5e5-4f17-8513-0eb83a880d3b"
                  className="d-block rounded"
                  alt="food"
                ></img>
              </div>
              <div className="carousel-item carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Famparan%20tatak%2FAmparan2.jpg?alt=media&token=a39c189a-1973-45df-a87c-b58bc21003fa"
                  className="d-block rounded"
                  alt="food"
                ></img>
              </div>
              <div className="carousel-item carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Famparan%20tatak%2FAmparan3.jpg?alt=media&token=a0acb57d-b50b-48ad-83cc-f698cf1d9d95"
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
            <h2 className="card-title title-family">Amparan Tatak</h2>
            <p className="card-text text-family fs-5">
              Amparan tatak merupakan makanan khas yang berasal dari Banjar,
              Indonesia. Makananini salah satu kategori kue basah yang khas dari
              suku banjar, kue tersebut banyakdigandrungi pada saat bulan
              Ramadhan karena memiliki rasa yang manis dan tentusajalezat.
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
                  <li>225 g tepung beras</li>
                  <li>25 g tepung kanji</li>
                  <li>200 g gula pasir</li>
                  <li>1/2 sdt garam</li>
                  <li>1 L santan sedang</li>
                  <li>500 ml santan kental</li>
                  <li>100 g tepung beras</li>
                  <li>30 g tepung kanji</li>
                  <li>1/2 sdt garam</li>
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
                    Alasi loyang ukuran 20x20x5 cm dengan selembar daun
                    pisang/plastik tahanpanas. Olesi permukaannya dengan minyak.
                    Sisihkan.
                  </li>
                  <li>
                    Dalam panci, taruh tepung beras, tepung kanji, gula, dan
                    garam. Tuangi santan, adukdengan whisk hingga menjadi adonan
                    yang licin dan rata. Masak di atas api sedang sambil diaduk
                    hingga kental, angkat
                  </li>
                  <li>
                    Tuang adonan ke dalam loyang, susun irisan pisang di
                    atasnya. Sisihkan hinggaadonan dingin.
                  </li>
                  <li>
                    Masukkan santan, tepung beras, tepung kanji, dan garam
                    dalampanci. Jerangdi atasapi sedang sambil diaduk hingga
                    agak kental, angkat.
                  </li>
                  <li>
                    Tuang lapisan santan ke dalam loyang hingga menutupi adonan
                    berlapis pisang.
                  </li>
                  <li>
                    . Masukkan loyang ke dalam dandang, kukus dengan api sedang
                    hingga lapisanmatang (30 menit), angkat, dinginkan.
                    Keluarkan kue dari loyang, potong sesuai selera.
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
