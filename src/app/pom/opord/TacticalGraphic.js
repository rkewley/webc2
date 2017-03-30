"use strict";
var TacticalGraphic = (function () {
    function TacticalGraphic() {
    }
    return TacticalGraphic;
}());
exports.TacticalGraphic = TacticalGraphic;
var GeographicPoint = (function () {
    function GeographicPoint(latitude, longitude, altitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }
    return GeographicPoint;
}());
exports.GeographicPoint = GeographicPoint;
var GeographicLine = (function () {
    function GeographicLine(waypoints) {
        this.waypoints = waypoints;
    }
    return GeographicLine;
}());
exports.GeographicLine = GeographicLine;
var GeographicPolygon = (function () {
    function GeographicPolygon(vertices) {
        this.vertices = vertices;
    }
    return GeographicPolygon;
}());
exports.GeographicPolygon = GeographicPolygon;
var GeographicCircle = (function () {
    function GeographicCircle(center, radiusMeters) {
        this.center = center;
        this.radiusMeters = radiusMeters;
    }
    return GeographicCircle;
}());
exports.GeographicCircle = GeographicCircle;
