import { serve } from "https://deno.land/std@0.202.0/http/server.ts";
import { configure, renderFile } from "./deps.js";
import * as itemController from "./controllers/itemController.js"; 
import * as listController from "./controllers/listController.js";


configure({
  views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
  const url = new URL(request.url);
  if (url.pathname === "/" && request.method === "GET") {
    return listController.renderListMainPage();
  } else if (url.pathname === "/lists" && request.method === "GET") {
    return listController.viewMainPage(request);
  } else if (url.pathname === "/lists" && request.method === "POST") {
    return listController.addList(request);
  } else if (url.pathname.match(/\/lists\/[0-9]+\/deactivate/) && request.method === "POST") {
    return listController.deactivateList(request);
  } else if (url.pathname.match(/\/lists\/[0-9]+/) && request.method === "GET") {
    return await listController.viewMainPageList(request);
  } else if (url.pathname.match(/\/lists\/[0-9]+\/items\/[0-9]+\/collect/) && request.method === "POST") {
      return itemController.markItemAsCollected(request);
  } else if (url.pathname.match(/\/lists\/[0-9]+\/items/) && request.method === "POST") {
      return itemController.addItem(request);
  } else {
    return new Response("Not found", { status: 404 });
  }
};


serve(handleRequest, { port: 7777 });



