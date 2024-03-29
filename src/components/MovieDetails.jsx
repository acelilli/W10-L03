// // Crea il componente MovieDetails per visualizzare i dettagli e i commenti del singolo film. Queste informazioni dovranno essere ottenute da delle fetch ogni qualvolta il componente MovieDetails verrà montato; avrai bisogno di prelevare il movieId dall'URL (per recuperare sia i dettagli del film sia i suoi commenti sarà necessario effettuare due fetch: una a omdbAPI e una alle nostre API interne)
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const MovieDetails = (props) => {
//   const params = useParams();
//   console.log("TUTTI PARAMETRI" + params);
//   const [movie, setMovie] = useState();
//   const [comments, setComments] = useState([
//     {
//       comment: "",
//       rate: "",
//       elementId: "_id",
//     },
//   ]);
//   const [isLoaded, setIsLoaded] = useState(true);
//   const [isError, setIsError] = useState(false);
//   //
//   // fetch data (film)
//   const getMovieData = () => {
//     const token = "43b92655";
//     fetch("http://www.omdbapi.com/?apikey=${token}&movie&s=${params.imdbID}")
//       .then((resp) => {
//         if (resp.ok) {
//           return resp.json();
//         }
//       })
//       .then((movieData) => {
//         setMovie(movieData);
//       });
//   };
//   //   const getMovieData = async () => {
//   //     const token = "43b92655";
//   //     const endpoint = `http://www.omdbapi.com/?apikey=${token}&movie&s=${params.imdbID}`;
//   //     try {
//   //       const response = await fetch(endpoint);
//   //       if (response.ok) {
//   //         const responseData = await response.json();
//   //         // Aggiorno lo stato con i dati ottenuti dalla chiamata API
//   //         setData(responseData);
//   //         setIsLoaded(true);
//   //         console.log("Successo durante il recupero dei dati");
//   //       } else {
//   //         console.log("Errore durante il recupero dei dati");
//   //       }
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };
//   // fetch dei commenti
//   //   const fetchComments = async () => {
//   //     try {
//   //       const response = await fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
//   //         headers: {
//   //           Authorization:
//   //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllYmM1MzZlYmM0YjAwMTg1MGYxZGEiLCJpYXQiOjE3MDQ5MDE3MTUsImV4cCI6MTcwNjExMTMxNX0.AAfFLJSStPT-J8-IBcbiHwK9zOIjs9Q-3QFhiEj3wxc",
//   //         },
//   //       });
//   //       if (response.ok) {
//   //         const responseData = await response.json();
//   //         // Aggiorno lo stato con i dati ottenuti dalla chiamata API
//   //         setMovie(movie);
//   //         setIsLoaded(true);
//   //         console.log("Successo durante il recupero dei dati");
//   //       } else {
//   //         console.log("Errore durante il recupero dei dati");
//   //       }
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };

//   useEffect(() => {
//     // Chiamata alle funzione di fetch
//     getMovieData();
//     // fetchComments();
//   }, []);

//   console.log("Here we go" + "data:" + movie + "e commenti:" + comments);

//   return (
//     <div>
//       <h2>{movie.Title}</h2>
//       {/* Altre informazioni sul film */}
//     </div>
//   );
// };

// export default MovieDetails;

import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  const fetchData = async () => {
    const token = "43b92655";
    const endpoint = `http://www.omdbapi.com/?apikey=${token}&movie&s=${params.movieId}`;
    try {
      const response = await fetch(endpoint);
      const resp = await fetch(endpoint);
      if (resp.ok) {
        const response = await resp.json();
        console.log(response);
        setData(response);
        // this.setState({ isLoaded: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Row className=" justify-content-center">
        <Col xs={6}>
          <Card className="bg-black text-center">
            <Card.Img
              variant="top"
              src={data.Poster}
              style={{
                width: "100%",
                height: "600px",
                objectFit: "contain",
              }}
            />
            <Card.Body>
              <Card.Title className=" fw-bold fs-1">{data.Title}</Card.Title>
              <Card.Text>{data.Plot}</Card.Text>
              <Button variant="outline-light">Watch Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
