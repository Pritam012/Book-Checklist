const button = document.getElementById("testing");
const disp = document.getElementById("display");
let myLibrary = [];

//for popup-form
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  //constructor
function Book(title, author, pages , status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function() {
        return(`${title} by ${author}, ${pages} pages, ${status}`)
    }
    
}


function display(myLibrary) {
    myLibrary.forEach(book => {
         console.log(book.title);
        console.log(book.author);
       console.log(book.pages);
       console.log(book.status);
        console.log(book.info());

        
    });
}


// TO_DO form to accept book input mathi ko bata display content

const tempTitle = document.getElementById("title");
const tempAuthor = document.getElementById("author");
const tempPages  = document.getElementById("pages");
const tempStatus = document.getElementById("status");
tempStatus.checked = "";
// const tex = nam.textContent;


const sub = document.getElementById("submit");

// sub.addEventListener('click' , addBook);
sub.addEventListener('click' , displayCard);
    

//to customize the card add create elemnt ani p to the 
function displayCard(){
    const card = document.createElement('div');
    card.className = "cards";
    const card2 = card.classList.add('card2');
    
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const status = document.createElement('p');
    const statusChange = document.createElement('button');
    const removeBtn = document.createElement('button');
  
  removeBtn.textContent = "Remove Entry";
  statusChange.textContent = "Change current status";
    
  title.textContent= `Title: ${tempTitle.value}`;
    author.textContent = `by ${tempAuthor.value}`;
    pages.textContent = `${tempPages.value} pages`;
    if (tempStatus.checked == true){
        status.textContent = 'Read? Yes';
    } else  {
        status.textContent = 'Read? No';
    }

    statusChange.addEventListener('click', ( )=> {
        if (status.textContent == 'Read? Yes'){
            status.textContent = 'Read? No';
        } else if (status.textContent == 'Read? No')  {
            status.textContent = 'Read? Yes';
        }
    })

    
    removeBtn.addEventListener('click', () => {
        card.innerHTML = "";
        card.classList.remove('card2');
    })

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(status);
    card.appendChild(statusChange);
    card.appendChild(removeBtn);
    disp.appendChild(card);
    tempTitle.value = "";
    tempAuthor.value="";
    tempPages.value="";
    tempStatus.checked="";
    
}

