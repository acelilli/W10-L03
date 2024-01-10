import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleMovie from "./SingleMovie";

// Funzione dove destrutturo qualcosa in props
const NetflixRows = (props) => {
  // Utilizzo dello stato con useState per i dati e il caricamento
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Impostazioni per lo slider
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

  // Dopo aver determinato useState, effettuo la fetch con useEffect
  useEffect(() => {
    const fetchData = async () => {
      const token = "43b92655";
      const endpoint = `http://www.omdbapi.com/?apikey=${token}&movie&s=${props.searchQuery}`;

      try {
        const response = await fetch(endpoint);
        if (response.ok) {
          const responseData = await response.json();
          // Aggiorno lo stato con i dati ottenuti dalla chiamata API
          setData(responseData);
          setIsLoaded(true);
          console.log("Successo durante il recupero dei dati");
        } else {
          console.log("Errore durante il recupero dei dati");
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Chiamata alla funzione di fetch
    fetchData();
  }, [props.searchQuery]); // Dipendenza da props.searchQuery

  // Rendering di tutto (con return, NON render)
  return (
    <>
      {/* Utilizzo dello Slider con le impostazioni specificate */}
      <Slider {...settings} className={props.stile}>
        {/* Mappo i dati ottenuti dalla chiamata API */}
        {data.Search &&
          data.Search.map((movie) => (
            <div key={movie.imdbID}>
              {/* Componente SingleMovie con l'immagine del film */}
              <SingleMovie img={movie.Poster} />
            </div>
          ))}
      </Slider>
    </>
  );
};

export default NetflixRows;

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
