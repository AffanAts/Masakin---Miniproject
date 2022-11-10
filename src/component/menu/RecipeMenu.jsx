/* eslint-disable array-callback-return */
import React from "react";
import listRecipe from "./listRecipe";
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuRecipe = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="input-group">
        <input
          className="form-control me-2 rounded margin-side bg-light bg-opacity-75"
          type="search"
          placeholder="Cari Resepmu disini..."
          aria-label="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>

      {listRecipe
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, food) => {
          return (
            <div className="user container" key={food}>
              <div
                className="card mb-3 margin-bottom-ctrl bg-light bg-opacity-75"
                data-aos="fade-down"
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    {
                      <div className="size-ctrl img-fluid container-fluid">
                        <img src={val.image} className="logo" alt="..." />
                      </div>
                    }
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="title-family container-fluid">
                        {val.title}
                      </h5>
                      <p className="text-family container-fluid">
                        {val.deskripsi}
                      </p>
                      {
                        <div
                          className="size-ctrl container-fluid"
                          style={{ marginTop: "40px" }}
                        >
                          <Link to={val.to}>
                            <button
                              type="button"
                              className="btn btn-primary mt-3 opacity-75 btn-bottom"
                            >
                              Lihat Resep
                            </button>
                          </Link>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default MenuRecipe;
