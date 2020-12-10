/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];
    
    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];
            
            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    return listings;
}

generateListings(20);
//ForEach listing size
console.log(generateListings(37));
const facilities = generateListings(37);
facilities.forEach((singleItem) => console.log(singleItem.size));

// 37 list price
const priceOfFacilities = facilities.map((singleItem) => singleItem.price);
console.log(priceOfFacilities);

//cheap price facility
const cheapPricedFacilities = facilities.filter((singleItem) => singleItem.price <= 1000);
console.log(cheapPricedFacilities);

//expensive price
const expensivePrices = facilities.map((singleItem) => singleItem.price).filter((singleItem) => singleItem > 1000);
console.log(expensivePrices);

//parking list
const havingParkingFacilities = facilities.filter((singleItem) => singleItem.facilities.includes("Parkering"));
console.log(havingParkingFacilities);

//last listning ex
const listings = generateListings(20); // objects
const filter = {
type: 'Farm',
minPrize: 100,
minSize: 500,
hasGarden:true,
};
const filterListings = (listings, filter) => {
// use map and filter to remove items from listings such that
// all properties from the filter variable are used
if('type' in filter){
    listings = listings.filter(item => item.type === filter.type);
}
if('minPrize' in filter){
    listings=listings.filter(item => item.price>=filter.minPrize);
}
if('minSize' in filter){
    listings=listings.filter(item => item.size>=filter.minSize);
}
if('hasGarden' in filter){
    listings=listings.filter(item => item.hasGarden===filter.hasGarden);
}
return listings;
}
const farmListings = filterListings(listings, filter);
console.log(farmListings);
