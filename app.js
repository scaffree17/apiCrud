import express from 'express'
// import cors from 'cors'
import db from './database/db.js'
import blogRoutes from './routes/routes.js'


const app = express()
app.use(express.json())
app.use('/blogs', blogRoutes)
// app.use(cors())

try {
    await db.authenticate()
    console.log('conexion exitosa a la base de datos')
} catch (error) {
    console.log(`error:${error}`)
}


app.listen(8000, () => {
    console.log('servidor corriendo en http://localhost:8000/')
})