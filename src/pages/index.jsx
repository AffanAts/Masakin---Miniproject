import React from "react";
import Header from "../component/header";
import GoToTop from "../component/GoToTop";

import "../style/style.css";

export default function Index() {
  return (
    <>
      <body className="body-home">
        <Header />
        <div className="card-body cardbt">
          <div className="container row row-cols-3">
            <div class="col-sm-6">
              <div class=" bg-transparent res-home justify-text">
                <div class="card-body">
                  <h5 class="card-title mb-3 fs-4">Butuh Resep Makanan?</h5>
                  <p class="card-text">
                    Membutuhkan inspirasi praktis dan ingin mencoba hal yang
                    baru dalam resep menu untuk masakan? Tentu saja Masakin
                    jawabannya!. Disini pastinya kami menyediakan makanan yang
                    lezat dan mudah untuk dibuatnya serta bahan makanannya dapat
                    dicari dalam lingkungan sekitar masyarakat. Memasak menjadi
                    mudah, tidak perlu bingung lagi untuk menentukan resep
                    masakan rumahan dengan modal yang murah dan praktis dibuat
                    nya. Rasanya juga pasti juara!
                  </p>
                  <a href="/recipe" class="btn btn-primary">
                    Lihat Resep!
                  </a>
                </div>
              </div>
            </div>
            {/* <h2 className="col title-family fs-1">Butuh Resep Makanan?</h2>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col justify-text text-family">
              Membutuhkan inspirasi praktis dan ingin mencoba hal yang baru
              dalam resep menu untuk masakan? Tentu saja Masakin jawabannya!.
              Disini pastinya kami menyediakan makanan yang lezat dan mudah
              untuk dibuatnya serta bahan makanannya dapat dicari dalam
              lingkungan sekitar masyarakat. Memasak menjadi mudah, tidak perlu
              bingung lagi untuk menentukan resep masakan rumahan dengan modal
              yang murah dan praktis dibuat nya. Rasanya juga pasti juara!
            </div> */}
          </div>
        </div>
        <GoToTop />
      </body>
    </>
  );
}
