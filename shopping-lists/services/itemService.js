import { sql } from "../database/database.js";

const createItem = async (shoppingListId, itemName) => {
  console.log('adding item '+ itemName, 'to list', shoppingListId)
  await sql`
    INSERT INTO shopping_list_items (shopping_list_id, name)
    VALUES (${shoppingListId}, ${itemName})
  `;
  
};

const getAllItemsForList = async (shoppingListId) => {
  const rows = await sql`SELECT * FROM shopping_list_items WHERE shopping_list_id = ${shoppingListId}
  ORDER BY collected ASC, name ASC`;
  return rows;
};

const markItemAsCollectedInService = async (shoppingListId, itemId) => {

  await sql`
    UPDATE shopping_list_items
    SET collected = true
    WHERE shopping_list_id = ${shoppingListId} AND id = ${itemId}
  `;
  
};


const countShoppingListItems = async () => {
  const result = await sql`SELECT COUNT(*) FROM shopping_list_items`;
  return result[0].count;
};


export { createItem, getAllItemsForList,markItemAsCollectedInService, countShoppingListItems };
