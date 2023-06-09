import express from "express";
import morgan from "morgan";
import employeesRoutes from "./routes/employes.routes.js";
import indexRoutes from "./routes/index.routes.js";


const app = express();

// middLewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use('/api', employeesRoutes);
app.use(indexRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found"
    })
})

export default app