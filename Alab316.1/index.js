// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


const mainEl = document.querySelector("main");
// const color = var()
mainEl.style.backgroundColor = 'var(--main-bg)';


mainEl.innerHTML = '<h1>DOM Manipulation</h1>'
mainEl.classList.add("flex-ctr")


const topMenuEl = document.getElementById("top-menu");
topMenuEl.setAttribute("style", "height:100%")
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around")


for (const link of menuLinks) {
    const a = document.createElement("a")
    a.href = link.href;
    a.text = link.text;
    topMenuEl.appendChild(a)

}