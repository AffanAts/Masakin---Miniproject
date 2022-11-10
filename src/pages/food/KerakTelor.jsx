import React from "react";
import Header from "../../component/header";
import GoToTop from "../../component/GoToTop";

export default function KerakTelor() {
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
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Fkerak%20telor%2FkerakTelor.jpg?alt=media&token=19fd4cc1-86f1-4659-bde1-971a483f2f96"
                  className="d-block rounded"
                  alt="food"
                ></img>
              </div>
              <div className="carousel-item carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Fkerak%20telor%2FkerakTelor2.jpg?alt=media&token=7d1e44d5-9ca1-4273-8cc0-fdc80a70a1cf"
                  className="d-block rounded"
                  alt="food"
                ></img>
              </div>
              <div className="carousel-item carousel-size-ctrl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/miniproject-masakin.appspot.com/o/assets%2Ffood%2Fkerak%20telor%2FkerakTelor3.jpg?alt=media&token=2064d0e7-0a00-4238-abe2-8c9c03d2adf4"
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
            <h2 className="card-title title-family">Kerak Telor</h2>
            <p className="card-text text-family fs-5">
              Kerak telor merupakan masakan khas yang berasal dari Betawi,
              Jakarta. Salah satu kekhasan dari makanan tersebut yaitu terbuat
              dari telur ayam atau bebek, kemudiandimasak dengan ketan putih dan
              ebi sangrai. Cara pembuatan nya juga sangat unikyaitu masakan
              tersebut dibalik kearah arang.
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
                  <li>2 butir telur ayam/bebek</li>
                  <li>1 sdm bawang putih halus</li>
                  <li>1 sdm bawang merah halus</li>
                  <li>2-3 sdm nasi putih</li>
                  <li>1 sdt garam, kaldu bubuk, dan lada</li>
                  <li>1/2 buah kelapa parut, sangrai</li>
                  <li>2 sdm udang rebon, goreng</li>
                  <li>1/2 sdt kaldu jamur</li>
                  <li>1 sdm gula putih</li>
                  <li>1 sdt cabai bubuk</li>
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
                    Sangrai kelapa parut hingga kering dan warnanya kecoklatan.
                  </li>
                  <li>
                    Setelah itu, haluskan bersama udang rebon, garam, kaldu,
                    gula, dan cabai bubuk.
                  </li>
                  <li>
                    Campurkan telur, garam, lada, kaldu, bawang halus, bubuk
                    kelapa, dan nasi putih. Lalu, kocok hingga merata.
                  </li>
                  <li>
                    Panaskan teflon, lalu tuang semua bahan yang telah dicampur
                    dan masak hinggabawahnya berkerak. Balik adonan, lalu
                    diamkan lagi hingga berkerak.
                  </li>
                  <li>
                    Angkat kerak telor dari teflon, lalu taburkan kelapa rebon
                    dan bawang gorengsecukupnya.
                  </li>
                  <li>Sajikan kerak telor selagi hangat.</li>
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
