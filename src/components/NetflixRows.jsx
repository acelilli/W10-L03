import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleMovie from "./SingleMovie";
// SOLO QUESTO FILE DEVE ANDARE CON GLI HOOKS
// useState per lo stato che mi serve

//funzione dove destrutturo qualcosa in props
const NetflixRows = ({ props }) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // dopo aver determinato useState faccio la fetch con useEffect
  useEffect(() => {
    const fetchData = async () => {
      const token = "43b92655";
      const endpoint = `http://www.omdbapi.com/?apikey=${token}&movie&s=${this.props.searchQuery}`;
      try {
        const response = await fetch(endpoint);
        if (response.ok) {
          const responseData = await response.json();
          setData({ responseData });
          setIsLoaded(true);
          console.log("success while fetching");
        } else {
          console.log("error while fetching");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props.searchQuery]);
  // rendering di tutto (con return, NON render)
  return (
    <>
      <Slider {...settings} className={props.stile}>
        {data.Search &&
          data.Search.map((movie) => (
            <div key={movie.imdbID}>
              <SingleMovie img={movie.Poster} />
            </div>
          ))}
      </Slider>
    </>
  );
};

// class NetflixRows extends Component {
//   state = {
//     data: [],
//     isLoaded: false,
//     // settings che servono per lo slide
//     settings: {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 4,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     },
//   };

//   componentDidMount = async () => {
//     const token = "43b92655";
//     const endpoint = `http://www.omdbapi.com/?apikey=${token}&movie&s=${this.props.searchQuery}`;
//     try {
//       const response = await fetch(endpoint);
//       if (response.ok) {
//         const data = await response.json();
//         this.setState({ data });
//         this.setState({ isLoaded: true });
//         console.log("success while fetching");
//       } else {
//         console.log("error while fetching");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     const { data, isLoaded } = this.state;
//     return (
//       <>
//         <Slider {...this.state.settings} className={this.props.stile}>
//           {data.Search &&
//             data.Search.map((movie) => (
//               <div key={movie.imdbID}>
//                 <SingleMovie img={movie.Poster} />
//               </div>
//             ))}
//         </Slider>
//       </>
//     );
//   }
// }

export default NetflixRows;
