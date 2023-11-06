import { sql } from "../database/database.js";

const create = async (name) => {
  await sql`INSERT INTO shopping_lists (name, active) VALUES (${name}, true)`;
};

const getAllActiveLists = async () => {
    return await sql`SELECT * FROM shopping_lists WHERE active = true`;   
};


const findById = async (listId) => {
  const rows = await sql`SELECT * FROM shopping_lists WHERE id = ${listId}`; 

  if (rows && rows.length > 0) {
    return rows[0];
  }

  return { id: 0, name: "Unknown" };
};

const countShoppingLists = async () => {
  const result = await sql`SELECT COUNT(*) FROM shopping_lists`;
  
  return result[0].count;
};

const deactivateList = async (listId) => {
  await sql`UPDATE shopping_lists SET active = false WHERE id =(${listId})`;
};


export { create,countShoppingLists,deactivateList,findById,getAllActiveLists };
