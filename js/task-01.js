

const ulQuerySelector = document.querySelector("#categories");
console.log(ulQuerySelector)
const childrenFromCateogies = Array.from(ulQuerySelector.children);

console.log("Number of categories", childrenFromCateogies.length);


childrenFromCateogies.map((el) => {
  let qtyOfElems = 0;
  const childrenOfElinArr = el.children;
 
  Array.from(childrenOfElinArr).map((el) => {
    if (el.children.length !== 0) {
      qtyOfElems = el.children.length;
      
      
    } 
  });

  console.log("Category:", el.firstChild.nextSibling.innerText);
  console.log("Elements:", qtyOfElems);

 
});

