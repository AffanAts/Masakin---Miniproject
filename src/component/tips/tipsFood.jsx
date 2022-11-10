import React from "react";
import listTips from "./listTips";

const tipsFoods = (props) => {
  return (
    <>
    <div className="w-75 container">
      
      <h1 className="text-center title-family fs-1 margin-top-header">
        8 tips for healthy eating
      </h1>
      <p
        className="card-text text-family"
        style={{ textAlign: "justify", marginBottom:"-80px", marginTop:"30px" }}
      >
        Mau pola hidup sehat? Yuk mari disimak baik-baik tipsnya. Kalian tahu
        tidak salah satu kunci dari diet sehat adalah makan makanan sejumlah
        kalori yang tepat lho! Karena jika anda makan atau minum lebih dari yang
        dibutuhkan akan disimpan sebagai lemak, sebalik nya jika makan atau
        minum terlalu sedikit makan akan kehilangan berat badan atau bisa jadi
        kehilangan keseimbangan. So, Jadi buat kalian jika ingin diet harus
        seimbang semua nutrisi yang ada bagi tubuh kita.
      </p>
      </div>
      <div className="margin-top-header">
        {listTips.map((listTips) => (
          <center>
            <div className="w-75 bg-transparent mt-5" key={listTips.idTips}>
              <div className="card-body"></div>
            </div>
            <div
              className=" w-75 bg-transparent"
              data-aos="fade-down"
              style={{ marginTop: "20px" }}
            >
              <div className="card-body">
                <div className="size-ctrl">
                  <h5
                    className="card-title title-family"
                    style={{ fontSize: "30px", textAlign: "left" }}
                  >
                    {listTips.Judul}
                  </h5>
                  <img
                    src={listTips.image}
                    alt=""
                    style={{
                      maxWidth: "1000px",
                      maxHeight: "400px",
                      marginTop: "40px",
                    }}
                  />
                  <p
                    className="card-text text-family"
                    style={{
                      textAlign: "justify",
                      fontSize: "18px",
                      marginTop: "17px",
                    }}
                  >
                    {listTips.tips}
                  </p>
                </div>
              </div>
            </div>
          </center>
        ))}
      </div>
    </>
  );
};

export default tipsFoods;
