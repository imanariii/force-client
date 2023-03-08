import { Header, CardProduct } from "../components";
import React, { useEffect, useState } from "react";
import '../styles/category.css';
import axios from "axios";

const CategoryPage = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  useEffect(()=>{
    if (fetching) {
      axios.get(`http://localhost:5000/api/products?page=${currentPage}`)
        .then(function (res) {
          setProducts([...products, ...res.data.rows])
          setCurrentPage(prevState => prevState + 1)
          setTotalCount(res.data.count)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(()=>setFetching(false))
    }
  }, [fetching])
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return function () {
      document.removeEventListener('scroll', scrollHandler)
    };
  }, [fetching])
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)<100 && products.length < totalCount) {
      setFetching(true)
    }
  }
  return (
    <>
      <Header />
      <main className="category__wrapper">
        <div className="category__body">
            {products && products.map((item, i)=>(
              <CardProduct item={item} i={i} />
            ))}
        </div>
      </main>
      <Header />
    </>
  )
}

export default CategoryPage;