	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		nutAllergic: false,
		lactoseIntolerant: false,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		nutAllergic: false,
		lactoseIntolerant: false,
		organic:false,
		price: 2.35
	},
	{
		name: "salmon",
		nutAllergic: false,
		lactoseIntolerant: false,
		organic:false,
		price: 10.00
	},
	{
		name: "Granola Bars",
		nutAllergic: true,
		lactoseIntolerant: false,
		organic:false,
		price: 2.99
	},
	{
		name: "Milk",
		nutAllergic: false,
		lactoseIntolerant: true,
		organic:true,
		price: 3.49
	},
	{
		name: "Cheese",
		nutAllergic: false,
		lactoseIntolerant: true,
		organic:false,
		price: 5.99
	},
	{
		name: "Candy Bar",
		nutAllergic: true,
		lactoseIntolerant: false,
		organic:false,
		price: 1.99
	},
	{
		name: "Apple",
		nutAllergic: false,
		lactoseIntolerant: false,
		organic:true,
		price: 0.99
	},
	{
		name: "Banana",
		nutAllergic: false,
		lactoseIntolerant: false,
		organic:true,
		price: 0.79
	},
	{
		name: "Pie",
		nutAllergic: true,
		lactoseIntolerant: true,
		organic:false,
		price: 4.99
	}
];
	
products.sort((a, b) => {
    return a.price - b.price;
});


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Nut Allergic") && (prods[i].nutAllergic == false)){
			product_names.push(prods[i].name + " - " + prods[i].price);
		}
		else if ((restriction == "Lactose Intolerant") && (prods[i].lactoseIntolerant == false)){
			product_names.push(prods[i].name + " - " + prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name + " - " + prods[i].price);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
