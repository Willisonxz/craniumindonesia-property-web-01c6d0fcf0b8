import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import News1 from '../assets/news1.png'
import News2 from '../assets/news2.png'
import News3 from '../assets/news3.png'
import prevIcon from "../assets/prev_logo.svg"
import nextIcon from "../assets/next_logo.svg"


export default function TabNews() {
    const data = [
        {
          image: News1,
          description: "$7m+ Tas island is a dream come true",
          time : "2 mins read"
        },
        {
          image: News2,
          description: "Surfers Paradise unit sales reach new heights",
          time : "4 mins read"
        },
        {
          image: News3,
          description: "Valucluse home of family behind  $100m hotel empire...",
          time : "3 mins read"
        },
        {
          image: News1,
          description: "Albert Park character home tipped to break suburb’s...",
          time : "3 mins read"
        },
        {
          image: News2,
          description: "Eltham ‘treehouse’ build around tree-trunk poles with funky...",
          time : "2 mins read"
        },
        {
          image: News3,
          description: "Fairytale-like Glen Osmond home brimming with luxury and a 12-car garage",
          time : "5 mins read"
        },
        {
          image: News2,
          description: "Darwin experiencing ‘two-tier’ property market",
          time : "4 mins read"
        },
    ];
    
      const settings = {
        dots: true,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow:<img src={prevIcon} alt=''/>,
        nextArrow:<img src={nextIcon} alt=''/>,
        responsive:[
          {
            breakpoint: 1200,
              settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2
                      }
            },
            {
              breakpoint: 950,
                settings: {
                          slidesToShow: 3,
                          slidesToScroll: 2
                        }
              },
              {
                breakpoint: 720,
                  settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                          }
                },
                {
                  breakpoint: 550,
                    settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              centerMode:true
                            }
                  }
        ]
      };
    
  return (
    <div>
      <div className='news-heading'>Latest property news</div>
      <Slider {...settings}>
        {data.map((news, index) => (
          <div className="news-container" key={index}>
            <img src={news.image} alt="News"/>
            <div className="news-description">
              <p style={{ margin: 0 }}>{news.description}</p>
            </div>
            <div className="news-time">
              <p style={{ margin: 0 }}>{news.time}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
