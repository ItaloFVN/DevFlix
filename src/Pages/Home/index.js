import React from 'react';
import Menu from '../../Components/Menu/index';
import dadosInicias from '../../data/dados_iniciais.json';
import BannerMain from '../../Components/BannerMain'
import Carousel from '../../Components/Carousel'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <div style={{ background: "#141414"}}>
      <Menu />

      <BannerMain 
        videoTitle={dadosInicias.categorias[0].videos[0].titulo}
        url={dadosInicias.categorias[0].videos[0].url}
        videoDescription={"O que [e Front-End? Trabalhando na área"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosInicias.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[4]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[5]}
      />
      
      <Footer />
    </div>
  );
}

export default Home;
