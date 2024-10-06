import AppDataSource from "./configs/data-source";
import logger from "./configs/winston.config";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const startServer = async () => {
    try {
        await AppDataSource.initialize();
        logger.info("Database connection established");

        await AppDataSource.runMigrations();

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            logger.info(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        logger.error('Error during Data Source initialization', error);
    }
};

startServer().then(r => "Starting Database...");