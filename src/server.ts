import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'
import path from 'path'


const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)
app.use("/file", express.static(path.resolve(__dirname, '..', 'tmp')))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        messagem: 'internal server error'
    })
})


app.listen(3333, () => console.log("SERVIDOR ONLINE!!!!"))




