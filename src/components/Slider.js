import React, { Component } from 'react';

import Slide_1 from '../img/1.jpg';
import Slide_2 from '../img/2.jpg';
import Slide_3 from '../img/3.jpg';
import Slide_4 from '../img/4.jpg';

export class Slider extends Component {
  state = {
    slides: [
      { slide: `url(${Slide_1})` },
      { slide: `url(${Slide_2})` },
      { slide: `url(${Slide_3})` },
      { slide: `url(${Slide_4})` }
    ],
    active: 0,
    max: 4
  };

  intervalBeetwen = () => {
    const { active, autoplay, max } = this.state;

    if (autoplay) {
      if (active === max - 1) {
        this.setState({ active: 0 });
      } else {
        this.setState({ active: active + 1 });
      }
    }
  };

  nexOne = () => {
    const { active, max } = this.state;
    active < max - 1
      ? this.setState({ active: active + 1 })
      : this.setState({ active: 0 });
  };

  prevOne = () => {
    const { active, max } = this.state;

    active > 0
      ? this.setState({ active: active - 1 })
      : this.setState({ active: max - 1 });
  };

  dots = (index, event) => {
    this.setState({
      active: index
    });
  };

  isActive = value => {
    const { active } = this.state;

    if (active === value) {
      return 'active';
    }
  };

  setStyles = () => {
    const { active, slides } = this.state;
    const transition = active * (-100 / slides.length);

    return {
      width: slides.length * 100 + '%',
      transform: `translateX(${transition}%)`
    };
  };

  renderSlides = () => {
    const { slides } = this.state;
    const transition = 100 / slides.length + '%';

    return slides.map((item, index) => (
      <div
        className="each-slide"
        key={index}
        style={{
          backgroundImage: item.slide,
          width: transition
        }}
      />
    ));
  };

  renderDots = () => {
    const { slides } = this.state;

    return slides.map((item, index) => (
      <li
        className={this.isActive(index) + ' dots'}
        key={index}
        ref="dods"
        onClick={() => this.dots(index)}
      >
        <i>&#9679;</i>
      </li>
    ));
  };

  renderArrow = () => {
    return (
      <div>
        <button type="button" className="arrows prev" onClick={this.prevOne}>
          <i className="fas fa-angle-left fa-lg" />
        </button>
        <button type="button" className="arrows next" onClick={this.nexOne}>
          <i className="fas fa-angle-right fa-lg" />
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className="slider">
        <div className="wrapper" style={this.setStyles()}>
          {this.renderSlides()}
        </div>
        {this.renderArrow()}
        <ul className="dots-container">{this.renderDots()}</ul>
      </div>
    );
  }
}

export default Slider;
