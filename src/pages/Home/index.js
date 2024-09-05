import React from 'react';
import BannerCarousel from '../../components/CarouselBanner'; 
import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const images = [
  '/images/banner-1.png',
  '/images/banner-2.png',
  '/images/banner-3.png',
];

function Home() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <BannerCarousel images={images} /> {/* Use o componente atualizado */}
      <Container>
        {categories.map((category, index) => (
          <Category category={category} key={index}>
            <div>
              {filterCategory(index).map((video) => (
                <Card id={video.id} key={video.id} />
              ))}
            </div>
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
