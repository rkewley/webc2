"use strict";
var OPORD = (function () {
    function OPORD() {
    }
    return OPORD;
}());
exports.OPORD = OPORD;
var TacticalAction = (function () {
    function TacticalAction() {
    }
    return TacticalAction;
}());
exports.TacticalAction = TacticalAction;
var C2CommandScript = (function () {
    function C2CommandScript() {
        this.TacticalActions = [];
    }
    return C2CommandScript;
}());
exports.C2CommandScript = C2CommandScript;
var C2UnitCommandScript = (function () {
    function C2UnitCommandScript() {
        this.TacticalActions = [];
        this.UnitName = "";
    }
    return C2UnitCommandScript;
}());
exports.C2UnitCommandScript = C2UnitCommandScript;
var Command = (function () {
    function Command() {
    }
    return Command;
}());
exports.Command = Command;
var FRAGO = (function () {
    function FRAGO(commands) {
        this.commands = commands;
    }
    return FRAGO;
}());
exports.FRAGO = FRAGO;
var C2CommandSignal = (function () {
    function C2CommandSignal(Receiver, Sender, Signal, SignalName) {
        this.Receiver = Receiver;
        this.Sender = Sender;
        this.Signal = Signal;
        this.SignalName = SignalName;
    }
    return C2CommandSignal;
}());
exports.C2CommandSignal = C2CommandSignal;
var C2UnitCommandSignal = (function () {
    function C2UnitCommandSignal(Receiver, Sender, Signal, SignalName, UnitName) {
        this.Receiver = Receiver;
        this.Sender = Sender;
        this.Signal = Signal;
        this.SignalName = SignalName;
        this.UnitName = UnitName;
    }
    return C2UnitCommandSignal;
}());
exports.C2UnitCommandSignal = C2UnitCommandSignal;
var PhaseTrigger = (function () {
    function PhaseTrigger() {
    }
    return PhaseTrigger;
}());
exports.PhaseTrigger = PhaseTrigger;
var Phase = (function () {
    function Phase() {
    }
    return Phase;
}());
exports.Phase = Phase;
var InformationRequirement = (function () {
    function InformationRequirement() {
    }
    return InformationRequirement;
}());
exports.InformationRequirement = InformationRequirement;
var TacticalGraphicProximity = (function () {
    function TacticalGraphicProximity() {
    }
    return TacticalGraphicProximity;
}());
exports.TacticalGraphicProximity = TacticalGraphicProximity;
var ProximityType = (function () {
    function ProximityType() {
    }
    return ProximityType;
}());
exports.ProximityType = ProximityType;
var AndInformationRequirement = (function () {
    function AndInformationRequirement() {
    }
    return AndInformationRequirement;
}());
exports.AndInformationRequirement = AndInformationRequirement;
var Branch = (function () {
    function Branch() {
    }
    return Branch;
}());
exports.Branch = Branch;
var OrInformationRequirement = (function () {
    function OrInformationRequirement() {
    }
    return OrInformationRequirement;
}());
exports.OrInformationRequirement = OrInformationRequirement;
