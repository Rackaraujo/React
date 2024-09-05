import React from 'react';
import BannerCarousel from '../../components/CarouselBanner';
import Container from '../../components/Container';
import Category, { categories, filterCategory } from '../../components/Category';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import Banner from '../../components/Banner';

const slides = [
    {
        image: '/images/banner-1.png',
        title: 'Noragami',
        paragraph: 'Yato é um deus menor, mas está determinado a ser grande. Ele tem um plano, mas infelizmente as coisas não se dão como ele quer.',
        buttonLink: '/watch/gWCnKoEgfP0',
        buttonText: 'Assistir'
    },
    {
        image: '/images/banner-2.png',
        title: 'One Punch Man',
        paragraph: 'O super-herói mais poderoso do mundo pode matar qualquer um com um só golpe. Mas nada pode desafiá-lo, então ele luta contra o tédio e a depressão.',
        buttonLink: '/watch/atxYe-nOa9w',
        buttonText: 'Assistir'
    },
    {
        image: '/images/banner-3.png',
        title: 'Parasyte',
        paragraph: 'Um adolescente luta contra um ataque de parasitas do espaço com a ajuda de Migi, uma criatura parasita dócil que vive em sua mão direita.',
        buttonLink: '/watch/ziatgnrtG0Y',
        buttonText: 'Assistir'
    }
];

function Home() {
    return (
        <>
            <ScrollToTopButton />
            <Header />
            <BannerCarousel slides={slides} />
            <Container>
                {categories.map((category, index) => (
                    <Category category={category} key={index}>
                        <Carousel>
                            {filterCategory(index).map((video) => (
                                <Card id={video.id} key={video.id} />
                            ))}
                        </Carousel>
                    </Category>
                ))}
                 <Banner
                            image={`${process.env.PUBLIC_URL}/images/mha.png`}
                            buttonText="Assistir"
                            buttonLink="/watch/L1FdEBTJXus" 
                        />
            </Container>
            <Footer />
        </>
    );
}

export default Home;
