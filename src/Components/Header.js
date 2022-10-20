import React,{useState,useEffect} from "react";
import Badge from "@mui/material/Badge";
import "./Style.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {DLT} from '../Redux/Actions/actions'
// import { Table } from "@mui/material";
const Header = () => {
const dispatch = useDispatch()
const [price,setPrice] = useState()
const getData = useSelector((state)=>state.cartReducer.carts)
 console.log(getData)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dlt = (id) =>{
    dispatch(DLT(id))
  }
  const total = ()=>{
    let price = 0;
    getData.map((ele,k)=>{
     price = ele.price * ele.qnty + price; 
    });
    setPrice(price);
  }
  useEffect(()=>{
    total()
  },[total])
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark"
        style={{ height: "80px" }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light text-decoration-none" to="/">
            Add to Cart
          </NavLink>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div  id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/cart"
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <Badge badgeContent={getData.length} color="primary" 
           id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
          >
             
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 24, cursor: "pointer" }}
            ></i>
          </Badge>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
        {
          getData.length ?
          <div className="card_details" style={{width:"25rem", padding:"0 2rem",height:"12rem"}}>
           <table>
           <thead>

            <tr>
              <th>Photo</th>
              <th style={{padding:"0 4rem"}} >Restaurant</th>
            </tr>
            
           </thead>
           <tbody>
            
            {
              getData.map((e)=>{
                return (
                  <>
                    <tr>
                      <td>
                      <NavLink to={`/cart/${e.id}`} onClick={handleClose}>

                        <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt=""/>
                      </NavLink>
                      </td>
                      <td style={{padding:"0 4rem"}}>
                        <p> {e.rname} </p>
                        <p>Price: ₹ {e.price} </p>
                        <p>Quantity: {e.qnty} </p>
                        <p style={{color:"red",cursor:"pointer",fontSize:17}}>
                          <i className="fas fa-trash smalltrash" onClick={()=>dlt(e.id)}></i>
                        </p>
                      </td>
                      <td style={{color:"red",cursor:"pointer",fontSize:17}}>
                      
                          <i className="fas fa-trash largetrash" onClick={()=>dlt(e.id)}></i>
                      

                      </td>
                    </tr>
                  </>
                )
              })
            }
              <p>Total :₹ {price}</p>
            
           </tbody>
           </table>
          </div>:   <div className="card_details d-flex justify-content-center align-items-center" style={{width:"24rem",padding:10,position:"relative"}}>
        <i className="fas fa-close smallclose" onClick={handleClose} style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}} ></i>
         <p>Your Cart Is Empty</p>
         <img className="emptycart_img" style={{width:"8rem"}} src='https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif' alt=''/>
        </div>
        }
      
        </Menu>
      </nav>
    </>
  );
};

export default Header;
