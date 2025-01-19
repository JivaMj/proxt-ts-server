import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import quationRoutes from 'app/routes/quation.route'

// Importación de rutas
dotenv.config({ path: process.env.NODE_ENV === 'development' ? '.env.local' : '.env' });

const app: Express = express();
const PORT: number = parseInt(process.env.PORT || '3500');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);  // Loguear el error
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

quationRoutes(app)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
