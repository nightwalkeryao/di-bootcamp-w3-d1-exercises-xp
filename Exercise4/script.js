// 2. In the js file, create an array called allBooks. 
// 3. Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
let allBooks = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        image: 'https://m.media-amazon.com/images/I/413V3sIKSJL._AC_SY780_.jpg',
        alreadyRead: false
    }, {
        title: 'L\'étranger',
        author: 'Albert Camus',
        image: 'https://doxaweb.files.wordpress.com/2015/04/stranger-camus.jpg',
        alreadyRead: true
    },
]
// 4. Requirements : All the instructions below need to be coded in the js file
// 4.1 Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
let table = document.createElement('table')
let tr = document.createElement('tr')
let ths = ['Title', 'Author', 'Image', 'Alread read']
ths.forEach(a => {
    let th = document.createElement('th')
    th.textContent = a
    tr.appendChild(th)
})
table.appendChild(tr)
allBooks.forEach(book => {
    let tr = document.createElement('tr')
    for(a in book) {
        let td = document.createElement('td')
        if(a == 'image') {
            let img = document.createElement('img')
            img.src = book[a]
            img.width = '100'
            td.appendChild(img)
        } else {
            td.textContent = book[a]
        }
        tr.appendChild(td)
    }
    if(book.alreadyRead)
        tr.style.color = 'red'
    table.appendChild(tr)
})

document.querySelector('div').appendChild(table)