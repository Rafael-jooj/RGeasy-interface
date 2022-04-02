import React, { Component } from 'react';
import './carrossel.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://img.freepik.com/fotos-gratis/grafico-de-barras-digital-crescente-com-sobreposicao-de-mao-de-empresario_53876-97640.jpg?t=st=1648778069~exp=1648778669~hmac=8b0bd1d14de363b0e4bc0e653f06867f7284d8598e4d8861f8a401692e326b4e&w=900',
    altText: 'Quem desenvolveu o RGeasy?',
    content: 'O desenvolvimento da Ferramenta RGeasy é fruto de uma parceria entre os pesquisadores do Laboratório de Análises Moleculares (LAM) e do Curso de Ciência da Computação da Universidade Federal do Tocantins (UFT) juntamente com os pesquisadores do Laboratório de Fisiologia Molecular de Plantas da Universidade Federal de Lavras (UFLA)'
  },
  {
    src: 'https://img.freepik.com/fotos-gratis/imagem-horizontal-do-laptop-de-computador-simulado-com-tela-branca-telefone-inteligente-xicara-de-cafe-e-artigos-de-papelaria-no-local-de-trabalho-moderno_35674-8935.jpg?w=826',
    altText: 'O que a ferramenta faz?',
    content: "O RGeasy tem por objetivo auxiliar na seleção de genes de referência, para estudos de expressão gênica po RT-qPCR de forma facilitada, ele utiliza o algoritmo RefFinder (XIE et al, 2012), para a classificação dos genes, resultando em um ranking com os genes de referência mais estáveis e, ainda, disponibiliza conjuntos de primers dos genes selecionados."
  }
];

class Carrossel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText}/>
          <CarouselCaption captionText={item.content} captionHeader={item.altText} className='texto'/>
        </CarouselItem>
      );
    });

    return (
        <div className='back'>
        <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
            interval={10000}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        </div>
    );
  }
}


export default Carrossel;