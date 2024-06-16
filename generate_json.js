const fs = require("fs");

// Define the patterns
const patterns = [
  { name: "Swords", count: 14 },
  { name: "Wands", count: 14 },
  { name: "Cups", count: 14 },
  { name: "Pentacles", count: 14 },
  { name: "Other", count: 22 },
];

const result = [
  [
    { name: "Swords", count: 14 },
    { name: "Pentacles", count: 12 },
  ],
  [
    { name: "Wands", count: 14 },
    { name: "Other", count: 12 },
  ],
  [
    { name: "Cups", count: 14 },
    { name: "Pentacles", count: 2 },
    { name: "Other", count: 10 },
  ],
];

const luckTypes = [
  {
    name: "Love",
    image:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/a.jpg",
    count: 26,
  },
  {
    name: "Career",
    image:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/b.jpg",
    count: 26,
  },
  {
    name: "Fortune",
    image:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/c.jpg",
    count: 26,
  },
];

let globalIndex = 1;

//Swords love 14 a
for (let i = 1; i <= 14; i++) {
  const mypattern = "Swords";
  const lucktype = "love";
  const data = {
    name: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    description: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    image:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/a.jpg",
    content_url:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/a.jpg",
    attributes: [
      {
        trait_type: "Pattern",
        value: mypattern,
      },
      {
        trait_type: "lucktype",
        value: lucktype,
      },
    ],
  };

  fs.writeFileSync(
    `./json/tarabbit_${globalIndex}.json`,
    JSON.stringify(data, null, 2)
  );
  globalIndex++;
}

//Pentacles love 12 a
for (let i = 1; i <= 12; i++) {
  const mypattern = "Pentacles";
  const lucktype = "love";
  const data = {
    name: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    description: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    image:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/a.jpg",
    content_url:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/a.jpg",
    attributes: [
      {
        trait_type: "Pattern",
        value: mypattern,
      },
      {
        trait_type: "lucktype",
        value: lucktype,
      },
    ],
  };

  fs.writeFileSync(
    `./json/tarabbit_${globalIndex}.json`,
    JSON.stringify(data, null, 2)
  );
  globalIndex++;
}

//Wands Career 14 b
for (let i = 1; i <= 14; i++) {
  const mypattern = "Wands";
  const lucktype = "Career";
  const data = {
    name: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    description: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    image:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/b.jpg",
    content_url:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/b.jpg",
    attributes: [
      {
        trait_type: "Pattern",
        value: mypattern,
      },
      {
        trait_type: "lucktype",
        value: lucktype,
      },
    ],
  };

  fs.writeFileSync(
    `./json/tarabbit_${globalIndex}.json`,
    JSON.stringify(data, null, 2)
  );
  globalIndex++;
}

//Other Career 12 b
for (let i = 1; i <= 12; i++) {
  const mypattern = "Other";
  const lucktype = "Career";
  const data = {
    name: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    description: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    image:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/b.jpg",
    content_url:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/b.jpg",
    attributes: [
      {
        trait_type: "Pattern",
        value: mypattern,
      },
      {
        trait_type: "lucktype",
        value: lucktype,
      },
    ],
  };

  fs.writeFileSync(
    `./json/tarabbit_${globalIndex}.json`,
    JSON.stringify(data, null, 2)
  );
  globalIndex++;
}

//Cups Fortune 14 c
for (let i = 1; i <= 14; i++) {
  const mypattern = "Cups";
  const lucktype = "Fortune";
  const data = {
    name: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    description: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    image:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/c.jpg",
    content_url:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/c.jpg",
    attributes: [
      {
        trait_type: "Pattern",
        value: mypattern,
      },
      {
        trait_type: "lucktype",
        value: lucktype,
      },
    ],
  };

  fs.writeFileSync(
    `./json/tarabbit_${globalIndex}.json`,
    JSON.stringify(data, null, 2)
  );
  globalIndex++;
}

//Pentacles Fortune 2 c
for (let i = 1; i <= 2; i++) {
  const mypattern = "Pentacles";
  const lucktype = "Fortune";
  const data = {
    name: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    description: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    image:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/c.jpg",
    content_url:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/c.jpg",
    attributes: [
      {
        trait_type: "Pattern",
        value: mypattern,
      },
      {
        trait_type: "lucktype",
        value: lucktype,
      },
    ],
  };

  fs.writeFileSync(
    `./json/tarabbit_${globalIndex}.json`,
    JSON.stringify(data, null, 2)
  );
  globalIndex++;
}

//Other Fortune 10 c
for (let i = 1; i <= 10; i++) {
  const mypattern = "Other";
  const lucktype = "Fortune";
  const data = {
    name: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    description: `Tarabbit Genesis Lucky Card ${globalIndex}`,
    image:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/c.jpg",
    content_url:
      "https://raw.githubusercontent.com/rabbitofficial/tarabbit-asset/main/nft/c.jpg",
    attributes: [
      {
        trait_type: "Pattern",
        value: mypattern,
      },
      {
        trait_type: "lucktype",
        value: lucktype,
      },
    ],
  };

  fs.writeFileSync(
    `./json/tarabbit_${globalIndex}.json`,
    JSON.stringify(data, null, 2)
  );
  globalIndex++;
}
