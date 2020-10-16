let allLocations = [];

class Locations {
	name;
	address;
	zip;
	pic;

	constructor (name, address, zip, pic) {
		this.name = name;
		this.address = address;
		this.zip = zip;
		this.pic = pic;

		allLocations.push(this);
	}
	render() {
		return ` 
				<div class="col-12 col-md-6 col-lg-3 mb-3">
				<div class="card bg-light">
				  <img src=${this.pic} class="card-img-top rounded" alt="...">
				  <div class="card-body">
				    <h5 class="card-title">${this.name}</h5>
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
	constructor (name, address, zip, pic, type, phone, web) {
		super(name, address, zip, pic);
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
	constructor (name, address, zip, pic, eventDate, eventTime, price) {
		super(name, address, zip, pic);
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

new Locations ("Karlskirche", "1010 Wien", "Karlsplatz 1", "img/place.jpg")
new Locations ("Stephansdom", "1010 Wien", "Stephansplatz 1", "img/place2.jpg")
new Locations ("Schloss Belvedere", "1030 Wien", "Prinz Eugen-Straße 27", "img/place3.jpg")
new Locations ("Schönbrunn", "1130 Wien", "Schönbrunner Schloßstraße 47", "img/place4.jpg")
new Restaurants ("Sixta", "1050 Wien", "Schönbrunner Straße 21", "img/rest.jpg", "östereichisch", "+43 1 58 528 56", "http://www.sixta-restaurant.at/")
new Restaurants ("Le Mjam", "1030 Wien", "Irgendwelche Straße 1", "img/rest2.jpg", "französich", "+43 1 52 538 16", "http://www.lemjam.at/")
new Restaurants ("Eat it", "1100 Wien", "Wiedersehen Straße 13", "img/rest3.jpg", "amerikanisch", "+43 1 22 838 46", "http://www.eatit.at/")
new Restaurants ("Bongiorno", "1020 Wien", "Essengasse 4", "img/rest4.jpg", "italienisch", "+43 1 32 908 14", "http://www.bongiorno.at/")
new Events ("Lenny Kravitz", "1150 Wien", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/event.jpg", "02/04/2021" , "20:00", "50") 
new Events ("DJ Bobo", "1150 Wien", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/event2.jpg", "19/08/2021" , "20:00", "50") 
new Events ("Cinema", "1030 Wien", "Johannesgasse 4", "img/event3.jpg", "28/02/2021" , "18:00", "50")
new Events ("Mike's wedding", "1010 Wien", "Stephansplatz 1", "img/event4.jpg", "12/06/2021" , "12:00", "0")  


allLocations.forEach(something => $(".locations").append(something.render()))