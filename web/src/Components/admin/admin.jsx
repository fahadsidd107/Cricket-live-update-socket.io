import { Formik, Field, Form, useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Item from '@mui/material/Grid'
import * as yup from 'yup';
// import { useHistory } from "react-router-dom";
import axios from 'axios';
import { baseUrl } from "./../../core"
// import { GlobalContext } from "../../context/Context";
// import { useContext } from "react";

const validationSchema = yup.object({
    // tournament: yup
    //     .string('Enter tournament'),

    // date: yup
    //     .string('Enter date'),
        
    // innings: yup
    //     .string('Enter innings'),
        

    // teamOne: yup
    //     .string('Enter teamOne'),
        

    // player1: yup
    //     .string('Enter player1')
        

    // player2: yup
    //     .string('Enter player2')
        

    // player1: yup
    //     .string('Enter player1')
        

    // player2: yup
    //     .string('Enter player2')
        

    // player1: yup
    //     .string('Enter player1')
        

    // player2: yup
    //     .string('Enter player2')
        
    
    // player1: yup
    //     .string('Enter player1')
        

    // player2: yup
    //     .string('Enter player2')
        

    // player1: yup
    //     .string('Enter player1')
        

    // player2: yup
    //     .string('Enter player2'),
        

    // player1: yup
    //     .string('Enter player1'),
        

    // player2: yup
    //     .string('Enter player2'),
        
    
    // player2: yup
    //     .string('Enter player2'),
        
    

});

function Login() {
    // let history = useHistory();
    // let { dispatch } = useContext(GlobalContext);
    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            // email: '',
            // password: '',
        },
        onSubmit: function (values) {
            console.log("values: ", values)
            axios.post(`${baseUrl}/api/v1/data`, {
                tournament: values.tournament,
                matchDate: values.matchDate,
                inning: values.inning,
                teamOne: values.teamOne,
                teamOneScore: values.teamOneScore,
                teamOneWicket: values.teamOneWicket,
                teamTwo: values.teamTwo,
                teamTwoScore: values.teamTwoScore,
                teamTwoWicket: values.teamTwoWicket,
                player1: values.player1,
                player2: values.player2,
                bowler1: values.bowler1,
                bowler2: values.bowler2,
                teamOneOvers: values.teamOneOvers,
                teamTwoOvers: values.teamTwoOvers,
                toss: values.toss,
                headline: values.headline,
            })
                .then((res) => {

                    console.log("res: ", res.data);

                    if (res.data) {
                        console.log("data created successful")
                    }
                    else {
                        alert("invalid data")
                    }
                })
        }
    });

    return (
        <div style={{ padding: "1rem" }}>
            <h3 style={{ margin: "auto", padding: "1rem", textAlign: "center" }}>Admin Control</h3>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} sx={{ width: "100%", margin: "auto" }}>
                    <Grid item xl={7} lg={10} xs={12} sm={12} md={12}  >
                        <Item  > <TextField sx={{ width: "100%" }}
                            color="primary"
                            id="outlined-basic"
                            label="Tournament"
                            placeholder="tournament"
                            variant="outlined"
                            name="tournament"
                            value={formik.values.tournament}
                            onChange={formik.handleChange}
                            error={formik.touched.tournament && Boolean(formik.errors.tournament)}
                            helperText={formik.touched.tournament && formik.errors.tournament}
                        /></Item>
                    </Grid>
                    <Grid item xl={5} lg={2} xs={12} sm={12} md={12} >
                        <Item>     <TextField sx={{ width: "100%" }}
                            color="primary"
                            id="outlined-basic"
                            label="Date"
                            placeholder="date"
                            variant="outlined"
                            type="text"
                            name="matchDate"
                            value={formik.values.matchDate}
                            onChange={formik.handleChange}
                            error={formik.touched.matchDate && Boolean(formik.errors.matchDate)}
                            helperText={formik.touched.matchDate && formik.errors.matchDate}
                        /></Item>
                    </Grid>
                    <Grid item xl={12} lg={12} xs={12} sm={12} md={12} >
                        <Item>
                            <center>
                                <TextField sx={{ width: "40%" }}
                                    color="primary"
                                    id="outlined-basic"
                                    label="inning"
                                    placeholder="inning"
                                    variant="outlined"
                                    type="text"
                                    name="inning"
                                    value={formik.values.inning}
                                    onChange={formik.handleChange}
                                    error={formik.touched.inning && Boolean(formik.errors.inning)}
                                    helperText={formik.touched.inning && formik.errors.inning}
                                />
                            </center></Item>
                    </Grid>
                    <Grid item xl={3} lg={3} xs={12} sm={12} md={12} >
                        <Item>
                            <TextField sx={{ width: "100%" }}
                                color="primary"
                                id="outlined-basic"
                                label="Team One"
                                placeholder="Team One"
                                variant="outlined"
                                type="text"
                                name="teamOne"
                                value={formik.values.teamOne}
                                onChange={formik.handleChange}
                                error={formik.touched.teamOne && Boolean(formik.errors.teamOne)}
                                helperText={formik.touched.teamOne && formik.errors.teamOne}
                            />
                        </Item>
                    </Grid>
                    <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                        <Item>
                            <TextField sx={{ width: "100%" }}
                                color="primary"
                                id="outlined-basic"
                                label="Score"
                                placeholder="Score"
                                variant="outlined"
                                type="text"
                                name="teamOneScore"
                                value={formik.values.teamOneScore}
                                onChange={formik.handleChange}
                                error={formik.touched.teamOneScore && Boolean(formik.errors.teamOneScore)}
                                helperText={formik.touched.teamOneScore && formik.errors.teamOneScore}
                            />
                        </Item>
                    </Grid>
                    <Grid item xl={3} lg={3} xs={12} sm={12} md={12} >
                        <Item>
                            <TextField sx={{ width: "30%" }}
                                color="primary"
                                id="outlined-basic"
                                label="wickets"
                                placeholder="wickets"
                                variant="outlined"
                                type="text"
                                name="teamOneWicket"
                                value={formik.values.teamOneWicket}
                                onChange={formik.handleChange}
                                error={formik.touched.teamOneWicket && Boolean(formik.errors.teamOneWicket)}
                                helperText={formik.touched.teamOneWicket && formik.errors.teamOneWicket}
                            />
                        </Item>
                    </Grid>
                    <Grid item xl={3} lg={3} xs={12} sm={12} md={12} >
                        <Item>
                            <TextField sx={{ width: "100%" }}
                                color="primary"
                                id="outlined-basic"
                                label="Team Two"
                                placeholder="Team Two"
                                variant="outlined"
                                type="text"
                                name="teamTwo"
                                value={formik.values.teamTwo}
                                onChange={formik.handleChange}
                                error={formik.touched.teamTwo && Boolean(formik.errors.teamTwo)}
                                helperText={formik.touched.teamTwo && formik.errors.teamTwo}
                            />
                        </Item>
                    </Grid>
                    <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                        <Item>
                            <TextField sx={{ width: "100%" }}
                                color="primary"
                                id="outlined-basic"
                                label="Score"
                                placeholder="Score"
                                variant="outlined"
                                type="text"
                                name="teamTwoScore"
                                value={formik.values.teamTwoScore}
                                onChange={formik.handleChange}
                                error={formik.touched.teamTwoScore && Boolean(formik.errors.teamTwoScore)}
                                helperText={formik.touched.teamTwoScore && formik.errors.teamTwoScore}
                            />
                        </Item>
                    </Grid>
                    <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                        <Item>

                            <TextField sx={{ width: "100%" }}
                                color="primary"
                                id="outlined-basic"
                                label="wickets"
                                placeholder="wickets"
                                variant="outlined"
                                type="text"
                                name="teamTwoWicket"
                                value={formik.values.teamTwoWicket}
                                onChange={formik.handleChange}
                                error={formik.touched.teamTwoWicket && Boolean(formik.errors.teamTwoWicket)}
                                helperText={formik.touched.teamTwoWicket && formik.errors.teamTwoWicket}
                            />
                        </Item>
                    </Grid>
                    <Grid item xl={3} lg={3} xs={12} sm={12} md={12} >
                        <Item>
                        </Item>
                    </Grid>
                    <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                        <Item>
                            <TextField sx={{ width: "100%" }}
                                color="primary"
                                id="outlined-basic"
                                label="overs"
                                placeholder="overs"
                                variant="outlined"
                                type="text"
                                name="teamOneOvers"
                                value={formik.values.teamOneOvers}
                                onChange={formik.handleChange}
                                error={formik.touched.teamOneOvers && Boolean(formik.errors.teamOneOvers)}
                                helperText={formik.touched.teamOneOvers && formik.errors.teamOneOvers}
                            />
                        </Item>
                    </Grid>
                    <Grid item xl={6} lg={6} xs={12} sm={12} md={12} >
                        <Item>
                        </Item>
                    </Grid>
                    <Grid item xl={1} lg={1} xs={12} sm={12} md={12} >
                        <Item>
                            <TextField sx={{ width: "100%" }}
                                color="primary"
                                id="outlined-basic"
                                label="overs"
                                placeholder="overs"
                                variant="outlined"
                                type="text"
                                name="teamTwoOvers"
                                value={formik.values.teamTwoOvers}
                                onChange={formik.handleChange}
                                error={formik.touched.teamTwoOvers && Boolean(formik.errors.teamTwoOvers)}
                                helperText={formik.touched.teamTwoOvers && formik.errors.teamTwoOvers}
                            />
                        </Item>
                    </Grid>
                    <Grid item xl={8} lg={8} xs={12} sm={12} md={12} >
                        <Item>
                            <TextField sx={{ width: "50%" }}
                                color="primary"
                                id="outlined-basic"
                                label="batsman 01"
                                placeholder="batsman 01"
                                variant="outlined"
                                type="text"
                                name="player1"
                                value={formik.values.player1}
                                onChange={formik.handleChange}
                                error={formik.touched.player1 && Boolean(formik.errors.player1)}
                                helperText={formik.touched.player1 && formik.errors.player1}
                            />
                        </Item>
                    </Grid>
                    <Grid item xl={4} lg={4} xs={12} sm={12} md={12} >
                        <Item>
                            <TextField sx={{ width: "100%" }}
                                color="primary"
                                id="outlined-basic"
                                label="bowler 01"
                                placeholder="bowler 01"
                                variant="outlined"
                                type="text"
                                name="bowler1"
                                value={formik.values.bowler1}
                                onChange={formik.handleChange}
                                error={formik.touched.bowler1 && Boolean(formik.errors.bowler1)}
                                helperText={formik.touched.bowler1 && formik.errors.bowler1}
                            />
                        </Item>
                    </Grid>
                    <Grid item xl={8} lg={8} xs={12} sm={12} md={12} >
                        <Item>
                            <TextField sx={{ width: "50%" }}
                                color="primary"
                                id="outlined-basic"
                                label="batsman 02"
                                placeholder="batsman 02"
                                variant="outlined"
                                type="text"
                                name="player2"
                                value={formik.values.player2}
                                onChange={formik.handleChange}
                                error={formik.touched.player2 && Boolean(formik.errors.player2)}
                                helperText={formik.touched.player2 && formik.errors.player2}
                            />
                        </Item>
                    </Grid>
                    <Grid item xl={4} lg={4} xs={12} sm={12} md={12} >
                        <Item>
                            <TextField sx={{ width: "100%" }}
                                color="primary"
                                id="outlined-basic"
                                label="bowler 02"
                                placeholder="bowler 02"
                                variant="outlined"
                                type="text"
                                name="bowler2"
                                value={formik.values.bowler2}
                                onChange={formik.handleChange}
                                error={formik.touched.bowler2 && Boolean(formik.errors.bowler2)}
                                helperText={formik.touched.bowler2 && formik.errors.bowler2}
                            />
                        </Item>
                    </Grid>
                    <Grid item xl={12} lg={12} xs={12} sm={12} md={12} >
                        <Item>
                            <center>
                                <TextField sx={{ width: "60%" }}
                                    color="primary"
                                    id="outlined-basic"
                                    label="toss"
                                    placeholder="toss"
                                    variant="outlined"
                                    type="text"
                                    name="toss"
                                    value={formik.values.toss}
                                    onChange={formik.handleChange}
                                    error={formik.touched.toss && Boolean(formik.errors.toss)}
                                    helperText={formik.touched.toss && formik.errors.toss}
                                />
                            </center></Item>
                    </Grid>
                    <Grid item xl={12} lg={12} xs={12} sm={12} md={12} >
                        <Item>
                            <center>
                                <TextField sx={{ width: "40%" }}
                                    color="primary"
                                    id="outlined-basic"
                                    label="headline"
                                    placeholder="headline"
                                    variant="outlined"
                                    type="text"
                                    name="headline"
                                    value={formik.values.headline}
                                    onChange={formik.handleChange}
                                    error={formik.touched.headline && Boolean(formik.errors.headline)}
                                    helperText={formik.touched.headline && formik.errors.headline}
                                />
                            </center></Item>
                    </Grid>
                    <Grid item xl={12} lg={12} xs={12} sm={12} md={12} >
                        <Item>
                            <center>
                            <Button sx={{ width: "30%", marginBottom: "1%" }} variant="contained" color="info" type="submit" >Live</Button>
                            </center></Item>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default Login;