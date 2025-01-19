import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import quationRoutes from './routes/quation.route';

// Importación de rutas

const app: Express = express();
const PORT: number = parseInt(process.env.PORT || '3500');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

quationRoutes(app)

// Añadir otras rutas...

// Middleware de manejo de errores
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
