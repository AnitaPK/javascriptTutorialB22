
// x = 5;

// = asign 
// x == 5  true
// x == '5' true       
// === 
// x === 5   true 
// x === '5' false


 


arr1 = [1,2,3,4];
arr2 = [4,7,8];

// for arr1[0]
var intersection = arr1.filter(x=>arr2.includes(x));
console.log(intersection);

// 1. Address Book Application:
// Create an address book application where each contact is represented as an object with properties like name, email, phone, and address.
// Implement functionalities to add new contacts, edit existing contacts, delete contacts, and search for contacts by name or email.

const contact={
    newContacts:[],
    name1:'xyz',
    email:'a@gmail.com',
    phone:1234567890,
    address:'Pune',
//  Function to add a new contact
    addNewContact: function(name1,email,phone, address) {
    const newContact = {
      name1: name1,
      email: email,
      phone: phone,
      address:address
    };
    console.log(newContact);
    this.newContacts.push(newContact);
    // this.displayContacts();
  },
  // displayContacts:function(){
  //   this.newContacts.forEach(contact => {
  //     console.log(contact.name1);
  // })}
  }

contact.addNewContact('john','john@gmail.com',1234567890,'pune');
contact.addNewContact('john11','11john@gmail.com',1234567890,'pune');

// contact.displayContacts();

contact.newContacts.forEach(elmn=>{
  // console.log(elmn);
  for (i in elmn){
    console.log(elmn[i]);
  }
})


//2. Inventory Management System:
// Develop an inventory management system for a small business where products are represented as objects with properties like id, name, quantity, price, and category.
// Implement features for adding new products, updating product details, deleting products, and generating reports on inventory levels.
// 3. Bank Account Management:
// Build a simple bank account management system where each account is represented as an object with properties like accountNumber, accountHolder, balance, etc.
// Implement functionalities to create new accounts, deposit funds, withdraw funds, transfer funds between accounts, and view account details.
// 4. Library Catalog System:
// Develop a library catalog system where each book is represented as an object with properties like title, author, ISBN, genre, etc.
// Implement features for adding new books to the catalog, updating book information, removing books from the catalog, and searching for books by title, author, or genre.
// 5. Restaurant Menu Management:
// Create a restaurant menu management system where each menu item is represented as an object with properties like name, description, price, category, etc.
// Implement functionalities to add new menu items, update item details, remove items from the menu, and categorize items based on their category.
