import { rest } from "msw";

const KEY = process.env.REACT_APP_API_KEY;

export const handlers = [
  rest.get("https://pixabay.com/api/", (req, res, ctx) => {
    const key = req.url.searchParams.get("key");
    const query = req.url.searchParams.get("q");
    const imageType = req.url.searchParams.get("image_type");
    if (key === KEY && query === "jungle" && imageType === "photo") {
      return res(
        ctx.status(200),
        ctx.json({
          total: 2668,
          totalHits: 500,
          hits: [
            {
              id: 1822636,
              webformatURL:
                "https://pixabay.com/get/gc80b53dafdf5b0f7692381f65ef3655597013de1dfe3d7497c714456b8c5152db8bd4ede18798cf9c42d6cd9cb2fdd642afff4a5e7c077c90ba22c8093bbce78_640.jpg",
            },
          ],
        })
      );
    }
  }),
];
