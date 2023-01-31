import React from "react";

const Menu = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <div key={id} className="col rounded p-3 shadow-sm ">
            <img
              src={img}
              alt={title}
              className="border-3 border-warning rounded-3 img-fluid border"
              style={{ height: 300, width: 520 }}
            />
            <div className="d-flex justify-content-between mt-2">
              <h5 className="text-uppercase fw-bold">{title}</h5>
              <p className="bg-info fw-bold rounded-3 py-2 px-3  text-white">
                ${price}
              </p>
            </div>
            <div>
              <p className="fs-6 text-capitalize text-secondary text-start">
                {desc}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Menu;
