"use strict";
var TaskOrg = (function () {
    function TaskOrg(forceSides, graphics) {
        this.forceSides = forceSides;
        this.graphics = graphics;
    }
    return TaskOrg;
}());
exports.TaskOrg = TaskOrg;
var ForceSideAffiliation = (function () {
    function ForceSideAffiliation(affiliateHandle, relationship) {
        this.affiliateHandle = affiliateHandle;
        this.relationship = relationship;
    }
    return ForceSideAffiliation;
}());
exports.ForceSideAffiliation = ForceSideAffiliation;
var ForceSide = (function () {
    function ForceSide(forceName, forceId, affiliations, subordinateUnits) {
        if (affiliations === void 0) { affiliations = []; }
        if (subordinateUnits === void 0) { subordinateUnits = []; }
        this.forceName = forceName;
        this.forceId = forceId;
        this.affiliations = affiliations;
        this.subordinateUnits = subordinateUnits;
    }
    return ForceSide;
}());
exports.ForceSide = ForceSide;
var Unit = (function () {
    function Unit(unitName, unitId, subordinateUnits, subordinateEntities, milstd2525Symbol, parentId) {
        if (subordinateUnits === void 0) { subordinateUnits = []; }
        if (subordinateEntities === void 0) { subordinateEntities = []; }
        this.unitName = unitName;
        this.unitId = unitId;
        this.subordinateUnits = subordinateUnits;
        this.subordinateEntities = subordinateEntities;
        this.milstd2525Symbol = milstd2525Symbol;
        this.parentId = parentId;
    }
    return Unit;
}());
exports.Unit = Unit;
var UnitType = (function () {
    function UnitType(typeId, milstd2525Symbol, subordinateUnits, subordinateEntities, unitData) {
        this.typeId = typeId;
        this.milstd2525Symbol = milstd2525Symbol;
        this.subordinateUnits = subordinateUnits;
        this.subordinateEntities = subordinateEntities;
        this.unitData = unitData;
    }
    return UnitType;
}());
exports.UnitType = UnitType;
var Entity = (function () {
    function Entity(entityName, entityId, entityType, parentId, location, entityData) {
        this.entityName = entityName;
        this.entityId = entityId;
        this.entityType = entityType;
        this.parentId = parentId;
        this.location = location;
        this.entityData = entityData;
    }
    return Entity;
}());
exports.Entity = Entity;
var EntityType = (function () {
    function EntityType(typeId, milstd2525Symbol, acquireStandardName, entityTypeData) {
        this.typeId = typeId;
        this.milstd2525Symbol = milstd2525Symbol;
        this.acquireStandardName = acquireStandardName;
        this.entityTypeData = entityTypeData;
    }
    return EntityType;
}());
exports.EntityType = EntityType;
var Soldier = (function () {
    function Soldier(heightCm, weightKg, apftRunMinutes, apftRunSeconds) {
        this.heightCm = heightCm;
        this.weightKg = weightKg;
        this.apftRunMinutes = apftRunMinutes;
        this.apftRunSeconds = apftRunSeconds;
    }
    return Soldier;
}());
exports.Soldier = Soldier;
var UnitAggregator = (function () {
    function UnitAggregator() {
    }
    UnitAggregator.unitList = function (unit) {
        var names = [unit.unitName];
        for (var _i = 0, _a = unit.subordinateUnits; _i < _a.length; _i++) {
            var u = _a[_i];
            names = names.concat(this.unitList(u));
        }
        return names;
    };
    UnitAggregator.entityList = function (unit) {
        var names = [];
        for (var _i = 0, _a = unit.subordinateEntities; _i < _a.length; _i++) {
            var e = _a[_i];
            names.push(e.entityName);
        }
        for (var _b = 0, _c = unit.subordinateUnits; _b < _c.length; _b++) {
            var u = _c[_b];
            names = names.concat(this.entityList(u));
        }
        return names;
    };
    UnitAggregator.fsUnitList = function (forceSide) {
        var names = [];
        for (var _i = 0, _a = forceSide.subordinateUnits; _i < _a.length; _i++) {
            var u = _a[_i];
            names = names.concat(this.unitList(u));
        }
        return names;
    };
    UnitAggregator.fsEntityList = function (forceSide) {
        var names = [];
        for (var _i = 0, _a = forceSide.subordinateUnits; _i < _a.length; _i++) {
            var u = _a[_i];
            names = names.concat(this.entityList(u));
        }
        return names;
    };
    UnitAggregator.unitObjectList = function (unit) {
        var units = [unit];
        for (var _i = 0, _a = unit.subordinateUnits; _i < _a.length; _i++) {
            var u = _a[_i];
            units = units.concat(this.unitObjectList(u));
        }
        return units;
    };
    UnitAggregator.entityObjectList = function (unit) {
        var entities = [];
        for (var _i = 0, _a = unit.subordinateEntities; _i < _a.length; _i++) {
            var e = _a[_i];
            entities.push(e);
        }
        for (var _b = 0, _c = unit.subordinateUnits; _b < _c.length; _b++) {
            var u = _c[_b];
            entities = entities.concat(this.entityObjectList(u));
        }
        return entities;
    };
    UnitAggregator.fsUnitObjectList = function (forceSide) {
        var units = [];
        for (var _i = 0, _a = forceSide.subordinateUnits; _i < _a.length; _i++) {
            var u = _a[_i];
            units = units.concat(this.unitObjectList(u));
        }
        return units;
    };
    UnitAggregator.fsEntityObjectList = function (forceSide) {
        var entities = [];
        for (var _i = 0, _a = forceSide.subordinateUnits; _i < _a.length; _i++) {
            var u = _a[_i];
            entities = entities.concat(this.entityObjectList(u));
        }
        return entities;
    };
    UnitAggregator.toEntityObjectList = function (to) {
        var entities = [];
        for (var _i = 0, _a = to.forceSides; _i < _a.length; _i++) {
            var fs = _a[_i];
            entities = entities.concat(this.fsEntityObjectList(fs));
        }
        return entities;
    };
    return UnitAggregator;
}());
exports.UnitAggregator = UnitAggregator;
