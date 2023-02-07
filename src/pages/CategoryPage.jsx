import { Header } from "../components";
import React, { useContext } from "react";
import { Api } from "../context/Api";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../styles/category.css';

const CategoryPage = () => {
  const state = useContext(Api)
  console.log(state)
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Header />
      <main className="category__wrapper">
        <h3>Добро пожаловать {state.user.email}</h3>
        <div className="category__body">
          <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={10} page={page} color="primary" onChange={handleChange} />
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0.5}
          >
            {state.products.rows && state.products.rows.map(item=>(
              <div className="card__wrapper">
                <div className="card__body">
                  <img src={'http://localhost:5000/' + item.img} alt="" />
                  <h3>{item.name}</h3>
                </div>
              </div>
            ))}
          </Stack>

        </div>
      </main>
      <Header />
    </>
  )
}

export default CategoryPage;