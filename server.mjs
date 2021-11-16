import express from 'express'
import mongoose from "mongoose"
import cors from "cors"
import path from "path";
const __dirname = path.resolve();
import { createServer } from "http";
import { Server } from "socket.io";

const PORT = process.env.PORT || 5000
const app = express()

mongoose.connect('mongodb+srv://admin:admin@cluster0.crcc2.mongodb.net/fahad_login?retryWrites=true&w=majority');

const Score = mongoose.model('MatchRecord', {
    tournament: String,
    matchDate: String,
    inning: String,
    teamOne: String,
    teamOneScore: Number,
    teamOneWicket: Number,
    teamTwo: String,
    teamTwoScore: Number,
    teamTwoWicket: Number, 
    player1: String,
    player2: String,
    bowler1: String,
    bowler2: String,
    teamOneOvers: Number,
    teamTwoOvers: Number,
    toss: String,
    headline: String,
    created: { type: Date, default: Date.now },
});


app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
}))


app.use('/', express.static(path.join(__dirname, 'web/build')))
// app.get("/", (req, res, next) => {
//     res.sendFile(path.join(__dirname, "./web/build/index.html"))
// })

app.post('/api/v1/data', async (req, res) => {

    if (!req.body.player1 ||
        !req.body.player2
    ) {
        console.log("required field missing");
        res.status(403).send("required field missing");
        return;
    } else{
        console.log(req.body)
        const newScore = await new Score({
            tournament: req.body.tournament ,
            matchDate: req.body.matchDate ,
            inning:req.body.inning ,
            teamOne: req.body.teamOne ,
            teamOneScore: req.body.teamOneScore ,
            teamOneWicket: req.body.teamOneWicket ,
            teamTwo: req.body.teamTwo,
            teamTwoScore: req.body.teamTwoScore ,
            teamTwoWicket: req.body.teamTwoWicket , 
            player1:  req.body.player1 ,
            player2: req.body.player2 ,
            bowler1: req.body.bowler1 ,
            bowler2: req.body.bowler2 ,
            teamOneOvers: req.body.teamOneOvers ,
            teamTwoOvers: req.body.teamTwoOvers ,
            toss: req.body.toss,
            headline: req.body.headline ,
        })

        io.emit("matchData", {
            tournament: req.body.tournament ,
            matchDate: req.body.matchDate ,
            inning:req.body.inning ,
            teamOne: req.body.teamOne ,
            teamOneScore: req.body.teamOneScore ,
            teamOneWicket: req.body.teamOneWicket ,
            teamTwo: req.body.teamTwo,
            teamTwoScore: req.body.teamTwoScore ,
            teamTwoWicket: req.body.teamTwoWicket , 
            player1:  req.body.player1 ,
            player2: req.body.player2 ,
            bowler1: req.body.bowler1 ,
            bowler2: req.body.bowler2 ,
            teamOneOvers: req.body.teamOneOvers ,
            teamTwoOvers: req.body.teamTwoOvers ,
            toss: req.body.toss,
            headline: req.body.headline ,
        });
        newScore.save(() => {
            console.log("data saved")
            res.send('score created')
        })
    }
})




app.get('/api/v1/data', (req, res) => {

        Score.findOne({},{},{sort:{'created': -1}}, (err, data) => {
    
            if (err) {
                res.status(500).send("error in getting database")
            } else {
                res.send(data)
                // console.log(res.body)
            }
    
        })
})

app.get("/**", (req, res, next) => {
    // res.redirect("/")
    res.sendFile(path.join(__dirname, "./web/build/index.html"))
})

// app.listen(PORT, () => {
//     console.log(`Example app listening at http://localhost:${PORT}`)
// })


const server = createServer(app);

const io = new Server(server, { cors: { origin: "*", methods: "*", } });

io.on("connection", (socket) => {
    console.log("New client connected with id: ", socket.id);

    // to emit data to a certain client
    socket.emit("topic 1", "some data")

    // collecting connected users in a array
    // connectedUsers.push(socket)

    socket.on("disconnect", (message) => {
        console.log("Client disconnected with id: ", message);
    });
});


setInterval(() => {

    // to emit data to all connected client
    // first param is topic name and second is json data
    io.emit("Test topic", { event: "ADDED_ITEM", data: "some data" });
    console.log("emiting data to all client");

}, 2000)


server.listen(PORT, function () {
    console.log("server is running on", PORT);
})