import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {DLT,ADD,REMOVE} from '../Redux/Actions/actions'
import "./Style.css";

const CardDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const [data, setData] = useState([]);
  const getData = useSelector((state) => state.cartReducer.carts);
  // console.log(getData)
  console.log(data);
  const compare = () => {
    let comparedata = getData.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };
  const History = useNavigate()
  useEffect(() => {
    compare();
  }, [id]);
  // remove one data
  const remove = (e)=>{
    dispatch(REMOVE(e))
  }
// add data for incerement button
  const send = (e)=>{
    // console.log(e)
    dispatch(ADD(e))
   }
  const dlt = (id)=>{
    dispatch(DLT(id))
    History('/')
  }
  return (
    <>
      <div className="container-mt-2">
        <h2 className="header">Item Details Page</h2>
        <section className="container mt-3">
          <div className="itemsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img
                      src={ele.imgdata}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <table class="table">
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {ele.rname}
                          </p>
                          <p>
                            <strong>Price</strong> : ₹ {ele.price}
                          </p>
                          <p>
                            <strong>Dishes</strong> : {ele.address}
                            
                          </p>
                          <p>
                            <strong>Total</strong> : ₹ {ele.price* ele.qnty}
                          </p>
                          <div className="mt-5 d-flex justify-content-between align-items-center" style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                              <span style={{fontSize:24}} onClick={ele.qnty <= 1 ?()=> dlt(ele.id):()=> remove(ele)}>-</span>
                              <span style={{fontSize:21}}>{ele.qnty} </span>
                              <span style={{fontSize:24}} onClick={()=> send(ele)}>+</span>
                          </div>
                        </td>
                      
                        <td>
                          <p>
                            <strong>Rating :</strong> 
                            <span
                              style={{
                                background: "green",
                                borderRadius: "6px",
                                color: "white",
                                padding: "2px 5px",
                              }}
                            >
                              {ele.rating}★
                            </span>
                          </p>
                          <p>
                            
                            <strong>Order Review :</strong> {ele.somedata}
                          </p>
                          <p>
                            
                            <strong>Remove :</strong>
                            <span style={{ color: "red", fontSize: ".9rem" }}>
                              
                              <i className="fas fa-trash" onClick={()=>dlt(ele.id)} ></i>{" "}
                            </span>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardDetails;
