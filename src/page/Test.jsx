import React from "react";
import { Header, MainPrev, Container, MainCategorias } from '../components';

function Test ({cart}) {
    return (
      <>
        <Header cart={cart} />
        <MainPrev />
        <Container />
          <MainCategorias />
      </>
    )
}

export default Test;