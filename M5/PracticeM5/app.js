System.register(["./Modules.js"], function (exports_1, context_1) {
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
    var Modules_js_1, greeting, Show, TNG, show1, el, Voyager, show2, el1, show3, el2;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Modules_js_1_1) {
                Modules_js_1 = Modules_js_1_1;
            }
        ],
        execute: function () {
            greeting = function (name) {
                alert("Hello, " + name + "!");
            };
            greeting("Star Trek Newbie!");
            Show = /** @class */ (function () {
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
            TNG = /** @class */ (function (_super) {
                __extends(TNG, _super);
                function TNG() {
                    return _super.call(this, "The Next Generation", "Picard", "Riker") || this;
                }
                return TNG;
            }(Show));
            show1 = new TNG();
            el = document.getElementById("to-watch1");
            if (el)
                el.innerHTML = show1.printShowDetails();
            Voyager = /** @class */ (function (_super) {
                __extends(Voyager, _super);
                function Voyager() {
                    return _super.call(this, "Voyager", "Janeway", "Chakotay") || this;
                }
                return Voyager;
            }(Show));
            show2 = new Voyager();
            el1 = document.getElementById("to-watch2");
            if (el1)
                el1.innerHTML = show2.printShowDetails();
            show3 = Modules_js_1.starship("Enterprise", "Archer", "T'Pol");
            el2 = document.getElementById("to-watch3");
            if (el2)
                el2.innerHTML = show3;
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVNLFFBQVEsR0FBRSxVQUFDLElBQVc7Z0JBQ3hCLEtBQUssQ0FBQyxZQUFVLElBQUksTUFBRyxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFBO1lBQ0csUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFTbEM7Z0JBSUksY0FBWSxJQUFXLEVBQUUsR0FBVSxFQUFFLE1BQWE7b0JBSGpELFNBQUksR0FBVyxNQUFNLENBQUM7b0JBSW5CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ00sK0JBQWdCLEdBQXZCO29CQUNJLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUUsZ0JBQWdCLEdBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxxQkFBcUIsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNyRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6QixPQUFPLFdBQVcsQ0FBQztnQkFDdkIsQ0FBQztnQkFFTCxXQUFDO1lBQUQsQ0FBQyxBQWZELElBZUM7WUFFRDtnQkFBa0IsdUJBQUk7Z0JBQ2xCOzJCQUNJLGtCQUFNLHFCQUFxQixFQUFFLFFBQVEsRUFBQyxPQUFPLENBQUM7Z0JBQ2xELENBQUM7Z0JBQ0wsVUFBQztZQUFELENBQUMsQUFKRCxDQUFrQixJQUFJLEdBSXJCO1lBR0csS0FBSyxHQUFTLElBQUksR0FBRyxFQUFFLENBQUM7WUFDdEIsRUFBRSxHQUF3QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JFLElBQUcsRUFBRTtnQkFDTCxFQUFFLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBRXhDO2dCQUFzQiwyQkFBSTtnQkFDdEI7MkJBQ0ksa0JBQU0sU0FBUyxFQUFFLFNBQVMsRUFBQyxVQUFVLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ0wsY0FBQztZQUFELENBQUMsQUFKRCxDQUFzQixJQUFJLEdBSXpCO1lBRUcsS0FBSyxHQUFXLElBQUksT0FBTyxFQUFFLENBQUM7WUFDNUIsR0FBRyxHQUF3QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RFLElBQUcsR0FBRztnQkFDTixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBRXJDLEtBQUssR0FBRyxxQkFBUSxDQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsR0FBRyxHQUF3QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RFLElBQUcsR0FBRztnQkFDTixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0YXJzaGlwIH0gZnJvbSBcIi4vTW9kdWxlcy5qc1wiO1xyXG5cclxuY29uc3QgZ3JlZXRpbmcgPShuYW1lOnN0cmluZykgPT4ge1xyXG4gICAgYWxlcnQoYEhlbGxvLCAke25hbWV9IWApO1xyXG59XHJcbiAgICBncmVldGluZyhcIlN0YXIgVHJlayBOZXdiaWUhXCIpO1xyXG5cclxuaW50ZXJmYWNlIElTaG93e1xyXG4gICAgbmFtZSA6IHN0cmluZztcclxuICAgIGNhcHRhaW4gOiBzdHJpbmc7XHJcbiAgICBmaXJzdE9mZmljZXIgOiBzdHJpbmc7XHJcbiAgICBwcmludFNob3dEZXRhaWxzKCk6c3RyaW5nO1xyXG59ICAgIFxyXG5cclxuY2xhc3MgU2hvdyBpbXBsZW1lbnRzIElTaG93e1xyXG4gICAgIG5hbWU6IHN0cmluZyA9IFwibm9uZVwiO1xyXG4gICAgIGNhcHRhaW46IHN0cmluZztcclxuICAgICBmaXJzdE9mZmljZXI6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHNob3c6c3RyaW5nLCBjYXA6c3RyaW5nLCBmaXJzdE86c3RyaW5nKXtcclxuICAgICAgICB0aGlzLm5hbWUgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuY2FwdGFpbiA9IGNhcDtcclxuICAgICAgICB0aGlzLmZpcnN0T2ZmaWNlciA9IGZpcnN0TztcclxuICAgIH1cclxuICAgIHB1YmxpYyBwcmludFNob3dEZXRhaWxzKCk6c3RyaW5ne1xyXG4gICAgICAgIGNvbnN0IHNob3dEZXRhaWxzID0gdGhpcy5uYW1lICtcIiB3aXRoIENhcHRhaW4gXCIrdGhpcy5jYXB0YWluK1wiIGFuZCBGaXJzdCBPZmZpY2VyIFwiK3RoaXMuZmlyc3RPZmZpY2VyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNob3dEZXRhaWxzKTtcclxuICAgICAgICByZXR1cm4gc2hvd0RldGFpbHM7XHJcbiAgICB9XHJcbiAgICBcclxufSAgICBcclxuXHJcbmNsYXNzIFRORyBleHRlbmRzIFNob3d7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKFwiVGhlIE5leHQgR2VuZXJhdGlvblwiLCBcIlBpY2FyZFwiLFwiUmlrZXJcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5sZXQgc2hvdzEgOiBUTkcgPSBuZXcgVE5HKCk7XHJcbmNvbnN0IGVsIDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0by13YXRjaDFcIik7XHJcbmlmKGVsKSBcclxuZWwuaW5uZXJIVE1MID0gc2hvdzEucHJpbnRTaG93RGV0YWlscygpO1xyXG5cclxuY2xhc3MgVm95YWdlciBleHRlbmRzIFNob3d7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKFwiVm95YWdlclwiLCBcIkphbmV3YXlcIixcIkNoYWtvdGF5XCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgc2hvdzI6Vm95YWdlciA9IG5ldyBWb3lhZ2VyKCk7XHJcbmNvbnN0IGVsMSA6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG8td2F0Y2gyXCIpO1xyXG5pZihlbDEpIFxyXG5lbDEuaW5uZXJIVE1MID0gc2hvdzIucHJpbnRTaG93RGV0YWlscygpO1xyXG5cclxubGV0IHNob3czID0gc3RhcnNoaXAoXCJFbnRlcnByaXNlXCIsXCJBcmNoZXJcIixcIlQnUG9sXCIpO1xyXG5jb25zdCBlbDIgOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvLXdhdGNoM1wiKTtcclxuaWYoZWwyKSBcclxuZWwyLmlubmVySFRNTCA9IHNob3czO1xyXG5cclxuXHJcbiJdfQ==