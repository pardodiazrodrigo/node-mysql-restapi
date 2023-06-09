import { createPool } from "mysql2/promise";
import { DB_URI } from "./config.js";

export const pool = createPool(DB_URI);
