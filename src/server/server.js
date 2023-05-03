import mongoose from "mongoose";
import { app } from "../app.js";
import { MONGO_CNX } from "../config/mongodb.config.js"
import { PORT } from "../config/server.config.js"

mongoose.connect(MONGO_CNX)
app.listen(PORT, () => console.log(`Servidor levantado en:  ${PORT}`))