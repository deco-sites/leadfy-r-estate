import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const idLoja = searchParams.get("idLoja");

    const options = {
      "method": "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer patUqFf5HCTrRvbOh.36b83a908c5a93aecf567c6393e78533261cc31a1b1dab58b60edb6cdae606ce`,
      },
      body: req.body,
    };

    const response = await fetch(
      `https://api.airtable.com/v0/appM6X96muuHZRmV1/${idLoja}`,
      options,
    );

    return new Response(response.statusText, {
      status: response.status,
      headers: req.headers,
    });
  },
};