import React from "react";
import Header from "../../component/header";
import GoToTop from "../../component/GoToTop";

export default function Papeda() {
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
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Fpapeda%2Fpapeda.jpg?alt=media&token=72c94f4e-2443-4daf-9713-26a5b12eee6e"
                  className="d-block rounded"
                  alt="food"
                ></img>
              </div>
              <div className="carousel-item carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Fpapeda%2Fpapeda2.jpg?alt=media&token=be1381d4-5301-4bf3-b1ee-d8d5ed0bc888"
                  className="d-block rounded"
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
            <h2 className="card-title title-family">Papeda</h2>
            <p className="card-text text-family fs-5">
              Papeda merupakan makanan khas yang berasal dari Papua, Indonesia.
              Makananini terbuat dari bahan utama berupa tepung sagu kemudian
              disajikan dengan ikantongkol atau mubara yang dibumbui dengan
              kunyit. Papeda khas karena memiliki tekstur makanan yang lengket
              menyerupai lem.
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
                  <li>200 gram Tepung sagu</li>
                  <li>300 ml Air dingin</li>
                  <li>900 ml Air mendidih</li>
                  <li>1/2 buah Jeruk nipis</li>
                  <li>6 siung Bawang merah</li>
                  <li>4 Siung Bawang putih</li>
                  <li>1 Buah Cabai merah</li>
                  <li>2 Butir Kemiri</li>
                  <li>2 cm Kunyit</li>
                  <li>2 cm Jahe</li>
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
                    Potong ikan jadi 5 baguan, cuci bersih. Lumuri ikan dengan
                    air jeruk nipis dangaram. Biarkan 10 menit, lalu cuci
                    kembali.
                  </li>
                  <li>
                    Panaskan minyak, tumis bumbu halus, salam, serai, daun jeruk
                    dan lengkuas sampai matang dan harum. Masukkan air, masak
                    sampai mendidih.
                  </li>
                  <li>
                    Masukkan ikan, beri garam, gula dan merica. Masak sampai
                    ikan matang, koreksi rasanya. Masukkan tomat dan belimbing
                    wuluh, matikan api.
                  </li>
                  <li>
                    Larutkan tepung sagu dengan air dingin sampai licin dan
                    tidak bergerindil. Masukkanke dalam air mendidih di atas api
                    kecil, aduk cepat sampai kental dan berwarnabening.
                  </li>
                  <li>
                    Siapkan piring cekung, ambil papeda dengan bantuan 2 sendok
                    kayu, sajikandenganikan kuah kuning.
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
