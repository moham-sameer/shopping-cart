import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CardData from "./CardData";
import { ADD } from "../Redux/Actions/actions";
import './Style.css'
const Cards = () => {
  const [data, setData] = useState(CardData);
  console.log(data);
  const dispatch = useDispatch();
  const send = (e)=>{
  //  console.log(e)
   dispatch(ADD(e))
  }
  return (
    <div className="container mt-3">
      <h2 className="text-center">Order Now</h2>
      <div className="row d-flex justify-content-center align-items-center " >
        {data.map((element, id) => {
          return (
            <div key={data.id} className="card mx-2 mt-4 card_style" style={{ width: "18rem",border:"none" }}>
              <img src={element.imgdata} className="mt-3" style={{height:"17rem"}} alt="..." />
              <div className="card-body">
                <h5 className="card-title"> {element.rname} </h5>
                <p className="card-text">
                  Price : ₹{element.price}
                </p>
                <div className="button_div d-flex justify-content-center">
                <a href="#" className="btn btn-primary col-lg-12" onClick={()=> send(element)}>

                   Add to Cart
                </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
