import * as SQLite from "expo-sqlite";

export const init = async () => {
  try {
    const db = await SQLite.openDatabaseAsync("sessionUser.db");
  const connected = await db.execAsync(
      `PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS sessionUser (
                localId TEXT PRIMARY KEY NOT NULL,
                email TEXT NOT NULL,
                idToken TEXT NOT NULL
            );`
    );
    return connected;
  } catch (error) {
    console.log(error);
  }
};

export const insertSession = async ({ localId, email, idToken }) => {
    if (!localId || !email || !idToken) {
      console.log("Error: Missing required fields for insertSession");
      return;
    }
  
    try {
      const db = await SQLite.openDatabaseAsync("sessionUser.db");
      const newSession = await db.runAsync(
        `INSERT INTO sessionUser (localId, email, idToken) VALUES (?, ?, ?);`,
        [localId, email, idToken]
      );
        return newSession;  
    } catch (error) {
      console.log("Insert session error:", error);
    }
  };

export const fetchSession = async () => {
  const db = SQLite.openDatabaseAsync("sessionUser.db");
  const sessionUser = (await db).getFirstAsync(`SELECT * FROM sessionUser;`);
  return sessionUser;
};

export const deleteSession = async () => {
  const db = await SQLite.openDatabaseAsync("sessionUser.db");
  const sessionDeleted = await db.runAsync(`DELETE FROM sessionUser;`);
  return sessionDeleted;
};
