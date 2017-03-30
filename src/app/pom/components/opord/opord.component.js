"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Command_1 = require("../../opord/Command");
var OPORDComponent = (function () {
    function OPORDComponent() {
    }
    OPORDComponent.prototype.createBlankPhase = function () {
        var newFrago = new Command_1.FRAGO([]);
        var newTrigger = new Command_1.PhaseTrigger();
        newTrigger.TriggerType = "Immediate";
        var newPhase = new Command_1.Phase();
        newPhase.Branches = [];
        newPhase.DefaultOrders = newFrago;
        newPhase.PhaseName = "Phase";
        newPhase.PhaseNumber = 0;
        newPhase.PhaseTrigger = newTrigger;
        return newPhase;
    };
    OPORDComponent.prototype.addPhase = function () {
        this.opord.Phases.push(this.createBlankPhase());
    };
    OPORDComponent.prototype.deletePhase = function (index) {
        this.opord.Phases.splice(index, 1);
    };
    OPORDComponent.prototype.toJson = function () {
        if (this.json === "") {
            this.json = JSON.stringify(this.opord, null, '\t');
            this.buttonText = "Hide OPORD JSON";
        }
        else {
            this.json = "";
            this.buttonText = "Show OPORD JSON";
        }
    };
    __decorate([
        core_1.Input()
    ], OPORDComponent.prototype, "forceSide");
    __decorate([
        core_1.Input()
    ], OPORDComponent.prototype, "taskOrg");
    __decorate([
        core_1.Input()
    ], OPORDComponent.prototype, "opord");
    OPORDComponent = __decorate([
        core_1.Component({
            selector: "opord",
            templateUrl: "./opord.html"
        })
    ], OPORDComponent);
    return OPORDComponent;
}());
exports.OPORDComponent = OPORDComponent;
