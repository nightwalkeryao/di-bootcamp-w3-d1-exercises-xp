// 2. Using Javascript: 
// 2.1 Retrieve the div and console.log it
let div = document.querySelector('#container')
console.log(`div: ${div}`)
// 2.2 Change the name “Pete” to “Richard”
document.querySelector('.list').children[1].textContent = "Richard"
// 2.3 Change each first name of the two <ul>'s to your name.
for (const li of document.querySelectorAll('li')) {
    li.textContent = "Yao"
}
// 2.4 Delete the <li> that contains the text node “Sarah”.
document.querySelectorAll('.list')[1].children[1].remove()
// 3. Bonus - Using Javascript:
// 3.1 Add a class called student_list to both of the <ul>'s.
for (const ul of document.querySelectorAll('ul')) {
    ul.classList.add('student_list')
}
// 3.2 Add the classes university and attendance to the first <ul>.
document.querySelector('ul').classList.add('university', 'attendance')