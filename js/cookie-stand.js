var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
function CookieStand(minCust, maxCust, avgCookiesPerCust, cHours, total, store) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cHours = cHours;
  this.total = total;
  this.store = store;
}

CookieStand.prototype.randCustomer = function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log('Create a random number of Customers');
};

CookieStand.prototype.generateHourly = function() {
    for (var i = 0; i < hours.length; i++) {
    // console.log('Inside FOR loop');
    var cookies = Math.floor((this.randCustomer() * this.avgCookiesPerCust));
    // console.log('before total ' + cookies);
    this.cHours.push(cookies);
    this.total += cookies;
  }
    console.log('After push method ' + this.cHours);
    console.log('TOTAL amount of cookies ' + this.total);
};

CookieStand.prototype.render = function() {

  this.generateHourly();
  var ulEl = document.createElement('ul');
  // Create a UL Element
  ulEl.appendChild(document.createTextNode(this.store));
  // Append a textNode to the UL element that will display the name of the store
  var storeDataEl = document.getElementById('storeData');
  //  Assign the store_data element to a variable; document.getElementById
  storeDataEl.appendChild(ulEl);
  // Append the Ul element to your HTML document

  for (var i = 0; i <hours.length; i++) {
    var liEl = document.createElement('li');
    // Create an LI element
    liEl.textContent = 'At ' + hours[i] + ' we sold ' + this.cHours[i] + ' cookies';
    // Assign the content of the hours array and hourly cookies to the LI; '10am: 125'
    ulEl.appendChild(liEl);
    // Append the LI element to the UL element as a Child
  };

  var liEl = document.createElement('li');
  // Create an LI element
  liEl.textContent = 'Total number of cookies is: ' + this.total;
  // Assign the content of your stores Daily Total to the LI element
  ulEl.appendChild(liEl);
  // Append the LI element to the UL as a Child

};

var PikePlace = new CookieStand(17, 88, 5.2, [], 0, "Pike Place Market");
var SeaTac = new CookieStand(6, 44, 1.2, [], 0, "SeaTac Airport");
var SouthCenter = new CookieStand(11, 38, 1.9, [], 0, "SouthCenter Mall");
var Bellevue = new CookieStand(20, 48, 3.3, [], 0, "Bellevue Square");
var Alki = new CookieStand(3, 24, 2.6, [], 0, "Alki");

  var locations = ['PikePlace', 'SeaTac', 'SouthCenter', 'Bellevue', 'Alki'];
  for (var i = 0; i < locations.length; i++) {
    console.log('inside for loop ' + locations[i]);
    var  give = locations[i];
    console.log('should be ' + give);
    // give.render();
};

PikePlace.render();
SeaTac.render();
SouthCenter.render();
Bellevue.render();
Alki.render();







// var pikePlaceMarket = {
//   minCust: 17,
//   maxCust: 88,
//   avgCookiesPerCust: 5.2,
//   total: 0,
//   cHours: [],

  // randCustomer: function (minCust, maxCust) {
  //     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  //     console.log('Create a random number of Customers');
  // },
  // generateHourly: function() {
  //     for (var i = 0; i < hours.length; i++) {
  //       // console.log('Inside FOR loop');
  //       var cookies = Math.floor((this.randCustomer() * this.avgCookiesPerCust));
  //       // console.log('before total ' + cookies);
  //       this.cHours.push(cookies);
  //       // add random number of cookies to cHours array!
  //       this.total += cookies;
  //       // add each number of cookies per hour to TOTAL amount of cookies
  //     }
  // },

