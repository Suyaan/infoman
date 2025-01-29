window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector(".scroll-top-btn").style.display = "block";
    } else {
      document.querySelector(".scroll-top-btn").style.display = "none";
    }
  }

  // Smooth scrolling to top
  document.querySelector(".scroll-top-btn").addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  });

  const listButtons = document.querySelectorAll('.list-btn');

  listButtons.forEach(button => {
      button.addEventListener('click', () => {
          const productName = button.getAttribute('data-product'); 
  
          const dialog = document.createElement('dialog');
          dialog.classList.add('product-dialog');
  
          const dialogContent = document.createElement('div');
          dialogContent.innerHTML = `
              <h2>${productName}</h2> 
              <label for="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" required><br><br>
              <label for="date">Date of Purchase:</label>
              <input type="date" id="date" name="date" required><br><br>
              <label for="price">Price:</label>
              <input type="number" id="price" name="price" step="0.01" required><br><br>
              <label for="name">Purchased By:</label>
              <input type="text" id="name" name="name" required><br><br>
              <button type="submit">Submit</button>
          `;
  
          dialog.appendChild(dialogContent);
          document.body.appendChild(dialog);
  
          const submitButton = dialog.querySelector('button[type="submit"]');
          submitButton.addEventListener('click', () => {
              const quantity = document.getElementById('quantity').value;
              const date = document.getElementById('date').value;
              const price = document.getElementById('price').value;
              const name = document.getElementById('name').value;
  
              // Handle form submission (e.g., send data to server, store in local storage)
              console.log(`Product: ${productName}, Quantity: ${quantity}, Date: ${date}, Price: ${price}, Name: ${name}`); 
  
              dialog.close();
          });
  
          dialog.showModal();
      });
  });