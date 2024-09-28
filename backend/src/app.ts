import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./docs/swagger";

//  Routes
import authRouter from "./routes/auth.routes";
config()

const app = express();

// Middleware para manejar datos JSON
app.use(express.json());

// Middleware para registrar solicitudes
app.use(morgan("dev"));

// Integrar Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//  Routes
app.use('/auth', authRouter)

export default app
