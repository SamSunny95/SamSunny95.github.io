	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		nutAllergic: false,
		lactoseIntolerant: false,
		organic: true,
		price: 1.99,
		img: "Broccoli.JPG"
	},
	{
		name: "bread",
		nutAllergic: false,
		lactoseIntolerant: false,
		organic:false,
		price: 2.35,
		img:"bread.JPG"
	},
	{
		name: "salmon",
		nutAllergic: false,
		lactoseIntolerant: false,
		organic:false,
		price: 9.99,
		img:"salmon.JPG"
	},
	{
		name: "Granola Bars",
		nutAllergic: true,
		lactoseIntolerant: false,
		organic:false,
		price: 2.99,
		img:"granola.JPG"
	},
	{
		name: "Milk",
		nutAllergic: false,
		lactoseIntolerant: true,
		organic:true,
		price: 3.49,
		img:"milk.JPG"
	},
	{
		name: "Cheese",
		nutAllergic: false,
		lactoseIntolerant: true,
		organic:false,
		price: 5.99,
		img:"cheese.JPG"
	},
	{
		name: "Candy Bar",
		nutAllergic: true,
		lactoseIntolerant: false,
		organic:false,
		price: 1.99,
		img:"candy.JPG"
	},
	{
		name: "Apple",
		nutAllergic: false,
		lactoseIntolerant: false,
		organic:true,
		price: 0.99,
		img:"apple.JPG"
	},
	{
		name: "Banana",
		nutAllergic: false,
		lactoseIntolerant: false,
		organic:true,
		price: 0.79,
		img:"banana.JPG"
	},
	{
		name: "Pie",
		nutAllergic: true,
		lactoseIntolerant: true,
		organic:false,
		price: 4.99,
		img:"pie.JPG"
	}
];
	
products.sort((a, b) => {
    return a.price - b.price;
});


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organic) {
	let product_names = [];
	
	for (let i=0; i<prods.length; i+=1) {
		if(organic == prods[i].organic || organic==false)
		if ((restriction == "Nut Allergic") && (prods[i].nutAllergic == false)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Lactose Intolerant") && (prods[i].lactoseIntolerant == false)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	
	
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	let totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
