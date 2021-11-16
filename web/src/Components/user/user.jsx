import Stack from '@mui/material/Stack';
import { Grid} from '@mui/material';
import Item from '@mui/material/Grid'
import React from "react";
import axios from 'axios';
import { baseUrl } from "./../../core";
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import io from 'socket.io-client';
import background from "../../bg.jpg"
import live from "../../live.gif"
import logo from "../../logo.jpg"
function UserPanel() {
  // let history = useHistory();
  // let { dispatch } = useContext(GlobalContext);
  const [posts, setPosts] = useState({});

  useEffect(() => {


    axios.get(`${baseUrl}/api/v1/data`, {

    })
      .then(res => {

        // let arr=[];
        // // res.data.forEach((element)=>{
        //   arr.push(res.data)
        // // })



        console.log(res.data);
        console.log("Fahad Siddiqui")
        // setPosts(res.data)
        setPosts(res.data)

        // console.log(arr)
      });

    return () => {
      // console.log("post shown");
    };

  }, []);

  useEffect(() => {
    const socket = io("https://cricket-live-update-socketio.herokuapp.com"); // to connect with locally running Socker.io server

    socket.on('connect', function () {
      console.log("connected to server")
    });
    socket.on('disconnect', function (message) {
      console.log("disconnected from server: ", message);
    });
    socket.on('matchData', function (data) {
      console.log(data);
      // setPosts((prev) => [data, ...prev])
      setPosts(data)
    });

    return () => {
      socket.close();
    };
  }, []);



  return (

    <div id="main">
      <Container>
          <h1 style={{ margin: "auto", padding: "1rem", textAlign: "center" }} id="mainh">User Panel</h1>
        <div style={{ padding: "1rem" }} id="maindiv">
<center><img src={live} width="300px" /></center>
            <Grid container spacing={0} sx={{ width: "90%", margin: "auto" }}>

              <Grid item xl={7} lg={10} xs={12} sm={12} md={12}  >
                <Item><h2>{posts.tournament}</h2></Item>
              </Grid>


              <Grid item xl={5} lg={2} xs={12} sm={12} md={12} >
                <Item><h3>{posts.matchDate}</h3></Item>
              </Grid>

              <Grid item xl={12} lg={12} xs={12} sm={12} md={12} >
                <Item>
                  <center>
                    <h2>{posts.inning} Inning</h2>
                  </center></Item>
              </Grid>

              <Grid item xl={3} lg={3} xs={12} sm={12} md={12} >
                <Item>
                  <h1>{posts.teamOne}</h1><br /><img src={logo} alt="" width="110px" />
                </Item>
              </Grid>

              <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                <Item>
                  <h1>{posts.teamOneScore}  </h1>
                </Item>
              </Grid>

              <Grid item xl={3} lg={3} xs={12} sm={12} md={12} >
                <Item>
                  <h1>/ {posts.teamOneWicket}  </h1>
                </Item>

              </Grid>
              <Grid item xl={3} lg={3} xs={12} sm={12} md={12} >
                <Item>
                  <h1>{posts.teamTwo}</h1><br /><img src={logo} alt="" width="110px" />
                </Item>
              </Grid>

              <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                <Item>
                  <h1>{posts.teamTwoScore}  </h1>
                </Item>

              </Grid>
              <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                <Item>
                  <h1>/ {posts.teamTwoWicket}</h1>
                </Item>
              </Grid>
              <Grid item xl={3} lg={3} xs={12} sm={12} md={12} >
                <Item>
                </Item>
              </Grid>
              <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                <Item>
                <h3>Overs: {posts.teamOneOvers}</h3>
                </Item>
              </Grid>
              <Grid item xl={6} lg={6} xs={12} sm={12} md={12} >
                <Item>
                </Item>
              </Grid>
              <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                <Item>
                <h3>Overs: {posts.teamTwoOvers}</h3>
                </Item>
              </Grid>
              <Grid item xl={8} lg={8} xs={12} sm={12} md={12} >
                <Item>
                <h3>{posts.player1}</h3>
                </Item>
              </Grid>
              <Grid item xl={4} lg={4} xs={12} sm={12} md={12} >
                <Item>
                <h3>{posts.bowler1}</h3>
                </Item>
              </Grid>
              <Grid item xl={8} lg={8} xs={12} sm={12} md={12} >
                <Item>
                <h3>{posts.player2}</h3>
                </Item>
              </Grid>
              <Grid item xl={4} lg={4} xs={12} sm={12} md={12} >
                <Item>
                <h3>{posts.bowler2}</h3>
                </Item>
              </Grid>
              <Grid item xl={12} lg={12} xs={12} sm={12} md={12} >
                <Item>
                  <center>
                  <h2>{posts.toss}</h2>
                  </center></Item>
              </Grid>
              <Grid item xl={12} lg={12} xs={12} sm={12} md={12} >
                <Item>
                  <center>
                  <h1>{posts.headline}</h1>
                  </center></Item>
              </Grid>
            </Grid>
        </div>
        <div>
          <br />
          <br />
          <br />
        </div>
      </Container>
    </div>
  );
}

export default UserPanel;