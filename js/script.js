let elUl = document.querySelector("ul")

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(json => localStorage.setItem("information", JSON.stringify(json)));

  let usersData = JSON.parse(localStorage.getItem("information"));

  usersData.forEach(object => {
    let elLi = document.createElement("li")
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let price = document.createElement("p");
      let p = document.createElement("p");
      let category = document.createElement("p");
      let rate = document.createElement("p");
      let count =document.createElement("p");
let button = document.createElement("button")
let rating = object.rating

      img.src = object.image
      h3.textContent = object.title
      price.textContent = `price: ${object.price}$`
      p.textContent = object.description;
category.textContent = `category: ${object.category}`
rate.textContent = `rate: ${rating.rate}/ 5`
count.textContent = `count: ${rating.count}`
button.textContent = `delate`

      elLi.className = ("li")
      img.className = ("img")
      h3.className = ("h3")
      price.className = ("price")
      p.className = ("p")
      button.className = ("button btn btn-danger")

      button.addEventListener("click", () => {
        elLi.remove()
      })

elUl.appendChild(elLi)
elLi.appendChild(img)
elLi.appendChild(h3)
elLi.appendChild(price)
elLi.appendChild(p)
elLi.appendChild(category)
elLi.appendChild(rate)
elLi.appendChild(count)
elLi.appendChild(button)


  });