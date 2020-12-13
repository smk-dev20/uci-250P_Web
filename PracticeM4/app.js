"use strict";
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
var greeting = function (name) {
    alert("Hello, " + name + "!");
};
greeting("Star Trek Newbie!");
var Show = /** @class */ (function () {
    function Show(show, cap, firstO) {
        this.name = "none";
        this.name = show;
        this.captain = cap;
        this.firstOfficer = firstO;
    }
    Show.prototype.printShowDetails = function () {
        var showDetails = this.name + " with Captain " + this.captain + " and First Officer " + this.firstOfficer;
        console.log(showDetails);
        return showDetails;
    };
    return Show;
}());
var TNG = /** @class */ (function (_super) {
    __extends(TNG, _super);
    function TNG() {
        return _super.call(this, "The Next Generation", "Picard", "Riker") || this;
    }
    return TNG;
}(Show));
var show1 = new TNG();
var el = document.getElementById("to-watch1");
if (el)
    el.innerHTML = show1.printShowDetails();
var Voyager = /** @class */ (function (_super) {
    __extends(Voyager, _super);
    function Voyager() {
        return _super.call(this, "Voyager", "Janeway", "Chakotay") || this;
    }
    return Voyager;
}(Show));
var show2 = new Voyager();
var el1 = document.getElementById("to-watch2");
if (el1)
    el1.innerHTML = show2.printShowDetails();
