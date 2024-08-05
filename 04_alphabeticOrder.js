/*
4. Arrange in alphabetical order.
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.
*/

const books = [
    {
        title : 'Swami and Friends',
        author : 'Narayan',
        year : 1935 ,
    },
    {
        title : 'Gitanjali',
        author : 'Rabindranath Tagore',
        year : 1910 ,
    },
    {
        title : 'Wish I could Tell You',
        author : 'Durjoy Dutta',
        year : 2019,
    },
    {
        title : 'Five Point Someone',
        author : 'Chetan Bhagat',
        year : 2004,
    },
    {
        title : 'Wise or Otherwise',
        author : 'Sudha Murthy',
        year : 2002,
    }
]

function newBooks(arr,callback){
    const titles = arr.map((book)=>book.title);
    callback(titles);
}

function sort(arr){
    arr.sort();
    console.log(arr.join(','));
}

newBooks(books,sort);