//     render: function() {
//       this.generateHourly();
//       var ulEl = document.createElement('ul');
//       // Create a UL Element
//       ulEl.appendChild(document.createTextNode("Pike Place Market"));
//       // Append a textNode to the UL element that will display the name of the store
//       var storeDataEl = document.getElementById('storeData');
//       //  Assign the store_data element to a variable; document.getElementById
//       storeDataEl.appendChild(ulEl);
//       // Append the Ul element to your HTML document
//
//       for (var i = 0; i <hours.length; i++) {
//         var liEl = document.createElement('li');
//         // Create an LI element
//         liEl.textContent = 'At ' + hours[i] + ' we sold ' + this.cHours[i] + ' cookies';
//         // Assign the content of the hours array and hourly cookies to the LI; '10am: 125'
//         ulEl.appendChild(liEl);
//         // Append the LI element to the UL element as a Child
//       };
//
//       var liEl = document.createElement('li');
//       // Create an LI element
//       liEl.textContent = 'Total number of cookies is: ' + this.total;
//       // Assign the content of your stores Daily Total to the LI element
//       ulEl.appendChild(liEl);
//       // Append the LI element to the UL as a Child
//     }
// };
// pikePlaceMarket.render();










// var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
// var pikePlaceMarket = {
//   minCust: 17,
//   maxCust: 88,
//   avgCookiesPerCust: 5.2,
//   total: 0,
//   cHours: [],
//
//   randCustomer: function (minCust, maxCust) {
//       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//       console.log('Create a random number of Customers');
//   },
//   generateHourly: function() {
//       for (var i = 0; i < hours.length; i++) {
//         // console.log('Inside FOR loop');
//         var cookies = Math.floor((this.randCustomer() * this.avgCookiesPerCust));
//         // console.log('before total ' + cookies);
//         this.cHours.push(cookies);
//         // add random number of cookies to cHours array!
//         this.total += cookies;
//         // add each number of cookies per hour to TOTAL amount of cookies
//       }
//   },
//
//   //
//   //
//     render: function() {
//       this.generateHourly();
//       var ulEl = document.createElement('ul');
//       // Create a UL Element
//       ulEl.appendChild(document.createTextNode("Pike Place Market"));
//       // Append a textNode to the UL element that will display the name of the store
//       var storeDataEl = document.getElementById('storeData');
//       //  Assign the store_data element to a variable; document.getElementById
//       storeDataEl.appendChild(ulEl);
//       // Append the Ul element to your HTML document
//
//       for (var i = 0; i <hours.length; i++) {
//         var liEl = document.createElement('li');
//         // Create an LI element
//         liEl.textContent = 'At ' + hours[i] + ' we sold ' + this.cHours[i] + ' cookies';
//         // Assign the content of the hours array and hourly cookies to the LI; '10am: 125'
//         ulEl.appendChild(liEl);
//         // Append the LI element to the UL element as a Child
//       };
//
//       var liEl = document.createElement('li');
//       // Create an LI element
//       liEl.textContent = 'Total number of cookies is: ' + this.total;
//       // Assign the content of your stores Daily Total to the LI element
//       ulEl.appendChild(liEl);
//       // Append the LI element to the UL as a Child
//     }
// };
// pikePlaceMarket.render();
//
//
//
//
// var seaTacAirport = {
//   minCust: 6,
//   maxCust: 44,
//   avgCookiesPerCust: 1.2,
//   total: 0,
//   cHours: [],
//
//   randCustomer: function (minCust, maxCust) {
//       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//       console.log('Create a random number of Customers');
//   },
//   generateHourly: function() {
//       for (var i = 0; i < hours.length; i++) {
//         // console.log('Inside FOR loop');
//         var cookies = Math.floor((this.randCustomer() * this.avgCookiesPerCust));
//         // console.log('before total ' + cookies);
//         this.total += cookies;
//         this.cHours.push(cookies);
//       }
//   },
//
//     render: function() {
//       this.generateHourly();
//       var ulEl = document.createElement('ul');
//       ulEl.appendChild(document.createTextNode("SeaTac Airport"));
//       var storeDataEl = document.getElementById('storeData');
//       storeDataEl.appendChild(ulEl);
//
//       for (var i = 0; i <hours.length; i++) {
//         var liEl = document.createElement('li');
//         liEl.textContent = 'At ' + hours[i] + ' we sold ' + this.cHours[i] + ' cookies';
//         ulEl.appendChild(liEl);
//       };
//
//       var liEl = document.createElement('li');
//       liEl.textContent = 'Total number of cookies is: ' + this.total;
//       ulEl.appendChild(liEl);
//     }
// };
//
// seaTacAirport.render();
//
// var southCenterMall = {
//   minCust: 17,
//   maxCust: 88,
//   avgCookiesPerCust: 5.2,
//   total: 0,
//   cHours: [],
//
//   randCustomer: function (minCust, maxCust) {
//       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//       console.log('Create a random number of Customers');
//   },
//   generateHourly: function() {
//       for (var i = 0; i < hours.length; i++) {
//         // console.log('Inside FOR loop');
//         var cookies = Math.floor((this.randCustomer() * this.avgCookiesPerCust));
//         // console.log('before total ' + cookies);
//         this.total += cookies;
//         this.cHours.push(cookies);
//       }
//   },
//
//     render: function() {
//       this.generateHourly();
//       var ulEl = document.createElement('ul');
//       ulEl.appendChild(document.createTextNode("Southcenter Mall"));
//       var storeDataEl = document.getElementById('storeData');
//       storeDataEl.appendChild(ulEl);
//
//       for (var i = 0; i <hours.length; i++) {
//         var liEl = document.createElement('li');
//         liEl.textContent = 'At ' + hours[i] + ' we sold ' + this.cHours[i] + ' cookies';
//         ulEl.appendChild(liEl);
//       };
//
//       var liEl = document.createElement('li');
//       liEl.textContent = 'Total number of cookies is: ' + this.total;
//       ulEl.appendChild(liEl);
//     }
// };
//
// southCenterMall.render();
//
// var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
// var bellevueSquare = {
//   minCust: 17,
//   maxCust: 88,
//   avgCookiesPerCust: 5.2,
//   total: 0,
//   cHours: [],
//
//   randCustomer: function (minCust, maxCust) {
//       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//       console.log('Create a random number of Customers');
//   },
//   generateHourly: function() {
//       for (var i = 0; i < hours.length; i++) {
//         // console.log('Inside FOR loop');
//         var cookies = Math.floor((this.randCustomer() * this.avgCookiesPerCust));
//         // console.log('before total ' + cookies);
//         this.total += cookies;
//         this.cHours.push(cookies);
//       }
//   },
//
//     render: function() {
//       this.generateHourly();
//       var ulEl = document.createElement('ul');
//       ulEl.appendChild(document.createTextNode("Bellevue Square"));
//       var storeDataEl = document.getElementById('storeData');
//       storeDataEl.appendChild(ulEl);
//
//       for (var i = 0; i <hours.length; i++) {
//         var liEl = document.createElement('li');
//         liEl.textContent = 'At ' + hours[i] + ' we sold ' + this.cHours[i] + ' cookies';
//         ulEl.appendChild(liEl);
//       };
//
//       var liEl = document.createElement('li');
//       liEl.textContent = 'Total number of cookies is: ' + this.total;
//       ulEl.appendChild(liEl);
//     }
// };
//
// bellevueSquare.render();
//
// var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
// var Alki = {
//   minCust: 17,
//   maxCust: 88,
//   avgCookiesPerCust: 5.2,
//   total: 0,
//   cHours: [],
//
//   randCustomer: function (minCust, maxCust) {
//       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//       console.log('Create a random number of Customers');
//   },
//   generateHourly: function() {
//       for (var i = 0; i < hours.length; i++) {
//         // console.log('Inside FOR loop');
//         var cookies = Math.floor((this.randCustomer() * this.avgCookiesPerCust));
//         // console.log('before total ' + cookies);
//         this.total += cookies;
//         this.cHours.push(cookies);
//       }
//   },
//
//     render: function() {
//       this.generateHourly();
//       var ulEl = document.createElement('ul');
//       ulEl.appendChild(document.createTextNode("Alki"));
//       var storeDataEl = document.getElementById('storeData');
//       storeDataEl.appendChild(ulEl);
//
//       for (var i = 0; i <hours.length; i++) {
//         var liEl = document.createElement('li');
//         liEl.textContent = 'At ' + hours[i] + ' we sold ' + this.cHours[i] + ' cookies';
//         ulEl.appendChild(liEl);
//       };
//
//       var liEl = document.createElement('li');
//       liEl.textContent = 'Total number of cookies is: ' + this.total;
//       ulEl.appendChild(liEl);
//     }
// };
//
// Alki.render();
