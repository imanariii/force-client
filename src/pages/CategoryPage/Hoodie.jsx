import { Header, CardProduct, NavigationButtonsCategory } from "../../components";
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
    axios.get(`${state.address}/products?page=${page}`)
      .then(function (res) {
        setProducts(res.data.rows)
        setTotalCountPages( Math.round(res.data.count/2))
      })
      .catch(err => {
        console.log(err)
      })
  }, [page, state])

  // Динамическая подгрузка
//   useEffect(()=>{
//     if (fetching) {
//     axios.get(`http://localhost:5000/api/products?page=${page}`)
//       .then(function (res) {
//         setProducts([...products, ...res.data.rows])
//         setTotalCount(res.data.count)
//         setPage(prevState => prevState + 1)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//     .finally(()=>setFetching(false))
//     }
// }, [fetching])
//   useEffect(() => {
//     document.addEventListener('scroll', scrollHandler)
//
//     return function () {
//       document.removeEventListener('scroll', scrollHandler)
//     };
//   }, [fetching])
//   const scrollHandler = (e) => {
//     if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)<100 && products.length < totalCount) {
//       setFetching(true)
//     }
//   }
  return (
    <>
      <Header />
      <main className={`category__wrapper ${state.theme}`}>
        <NavigationButtonsCategory value={'hoodie'} />
        <Pagination count={totalCountPages} page={page} variant="text" color="primary" onChange={handleChangePage} style={{background: state.theme === 'dark' ? '#343434' : 'white'}} />

        <div className="category__body">
          {products && products.map((item, i)=>(
            <CardProduct item={item} i={i} key={i} />
          ))}
        </div>
      </main>
      <Header />
    </>
  )
}

export default Hoodie;