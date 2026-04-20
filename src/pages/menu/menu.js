import './menu.css';

export default function renderMenuContentPage(node) {
const menuContainer = document.createElement("div");
menuContainer.className = "menu-container";

const menuTitle = document.createElement("h1");
menuTitle.textContent = "Our Menu";
menuContainer.appendChild(menuTitle);

const menuItems = [
  {
    name: "Herb-Crusted Lamb",
    description:
      "Tender lamb with a flavorful herb crust, served with roasted vegetables and a mint sauce",
    price: "$29.99",
  },
  {
    name: "Truffle-Infused Pasta",
    description:
      "Fresh pasta tossed in a creamy truffle sauce, topped with shaved parmesan",
    price: "$24.99",
  },
  {
    name: "Succulent Steak",
    description:
      "Juicy steak grilled to perfection, served with garlic mashed potatoes and sautéed green beans",
    price: "$34.99",
  },
  {
    name: "Mouth-Watering Seafood",
    description:
      "A selection of the freshest seafood, including shrimp, scallops, and fish, served with a lemon butter sauce",
    price: "$31.99",
  },
  {
    name: "Gourmet Salad",
    description:
      "Mixed greens with cherry tomatoes, cucumbers, red onions, and a balsamic vinaigrette",
    price: "$12.99",
  },
  {
    name: "Decadent Chocolate Cake",
    description:
      "Rich chocolate cake with a molten center, served with vanilla ice cream",
    price: "$8.99",
  },
];

const menuList = document.createElement("ul");
menuList.className = "menu-list";

menuItems.forEach((item) => {
  const menuItem = document.createElement("li");
  menuItem.className = "menu-item";

  const itemName = document.createElement("h2");
  itemName.textContent = item.name;

  const itemDescription = document.createElement("p");
  itemDescription.textContent = item.description;

  const itemPrice = document.createElement("p");
  itemPrice.className = "menu-price";
  itemPrice.textContent = item.price;
  menuItem.append(itemName, itemDescription, itemPrice);

  menuList.appendChild(menuItem);
});

menuContainer.appendChild(menuList);
node.appendChild(menuContainer);
}