import { renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import * as listService from "../services/listService.js";
import * as itemService from "../services/itemService.js"
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const viewMainPage = async (request) => {
  const data = {
    lists: await listService.getAllActiveLists(),
  };
  return new Response(await renderFile("shoppinglist.eta", data), responseDetails);
};


const viewMainPageList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");

  const data = {
    shoppingList: await listService.findById(urlParts[2]),
    items: await itemService.getAllItemsForList(urlParts[2]), 
  };
  return new Response(await renderFile("itemlist.eta", data), responseDetails);

};

const getCountShoppingLists = async () => {
  return await listService.countShoppingLists();
  
};

const getCountShoppingListItems = async () => {
  return await itemService.countShoppingListItems();

};

const renderListMainPage = async () => {
  const data = {
    listscount: await getCountShoppingLists(),
    itemcount: await getCountShoppingListItems(),
  };
  return new Response(await renderFile("mainpage.eta", data), responseDetails);
  };


const addList = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");

  await listService.create(name);

  return requestUtils.redirectTo("/lists");
};


const deactivateList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  await listService.deactivateList(urlParts[2]);

  return requestUtils.redirectTo("/lists");
};



export { addList,viewMainPage,deactivateList,renderListMainPage,viewMainPageList};
