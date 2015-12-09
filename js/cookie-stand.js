  var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var locations = ['PikePlace', 'SeaTac', 'SouthCenter', 'Bellevue', 'Alki'];
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

  // console.log('aFter generateHourly ' + this.total);

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


var PikePlace = new CookieStand(17, 88, 5.2, [], 0, "Pike Place Market");
var SeaTac = new CookieStand(6, 44, 1.2, [], 0, "SeaTac Airport");
var SouthCenter = new CookieStand(11, 38, 1.9, [], 0, "SouthCenter Mall");
var Bellevue = new CookieStand(20, 48, 3.3, [], 0, "Bellevue Square");
var Alki = new CookieStand(3, 24, 2.6, [], 0, "Alki");


PikePlace.render();
SeaTac.render();
SouthCenter.render();
Bellevue.render();
Alki.render();
