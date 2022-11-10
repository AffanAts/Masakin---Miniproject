import React from "react";
import Header from "../../component/header";
import GoToTop from "../../component/GoToTop";

export default function Rawon() {
  return (
    <>
      <Header />
      <body >
        <center className="body">
          <div
            id="carouselExampleControlsNoTouching"
            className="carousel slide"
            data-bs-touch="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Frawon%2Frawon.jpg?alt=media&token=676e5c99-1652-41f2-8412-c5b284e5881d"
                  className="d-block rounded"
                  alt="food"
                ></img>
              </div>
              <div className="carousel-item carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Frawon%2Frawon2.jpg?alt=media&token=3974386d-9fca-4eb9-85a2-8b67a53ae59c"
                  className="d-block rounded"
                  alt="food"
                ></img>
              </div>
              <div className="carousel-item carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Frawon%2Frawon3.jpg?alt=media&token=2ca9bab0-b411-4a26-94cc-51682de5eea8"
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
            <h2 className="card-title title-family">Rawon</h2>
            <p className="card-text text-family fs-5">
              Rawon merupakan makanan khas dari Jawa Timur, Indonesia. Rawon
              daging sapi khasJawa Timur ini sendiri salah satu masakan yang
              paling tua di Indonesia dan benar-benarotentik. Yang membuat khas
              dari makanan ini tampilan kuahnya yang berwarnahitamgelap serta
              memiliki rasa yang berbeda dibandingkan masakan lainnya.
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
                  <li>500 gram dengkul sapi, belah dua</li>
                  <li>3 lembar daun jeruk purut segar</li>
                  <li>1 batang serai, lalu memarkan</li>
                  <li>1 sdm air asam jawa</li>
                  <li>2 batang daun bawang, iris seukuran 1 cm</li>
                  <li>1 sdm Royco Kaldu Sapi</li>
                  <li>1 sdm garam</li>
                  <li>3 liter air</li>
                  <li>5 sdm minyak goreng</li>
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
                    Rebus daging dan dengkul sapi hingga setengah lunak. Potong
                    daging sesuai selera. Sisihkan.
                  </li>
                  <li>
                    Masukkan Royco Kaldu Sapi dan garam ke dalam air rebusan
                    daging.
                  </li>
                  <li>
                    Tumis bumbu halus, lengkuas, daun jeruk, dan serai hingga
                    harumdan matang
                  </li>
                  <li>
                    Masukkan potongan daging ke dalam tumisan, masak hingga
                    bumbu meresap
                  </li>
                  <li>
                    Masukkan tumisan daging ke dalam kuah kaldu. Masak dengan
                    api kecil hinggadaging empuk.
                  </li>
                  <li>Sajikan hangat beserta pelengkap.</li>
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
