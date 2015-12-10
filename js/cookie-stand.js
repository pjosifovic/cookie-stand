var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var locations = ['PikePlace', 'SeaTac', 'SouthCenter', 'Bellevue', 'Alki'];
function CookieStand(minCust, maxCust, avgCookiesPerCust, store) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cHours = [];
  this.total = 0;
  this.store = store;
}

CookieStand.prototype.randCustomer = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

CookieStand.prototype.generateHourly = function() {
    for (var i = 0; i < hours.length; i++) {
    // console.log('Inside FOR loop');
    var numCust = this.randCustomer();
    console.log(numCust + ' is the random number of customers per hour');
    var cookies = Math.floor(numCust * this.avgCookiesPerCust);
    // console.log('before total ' + cookies);
    this.cHours.push(cookies);
    this.total += cookies;
  }

};

  var sectEl = document.getElementById('storeData');

  var tableEl = document.createElement('table');
  // Create a table element.
  var trEl = document.createElement('tr');
  // Create a table header element.
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };
  tableEl.appendChild(trEl);

CookieStand.prototype.render = function() {

    this.generateHourly();

  // for (var x = 0; x < locations.length; x++) {
    // console.log('looking for ' + locations.length);
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = this.store;
    trEl.appendChild(thEl);
    // console.log('Give me the location ' + locations[x]);

    var tdEl = document.createElement('td');
    tdEl.textContent = this.total;
    // console.log('after this total ' + this.total);
    trEl.appendChild(tdEl);
      for (var i = 0; i < hours.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = this.cHours[i];
        trEl.appendChild(tdEl);
      }
    tableEl.appendChild(trEl);
    // tbodyEl.appendChild(trEl);

}
  sectEl.appendChild(tableEl);


var PikePlace = new CookieStand(17, 88, 5.2, "Pike Place Market");
var SeaTac = new CookieStand(6, 44, 1.2, "SeaTac Airport");
var SouthCenter = new CookieStand(11, 38, 1.9, "SouthCenter Mall");
var Bellevue = new CookieStand(20, 48, 3.3, "Bellevue Square");
var Alki = new CookieStand(3, 24, 2.6, "Alki");


PikePlace.render();
SeaTac.render();
SouthCenter.render();
Bellevue.render();
Alki.render();


var userForm = document.getElementById('user-form');

var handleUserSubmit = function(event) {
    // console.log(event);
    event.preventDefault();

     if (!event.target.locName.value || !event.target.minCustHour.value || !event.target.maxCustHour.value || !event.target.avgCookieHour.value) {
      return alert('Fill the fields!');
     }

     var locName = event.target.locName.value;
     console.log('location name is ' + locName);
     var minCustHour = parseInt(event.target.minCustHour.value);
     console.log('min is ' + minCustHour);
     var maxCustHour = parseInt(event.target.maxCustHour.value);
     console.log('max is ' + maxCustHour);
     var avgCookieHour = parseFloat(event.target.avgCookieHour.value);
     console.log('average number of cookie ' + avgCookieHour);

     var newStore = new CookieStand(minCustHour, maxCustHour, avgCookieHour,locName);
     newStore.render();
    //  new CookieStand(minCustHour, maxCustHour, avgCookieHour,locName).render(); you can call it like this!
    //  console.log('calling render');
};

// Event listener for submission button
userForm.addEventListener('submit', handleUserSubmit);


// if you have paramaters
// userForm.addEventListener('submit', handleUserSubmit, param1, param2);
