const menuData = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const buttonData = [{
  text: "All",
  class: ["btn", "btn-outline-dark", "btn-item"],
}, {
  text: "Korea",
  class: ["btn", "btn-outline-dark", "btn-item"],
}, {
  text: "Japan",
  class: ["btn", "btn-outline-dark", "btn-item"],
}, {
  text: "China",
  class: ["btn", "btn-outline-dark", "btn-item"],
}]

let navDiv = document.querySelector(".btn-container");
let menuContainer = document.querySelector(".section-center");
menuContainer.classList.add("row");

//Create menu buttons
buttonData.forEach(function (button) {
  let buttonElement = document.createElement("button");

  button.class.forEach(function (className) {
    buttonElement.classList.add(className);
  });

  buttonElement.innerHTML = button.text;
  buttonElement.addEventListener("click", function (event) {
    filterContent(button.text);
  });

  navDiv.appendChild(buttonElement);
});

function renderMenu(menuList = menuData) {
  // Clear menu container
  while (menuContainer.firstChild) {
    menuContainer.removeChild(menuContainer.firstChild);
  }

  // Create and append menu elements to container
  menuList.forEach(function (menu) {
    let menuItems = document.createElement("div");
    menuItems.classList.add("menu-items", "col-lg-6", "col-sm-12");

    let picture = document.createElement("img");
    picture.setAttribute("alt", "chicken Ramen");
    picture.setAttribute("src", menu.img);
    picture.classList.add("photo");

    let menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-info");

    let menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");

    let titleHeader = document.createElement("h4");
    titleHeader.innerHTML = menu.title;

    let h4 = document.createElement("h4");
    h4.classList.add("price");
    h4.innerHTML = menu.price;

    let menuText = document.createElement("div");
    menuText.classList.add("menu-text");
    menuText.innerHTML = menu.desc;

    menuTitle.appendChild(titleHeader);
    menuTitle.appendChild(h4);
    menuItems.appendChild(picture);
    menuItems.appendChild(menuInfo);
    menuInfo.appendChild(menuTitle);
    menuInfo.appendChild(menuText);
    menuContainer.appendChild(menuItems);
  });
}

function filterContent(menuName) {
  const filteredMenu = menuData.filter(function (menu) {
    if (menu.category === menuName || menuName === "All") {
      return menu;
    };
  });

  renderMenu(filteredMenu);
}

renderMenu(menuData);
