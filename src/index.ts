import { playerRouter } from "./routes/player.route";
import { cardRouter } from "./routes/card.route";
import { categoryRouter } from "./routes/category.route";
import { gameRouter } from "./routes/game.route";
import { userRouter } from "./routes/user.route";
import { roomRouter } from "./routes/room.route";
import { languageRouter } from "./routes/language.route";
import express from 'express';

require("./dbConnection/connection");

const cors = require("cors");
const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use(userRouter);
app.use(categoryRouter);
app.use(playerRouter);
app.use(cardRouter);
app.use(gameRouter);
app.use(roomRouter);
app.use(languageRouter);

app.listen(port, () => {
    console.log(`Connection is setup at Port ${port}`);
});