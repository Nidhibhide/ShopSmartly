import express, { Application,Response,Request,NextFunction } from 'express';
import dotenv from 'dotenv';
import { connection } from './src/config/MongoDbConfig';
import cors from 'cors';
import morgan from 'morgan';
import helmet  from 'helmet';
import httpStatus from 'http-status';
import http from 'http';
// import userRoutes from './routes/userRoutes';

dotenv.config();
const app: Application = express();
const port:number=8001;

// CORS Options
const corsOptions = {
    origin: ['http://localhost:5173'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };

// Database Connection
connection();


// Middleware
app.use(cors(corsOptions));               // CORS middleware
app.use(helmet());                        // Helmet for securing HTTP headers
app.use(morgan('combined'));              // Morgan for HTTP request logging
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded bodies
app.use(express.json());                  // Parse JSON bodies

// // Routes
// app.use('/api/users', userRoutes);


// Error Handling Middleware
// app.use((req: Request, res: Response, next: NextFunction) => {
//     const error = new Error('Not Found');
//     console.log(error.message);
//     return res.status(httpStatus.NOT_FOUND).json({ message: error.message });
//   });
  
  const server = http.createServer(app);


// Start Server
server.listen(port, () => console.log(`Server running on port ${port}`));