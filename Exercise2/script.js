// 2. Add a “light blue” background color and some padding to the <div>
let div = document.querySelector('div')
div.style.backgroundColor = 'lightblue'
div.style.padding = '16px 28px'
// 3. Do not display the <li> that contains the text node “John”.
document.querySelector('li').style.display = 'none'
// 4. Add a border to the <li> that contains the text node “Pete”.
document.querySelectorAll('li')[1].style.border = '3px solid cyan'
// 5. Change the font size of the whole body.
document.body.style.fontSize = '24pt'
// 6. Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if(div.style.backgroundColor == 'lightblue') {
    let lis = document.querySelectorAll('li')
    alert(`Hello ${lis[0].textContent} and ${lis[1].textContent}`)
}