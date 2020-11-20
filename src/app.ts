import express, { Application } from "express";

const app: Application = express();

const port = 6000;

interface Restaurant {
  name: string;
  id: number;
  typeOfKitchen: string;
  description: string;
  rating: number;
}

const Restaurants: Restaurant[] = [
  {
    name: "Ristorante Alessandro",
    id: 2,
    typeOfKitchen: "Italiana",
    description: "oijhef0wjfw-ofkwfk",
    rating: 4.5 / 5,
  },
  {
    name: "Ristorante Prova",
    id: 2,
    typeOfKitchen: "Italiana",
    description: "oijhef0wjfw-ofkwfk",
    rating: 4.5 / 5,
  },
  {
    name: "Ristorante Mattia",
    id: 2,
    typeOfKitchen: "Italiana",
    description: "oijhef0wjfw-ofkwfk",
    rating: 4.5 / 5,
  },
];

const filterList = (param: string): Restaurant[] => {
  const filteredList = Restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(param)
  );
  return filteredList;
};

app.get("/restaurants", (req, res) => {
  const query = req.query.name;
  const filteredList = filterList(query);
  console.log(filteredList);
  res.send(filteredList);
});

app.listen(port, () => console.log(`listening on port: ${port}`));
