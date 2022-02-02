import fetchData from "./fetchData";
import { server } from "../mocks/server";

beforeAll(() => server.listen());
afterAll(() => server.close());

it("should return an array of objects", async () => {
  const result = await fetchData("jungle");
  expect(result).toEqual([
    {
      id: 1822636,
      webformatURL:
        "https://pixabay.com/get/gc80b53dafdf5b0f7692381f65ef3655597013de1dfe3d7497c714456b8c5152db8bd4ede18798cf9c42d6cd9cb2fdd642afff4a5e7c077c90ba22c8093bbce78_640.jpg",
    },
  ]);
});
