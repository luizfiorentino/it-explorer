// db.ts
import { Pool } from "pg";

const connectionString = "YOUR_ELEPHANTSQL_CONNECTION_URL";

const pool = new Pool({
  connectionString,
});

export const query = async (text: string, params: any[] = []) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
};

export default {
  query,
};
