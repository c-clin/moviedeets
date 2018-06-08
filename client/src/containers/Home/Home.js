import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import poster1 from '../../assets/images/black-panther-poster.jpg';
import poster2 from '../../assets/images/mad-max-poster.jpg';
import poster3 from '../../assets/images/lalaland.jpg';

import './Home.css';

export default class componentName extends Component {
  render() {
    const homePageMovies = [
      {
        title: 'Black Panther',
        rating: '98%',
        certification: 'PG-13',
        year: 2018,
        genre: 'Action, Adventure, Sci-Fi',
        cast: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o",
        summary:
          "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
        poster: poster1
      },
      {
        title: 'Mad Max: Fury Road',
        rating: '90%',
        certification: 'R',
        year: 2015,
        genre: 'Action, Sci-Fi, Thriller',
        cast: 'Tom Hardy, Charlize Theron, Nicholas Hoult',
        summary:
          'A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.',
        poster: poster2
      },
      {
        title: 'La La Land',
        rating: '93%',
        certification: 'PG-13',
        year: 2016,
        genre: 'Comedy, Drama, Musical, Romance',
        cast: 'Ryan Gosling, Emma Stone, Rosemarie DeWitt',
        summary:
          'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
        poster: poster3
      }
    ];

    let carouselItems = homePageMovies.map(item => (
      <Carousel.Item key={item.title}>
        <div className="image-box">
          <img width={900} src={item.poster} alt={item.title} />
        </div>

        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p className="year">
            <span className="rating">
              <i className="fa fa-thumbs-up" aria-hidden="true" />
              {item.rating} liked this movie
            </span>
            {item.year}
            <span className="certification">{item.certification}</span>
          </p>
          <p className="summary">{item.summary}</p>
          <p>
            Cast: <em>{item.cast}</em>
          </p>
          <p>
            Genre: <em>{item.genre}</em>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    ));

    return (
      <div className="Home">
        <Carousel className="carousel">{carouselItems}</Carousel>
      </div>
    );
  }
}
