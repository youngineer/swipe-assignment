export const validateProduct = (product) => {
    let isDisplayPopup;
    let { name, quantity, unitPrice, tax } = product;
  
    if (!name || name === "missing") {
        isDisplayPopup = true;
    //   product.name = prompt(promptText + "Enter the name: ");
    }
    if (quantity === undefined || quantity === -1) {
        isDisplayPopup = true;
    //   product.quantity = parseInt(prompt(promptText + "Enter the quantity: "), 10);
    }
    if (unitPrice === undefined || unitPrice === -1) {
        isDisplayPopup = true;
    //   product.unitPrice = parseFloat(prompt(promptText +  "Enter the unit price: "));
    }
    if (tax === undefined || tax === -1) {
        isDisplayPopup = true;
    //   product.tax = parseFloat(prompt(promptText + "Enter the tax: "));
    }
  
    return product, isDisplayPopup;
  };
  
  export const validateCustomer = (customer) => {
    let isDisplayPopup;
    let { customerName, phoneNumber, totalPurchaseAmount } = customer;
  
    if (!customerName || customerName === "missing") {
        isDisplayPopup = true;
    //   customer.customerName = prompt(promptText + "Enter the customer name: ");
    }
    if (!phoneNumber || phoneNumber === "missing") {
        isDisplayPopup = true;
    //   customer.phoneNumber = prompt(promptText + "Enter the phone number: ");
    }
    if (totalPurchaseAmount === undefined || totalPurchaseAmount === -1) {
        isDisplayPopup = true;
    //   customer.totalPurchaseAmount = parseFloat(prompt(promptText + "Enter the total purchase amount: "));
    }
  
    return customer, isDisplayPopup;
  };
  
  export const validateInvoice = (invoice) => {
    let isDisplayPopup;
    let { serialNumber, customerName, productName, quantity, price, tax, totalPrice, date } = invoice;
  
    if (!serialNumber || serialNumber === "missing") {
        isDisplayPopup = true;
    //   invoice.serialNumber = prompt(promptText + "Enter the serial number: ");
    }
    if (!customerName || customerName === "missing") {
        isDisplayPopup = true;
    //   invoice.customerName = prompt(promptText + "Enter the customer name: ");
    }
    if (!productName || productName === "missing") {
        isDisplayPopup = true;
    //   invoice.productName = prompt(promptText + "Enter the product name: ");
    }
    if (quantity === undefined || quantity === -1) {
        isDisplayPopup = true;
    //   invoice.quantity = parseInt(prompt(promptText + "Enter the quantity: "), 10);
    }
    if (price === undefined || price === -1) {
        isDisplayPopup = true;
    //   invoice.price = parseFloat(prompt(promptText + "Enter the price: "));
    }
    if (tax === undefined || tax === -1) {
        isDisplayPopup = true;
    //   invoice.tax = parseFloat(prompt(promptText + "Enter the tax: "));
    }
    if (totalPrice === undefined || totalPrice === -1) {
      invoice.totalPrice = (1 + invoice.tax * 0.01) * invoice.quantity * invoice.price;
    };

    if (!date || date === "missing") {
        isDisplayPopup = true;
    //   invoice.date = prompt(promptText + "Enter the date (YYYY/DD/MM): ");
    //   invoice.date = new Date(invoice.date); 
    }
  
    return invoice, isDisplayPopup;
  };