// 2. In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
document.querySelector('div').setAttribute('id', 'socialNetworkNavigation')
// 3. We are going to add a new <li> to the <ul>.
// 3.1 First, create a new <li> tag (use the createElement method).
let newLi = document.createElement('li')
// 3.2 Create a new text node with “Logout” as its specified text. 
let newText = document.createTextNode('Logout')
// 3.3 Append the text node to the newly created list node (<li>).
newLi.append(newText)
// 3.4 Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
let ul = document.querySelector('ul')
ul.appendChild(newLi)
// 4. Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
let firstLi = ul.firstElementChild
let lastLi = ul.lastElementChild
console.log(`First li: ${firstLi.textContent}`)
console.log(`Last li: ${lastLi.textContent}`)