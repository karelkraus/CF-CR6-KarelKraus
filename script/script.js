var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var allLocations = [];
var Locations = /** @class */ (function () {
    function Locations(name, address, zip, pic) {
        this.name = name;
        this.address = address;
        this.zip = zip;
        this.pic = pic;
        allLocations.push(this);
    }
    Locations.prototype.render = function () {
        return " \n\t\t\t\t<div class=\"col-12 col-md-6 col-lg-3 mb-3\">\n\t\t\t\t<div class=\"card bg-light\">\n\t\t\t\t  <img src=" + this.pic + " class=\"card-img-top rounded\" alt=\"...\">\n\t\t\t\t  <div class=\"card-body\">\n\t\t\t\t    <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t\t\t  </div>\n\t\t\t\t  <ul class=\"list-group list-group-flush Information\">\n\t\t\t\t    <li class=\"list-group-item bg-light\">" + this.zip + "</li>\n\t\t\t\t    <li class=\"list-group-item bg-light\">" + this.address + "</li>\n\t\t\t\t  </ul>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t ";
    };
    return Locations;
}());
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, address, zip, pic, type, phone, web) {
        var _this = _super.call(this, name, address, zip, pic) || this;
        _this.type = type;
        _this.phone = phone;
        _this.web = web;
        return _this;
    }
    Restaurants.prototype.render = function () {
        return " \n\t\t\t\t<div class=\"col-12 col-md-6 col-lg-3 mb-3\">\n\t\t\t\t<div class=\"card bg-light\">\n\t\t\t\t  <img src=" + this.pic + " class=\"card-img-top rounded\" alt=\"...\">\n\t\t\t\t  <div class=\"card-body\">\n\t\t\t\t    <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t\t\t  </div>\n\t\t\t\t  <ul class=\"list-group list-group-flush Information\">\n\t\t\t\t  \t<li class=\"list-group-item bg-light\">" + this.type + "</li>\n\t\t\t\t    <li class=\"list-group-item bg-light\">" + this.zip + "</li>\n\t\t\t\t    <li class=\"list-group-item bg-light\">" + this.address + "</li>\n\t\t\t\t    <li class=\"list-group-item bg-light\">" + this.phone + "<br><a href=\"" + this.web + "\">" + this.web + "</a></li>\n\t\t\t\t  </ul>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t ";
    };
    return Restaurants;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, address, zip, pic, eventDate, eventTime, price) {
        var _this = _super.call(this, name, address, zip, pic) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        return _this;
    }
    Events.prototype.render = function () {
        return " \n\t\t\t\t<div class=\"col-12 col-md-6 col-lg-3 mb-3\">\n\t\t\t\t<div class=\"card bg-light\">\n\t\t\t\t  <img src=" + this.pic + " class=\"card-img-top rounded\" alt=\"...\">\n\t\t\t\t  <div class=\"card-body\">\n\t\t\t\t    <h5 class=\"card-title\">" + this.name + "</h5>\n\t\t\t\t  </div>\n\t\t\t\t  <ul class=\"list-group list-group-flush Information\">\n\t\t\t\t  \t<li class=\"list-group-item bg-light\">" + this.eventDate + " at " + this.eventTime + "</li>\n\t\t\t\t    <li class=\"list-group-item bg-light\">" + this.zip + "</li>\n\t\t\t\t    <li class=\"list-group-item bg-light\">" + this.address + "</li>\n\t\t\t\t    <li class=\"list-group-item bg-light\">" + this.price + "&euro;</li>\n\t\t\t\t  </ul>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t ";
    };
    return Events;
}(Locations));
new Locations("Karlskirche", "1010 Wien", "Karlsplatz 1", "img/place.jpg");
new Locations("Stephansdom", "1010 Wien", "Stephansplatz 1", "img/place2.jpg");
new Locations("Schloss Belvedere", "1030 Wien", "Prinz Eugen-Straße 27", "img/place3.jpg");
new Locations("Schönbrunn", "1130 Wien", "Schönbrunner Schloßstraße 47", "img/place4.jpg");
new Restaurants("Sixta", "1050 Wien", "Schönbrunner Straße 21", "img/rest.jpg", "östereichisch", "+43 1 58 528 56", "http://www.sixta-restaurant.at/");
new Restaurants("Le Mjam", "1030 Wien", "Irgendwelche Straße 1", "img/rest2.jpg", "französich", "+43 1 52 538 16", "http://www.lemjam.at/");
new Restaurants("Eat it", "1100 Wien", "Wiedersehen Straße 13", "img/rest3.jpg", "amerikanisch", "+43 1 22 838 46", "http://www.eatit.at/");
new Restaurants("Bongiorno", "1020 Wien", "Essengasse 4", "img/rest4.jpg", "italienisch", "+43 1 32 908 14", "http://www.bongiorno.at/");
new Events("Lenny Kravitz", "1150 Wien", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/event.jpg", "02/04/2021", "20:00", "50");
new Events("DJ Bobo", "1150 Wien", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/event2.jpg", "19/08/2021", "20:00", "50");
new Events("Cinema", "1030 Wien", "Johannesgasse 4", "img/event3.jpg", "28/02/2021", "18:00", "50");
new Events("Mike's wedding", "1010 Wien", "Stephansplatz 1", "img/event4.jpg", "12/06/2021", "12:00", "0");
allLocations.forEach(function (something) { return $(".locations").append(something.render()); });
