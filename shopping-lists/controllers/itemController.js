import * as itemService from '../services/itemService.js';
import * as requestUtils from '../utils/requestUtils.js';


const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addItem = async (request) => {
  const url = new URL(request.url);
  const shoppingListId = url.pathname.split("/")[2];
  const formData = await request.formData();
  const name = formData.get("name");
  console.log("name:", name);
  await itemService.createItem(shoppingListId, name);
  console.log('Add item succeeded')
  return requestUtils.redirectTo(`/lists/${shoppingListId}`);
};


const markItemAsCollected = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const shoppingListId = urlParts[2];
  console.log("Shopping List ID:", shoppingListId); 
  const itemId = urlParts[4];
  console.log("Item ID:", itemId); 
  await itemService.markItemAsCollectedInService(shoppingListId, itemId);
  console.log('Collecting item succeeded');
  return requestUtils.redirectTo(`/lists/${shoppingListId}`);
};



export { addItem,markItemAsCollected };
