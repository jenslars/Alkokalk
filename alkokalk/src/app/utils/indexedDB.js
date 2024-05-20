import { openDB } from 'idb';

const DB_NAME = 'systembolagetDB';
const DB_VERSION = 2;
const STORE_NAME = 'products';
const META_STORE_NAME = 'metadata';

export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
      if (!db.objectStoreNames.contains(META_STORE_NAME)) {
        db.createObjectStore(META_STORE_NAME);
      }
    },
  });
};

export const setItem = async (key, value) => {
  const db = await initDB();
  return db.put(STORE_NAME, value, key);
};

export const getItem = async (key) => {
  const db = await initDB();
  return db.get(STORE_NAME, key);
};

export const setMeta = async (key, value) => {
  const db = await initDB();
  return db.put(META_STORE_NAME, value, key);
};

export const getMeta = async (key) => {
  const db = await initDB();
  return db.get(META_STORE_NAME, key);
};
