import express, {Express, Request, Response} from "express";
import dotenv from "dotenv"
import * as path from "path"
import "node:fs"

dotenv.config()

let app: Express = express()
const port = process.env.PORT || 9002

app.use(express.static(path.join(__dirname, "..", "public")))

app.get("/", (req: Request, res: Response) => { res.sendFile("index.html") })

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`)
})
