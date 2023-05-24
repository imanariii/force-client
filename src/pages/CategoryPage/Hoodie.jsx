import {Header, CardProduct, NavigationButtonsCategory, Footer} from "../../components";
import React, { useContext, useEffect, useState } from "react";
import '../../styles/category.css'
import axios from "axios";
import { Pagination } from "@mui/material";
import { Api } from "../../context/Api";

const Hoodie = () => {
  const state = useContext(Api)
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  // const [fetching, setFetching] = useState(true)
  const [totalCountPages, setTotalCountPages] = useState(0)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(()=>{
    axios.get(`${state.address}/products?page=${page}&categoryId=2`)
      .then(function (res) {
        setProducts(res.data.rows)
        setTotalCountPages( Math.round(res.data.count/2))
      })
      .catch(err => {
        console.log(err)
      })
  }, [page, state])

  return (
    <>
      <Header />
      <main className={`category__wrapper ${state.theme}`}>
        <NavigationButtonsCategory value={'hoodie'} />
        <Pagination count={totalCountPages} page={page} variant="text" color="primary" onChange={handleChangePage} style={{background: state.theme === 'dark' ? '#343434' : 'white',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px'
        }}/>

        <div className="category__body">
          {products && products.map((item, i)=>(
            <CardProduct item={item} i={i} key={i} />
          ))}
        </div>
          <Pagination count={totalCountPages} page={page} variant="text" color="primary" onChange={handleChangePage} style={{background: state.theme === 'dark' ? '#343434' : 'white',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px'
          }}/>
      </main>
      <Footer />
    </>
  )
}

export default Hoodie;