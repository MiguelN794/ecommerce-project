import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import './App.css';

const MainContainer = styled.main`
  max-width: 1110px;
  margin: 90px auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 125px;
  align-items: center;
`;

const ProductInfo = styled.div`
  max-width: 445px;
`;

const CompanyName = styled.span`
  color: hsl(26, 100%, 55%);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
  display: block;
`;

const ProductTitle = styled.h1`
  color: hsl(220, 13%, 13%);
  font-size: 2.75rem;
  line-height: 1.1;
  margin-bottom: 2rem;
`;

const ProductDescription = styled.p`
  color: hsl(219, 9%, 45%);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const products = [
  { src: './assets/images/products/product1.jpg', alt: 'Product 1' },
  { src: './assets/images/products/product2.jpg', alt: 'Product 2' },
  { src: './assets/images/products/product3.jpg', alt: 'Product 3' },
];

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <ProductGallery />
        <ProductInfo>
          <CompanyName>Sneaker Company</CompanyName>
          <ProductTitle>Fall Limited Edition Sneakers</ProductTitle>
          <ProductDescription>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </ProductDescription>
        </ProductInfo>
      </MainContainer>
    </div>
  );
}

export default App;
