let allLocations = [];

class Locations {
	name;
	address;
	zip;
	pic;
	date;

	constructor (name, address, zip, pic, date) {
		this.name = name;
		this.address = address;
		this.zip = zip;
		this.pic = pic;
		this.date = date

		allLocations.push(this);
	}
	render() {
		return ` 
				<div class="col-12 col-md-6 col-lg-3 mb-3">
				<div class="card bg-light">
				  <img src=${this.pic} class="card-img-top rounded" alt="...">
				  <div class="card-body">
				    <h5 class="card-title">${this.name}</h5>
				    <p><small>${this.date}</small></p>
				  </div>
				  <ul class="list-group list-group-flush Information">
				    <li class="list-group-item bg-light">${this.zip}</li>
				    <li class="list-group-item bg-light">${this.address}</li>
				  </ul>
				</div>
				</div>
		 `
	}


}

class Restaurants extends Locations {
	type;
	phone;
	web;
	constructor (name, address, zip, pic, date, type, phone, web) {
		super(name, address, zip, pic, date);
		this.type = type;
		this.phone = phone;
		this.web = web;

		
	}
	render() {
	return ` 
				<div class="col-12 col-md-6 col-lg-3 mb-3">
				<div class="card bg-light">
				  <img src=${this.pic} class="card-img-top rounded" alt="...">
				  <div class="card-body">
				    <h5 class="card-title">${this.name}</h5>
				    <p><small>${this.date}</small></p>
				  </div>
				  <ul class="list-group list-group-flush Information">
				  	<li class="list-group-item bg-light">${this.type}</li>
				    <li class="list-group-item bg-light">${this.zip}</li>
				    <li class="list-group-item bg-light">${this.address}</li>
				    <li class="list-group-item bg-light">${this.phone}<br><a href="${this.web}">${this.web}</a></li>
				  </ul>
				</div>
				</div>
		 `
	}

}

class Events extends Locations {
	eventDate;
	eventTime;
	price;
	constructor (name, address, zip, pic, date, eventDate, eventTime, price) {
		super(name, address, zip, pic, date);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.price = price;

		
	}
	render() {
		return ` 
				<div class="col-12 col-md-6 col-lg-3 mb-3">
				<div class="card bg-light">
				  <img src=${this.pic} class="card-img-top rounded" alt="...">
				  <div class="card-body">
				    <h5 class="card-title">${this.name}</h5>
				    <p><small>${this.date}</small></p>
				  </div>
				  <ul class="list-group list-group-flush Information">
				  	<li class="list-group-item bg-light">${this.eventDate} at ${this.eventTime}</li>
				    <li class="list-group-item bg-light">${this.zip}</li>
				    <li class="list-group-item bg-light">${this.address}</li>
				    <li class="list-group-item bg-light">${this.price}&euro;</li>
				  </ul>
				</div>
				</div>
		 `
	}
}

new Locations ("Karlskirche", "1010 Wien", "Karlsplatz 1", "img/place.jpg", "2019-06-14 14:03")
new Locations ("Stephansdom", "1010 Wien", "Stephansplatz 1", "img/place2.jpg", "2020-08-14 14:03:49")
new Locations ("Schloss Belvedere", "1030 Wien", "Prinz Eugen-Straße 27", "img/place3.jpg", "2019-12-14 14:03")
new Locations ("Schönbrunn", "1130 Wien", "Schönbrunner Schloßstraße 47", "img/place4.jpg", "2019-05-12 14:03")
new Restaurants ("Sixta", "1050 Wien", "Schönbrunner Straße 21", "img/rest.jpg", "2019-07-23 13:29", "östereichisch", "+43 1 58 528 56", "http://www.sixta-restaurant.at/")
new Restaurants ("Le Mjam", "1030 Wien", "Irgendwelche Straße 1", "img/rest2.jpg", "2019-02-03 11:38", "französich", "+43 1 52 538 16", "http://www.lemjam.at/")
new Restaurants ("Eat it", "1100 Wien", "Wiedersehen Straße 13", "img/rest3.jpg", "2018-10-19 19:21", "amerikanisch", "+43 1 22 838 46", "http://www.eatit.at/")
new Restaurants ("Bongiorno", "1020 Wien", "Essengasse 4", "img/rest4.jpg", "2020-05-29 17:56", "italienisch", "+43 1 32 908 14", "http://www.bongiorno.at/")
new Events ("Lenny Kravitz", "1150 Wien", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/event.jpg", "2020-03-09 08:09", "02/04/2021" , "20:00", "50") 
new Events ("DJ Bobo", "1150 Wien", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/event2.jpg", "2019-11-20 11:21", "19/08/2021" , "20:00", "50") 
new Events ("Cinema", "1030 Wien", "Johannesgasse 4", "img/event3.jpg", "2020-09-14 12:10", "28/02/2021" , "18:00", "50")
new Events ("Mike's wedding", "1010 Wien", "Stephansplatz 1", "img/event4.jpg", "2019-10-11 17:03", "12/06/2021" , "12:00", "0")  


allLocations.forEach(something => $(".locations").append(something.render()))

allLocations.sort(function(a, b) {
  return  +new Date(b.date) - +new Date(a.date);
})

allLocations.forEach(something => $(".locationsDesc").append(something.render()))

allLocations.sort(function(a, b) {
  return  +new Date(a.date) - +new Date(b.date);
})

allLocations.forEach(something => $(".locationsAsc").append(something.render()))
