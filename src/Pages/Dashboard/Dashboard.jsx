import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
// import { Button } from "@material-ui/core";

const Dashboard = () => {
  const [results, setResults] = useState([]);
  const [poster_path, setPoster_path] = useState("");
  const [genres, setGenres] = useState([]);
  const [overview, setOverview] = useState("");
  const [title, setTitle] = useState("");
  const [showDialog, setshowDialog] = useState(false);
  const [MovieDetails, setMoviesDetail] = useState({});

  useEffect(() => {
    console.log("useEffect called");
    sendDetailsToServer();
  }, []);
  const sendDetailsToServer = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63"
      )
      .then((responseData) => {
        console.log("responseData", responseData);
        setResults(responseData.data.results);
        setPoster_path(
          responseData.data.results.map((item) => item.poster_path)
        );
        setGenres(responseData.data.results.map((item) => item.genres));
        console.log(responseData.data);
        console.log(responseData.data.poster_path);
      });
  };
  const movieDetail = (item) => {
    setshowDialog(true);
    setMoviesDetail(item);
  };
  let movieList = results.map((item) => {
    return (
      <div className="card" key={item}>
        <div className="card-image" onClick={() => movieDetail(item)}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
            alt={item.title}
          />
          <span className="card-title">{item.title}</span>
        </div>
      </div>
    );
  });

  const closeDialog = () => {
    setshowDialog(false);
  };
  console.log("results", results);
  return (
    <div>
      <div>
        <h2>
          POPULAR<br></br> MOVIES
        </h2>
        <hr></hr>
      </div>
      <div>
        <div className="box">{movieList}</div>
      </div>
      <Dialog open={showDialog} onClose={closeDialog} maxWidth="sm" fullWidth>
        <DialogContent>
          <div className="col-sm-12">
            <div className="col-sm-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={title}
              />
            </div>
            <div className="col-sm-8">
              <h3>{MovieDetails.title}</h3>
              <p>{MovieDetails.overview}</p>
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => closeDialog()}
            color="primary"
            style={{ marginRight: "5px" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;
