let users = [];

// Registration Function
function registerUser(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if user already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert("This email is already registered. Please use a different email.");
    } else {
        // Store new user details
        users.push({ name, email, password });
        alert(`Registered successfully: ${name}`);
        
        // Reset the form
        document.getElementById("registerForm").reset();
        
        // Display updated user list
        displayUsers();
    }
}



// Function to display registered users
function displayUsers() {
    const userDisplay = document.getElementById("userDisplay");
    userDisplay.innerHTML = ""; // Clear existing content

    users.forEach(user => {
        const userInfo = document.createElement("p");
        userInfo.textContent = `Name: ${user.name}, Email: ${user.email}`;
        userDisplay.appendChild(userInfo);
    });
}



const admin = { username: "admin1", passwordA: "a123" };

// Admin Login Function
function loginAdmin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const passwordA = document.getElementById("passwordA").value;

    // Check if username and password match
    if (admin.username === username && admin.passwordA === passwordA) {
        alert("Login Success");
        showAdminView();
    } else {
        alert("Invalid Login ID");
        // Reset the form
        document.getElementById("loginAForm").reset();
    }
     
}

// Function to show Admin View and hide Login form
function showAdminView() {
    document.getElementById("loginA").style.display = "none";
    document.getElementById("adminView").style.display = "block";

    
   
}

// Book Inventory 
let books = [];


// Admin - Add Book
function addBook(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const price = parseFloat(document.getElementById("price").value);
    const newBook = { title, author, genre, price };
    books.push(newBook);

    displayBooks();
    document.getElementById("adminForm").reset();
}


// Function to display Books
function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML =""; // Clear existing content

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.innerHTML = `${book.title} by ${book.author} - Rs.${book.price} `;
        bookList.appendChild(bookItem);
    });
}

const user = { lemail: "u@gmail.com", lpassword: "123" };

// Admin Login Function
function loginUser(event) {
    event.preventDefault();
    const lemail = document.getElementById("lemail").value;
    const lpassword = document.getElementById("lpassword").value;

    // Check if username and password match
    if (user.lemail === lemail && user.lpassword === lpassword) {
        alert("Login Success");
        showUserView();
        
    } else {
        alert("Invalid Login ID");
        // Reset the form
        document.getElementById("loginForm").reset();
    }
     
}

const book1 = [
    { title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", price: 1500 },
    { title: "Fantastic Beasts", author: "J.K. Rowling", genre: "Fantasy", price: 1700 },
    { title: "Sherlock Holmes", author: "Sir Arthur Conan Doyle", genre: "Adventure", price: 900 },
    { title: "The First Teacher", author: "Chinghiz Aitmatov", genre: "Novel", price: 500 },
    { title: "The White Ship", author: "Chinghiz Aitmatov", genre: "Novel", price: 850 }
];

// Cart array to hold selected books
let cart = [];

// Search Books
function searchBooks() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = book1.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
    );

    displayBooks1(filteredBooks);
}

// Display books with "Add to Cart" button
function displayBooks1(booksToDisplay = book1) {
    const bookList = document.getElementById("bookList1");
    bookList.innerHTML = ""; // Clear existing content

    booksToDisplay.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.innerHTML = `${book.title} (${book.genre}) by ${book.author} - Rs.${book.price}`;
        
        // Add to Cart button
        const addToCartBtn = document.createElement("button");
        addToCartBtn.innerText = "Add to Cart";
        addToCartBtn.onclick = () => addToCart(book);

        bookItem.appendChild(addToCartBtn);
        bookList.appendChild(bookItem);
    });
}

// Add book to cart
function addToCart(book) {
    cart.push(book);
    updateCart();
}

// Update cart display and total
function updateCart() {
    const cartList = document.getElementById("cartList");
    const cartTotal = document.getElementById("cartTotal");

    cartList.innerHTML = ""; // Clear current cart display

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `${item.title} - Rs.${item.price}`;

        // Remove from Cart button
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.onclick = () => removeFromCart(index);

        cartItem.appendChild(removeBtn);
        cartList.appendChild(cartItem);
    });

    cartTotal.innerText = total.toFixed(2);
}

// Remove a book from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Checkout function
function checkout() {
    alert("Proceeding to checkout...");
    cart = [];
    updateCart();
}

// Initial display of all books
displayBooks1();


// Function to show Admin View and hide Login form
function showUserView() {
    document.getElementById("login").style.display = "none";
    document.getElementById("search").style.display = "block";
    document.getElementById("cart").style.display = "block";

    
   
}