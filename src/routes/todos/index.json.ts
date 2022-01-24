import type { RequestHandler } from "@sveltejs/kit";
// import { api } from "./_api";

export const get = (request) => {
  // return api(request);
}

export const post= (request) => {
  return api(request, {
    created_at: new Date(),
    text: request.body.get("text"),
    done: false
  });
}