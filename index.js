const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1]);
// console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i].innerHTML);
    parent.children[i].style.color = "orange"
}

const dayOne = document.querySelector('.day')
// console.log(dayOne);
// console.log(dayOne.parentElement);
dayOne.nextElementSibling.style.color = "red";


console.log("nodes: ", parent.childNodes);
// 15:00 child nodes #33