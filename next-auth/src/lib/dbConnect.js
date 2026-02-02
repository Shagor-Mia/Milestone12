import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.URI;
const dbName = process.env.DB_NAME;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnection = (cname) => {
  return client.db(dbName).collection(cname);
};
