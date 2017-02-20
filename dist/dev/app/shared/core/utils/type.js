"use strict";
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unqiue\"");
    }
    typeCache[label] = true;
    return label;
}
exports.type = type;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS91dGlscy90eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFVQSxJQUFJLFNBQVMsR0FBaUMsRUFBRSxDQUFDO0FBQ2pELGNBQXdCLEtBQWE7SUFDbkMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFnQixLQUFLLHVCQUFrQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELFNBQVMsQ0FBUyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7SUFFaEMsTUFBTSxDQUFJLEtBQUssQ0FBQztBQUNsQixDQUFDO0FBUkQsb0JBUUMiLCJmaWxlIjoiYXBwL3NoYXJlZC9jb3JlL3V0aWxzL3R5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZnVuY3Rpb24gY29lcmNlcyBhIHN0cmluZyBpbnRvIGEgc3RyaW5nIGxpdGVyYWwgdHlwZS5cbiAqIFVzaW5nIHRhZ2dlZCB1bmlvbiB0eXBlcyBpbiBUeXBlU2NyaXB0IDIuMCwgdGhpcyBlbmFibGVzXG4gKiBwb3dlcmZ1bCB0eXBlY2hlY2tpbmcgb2Ygb3VyIHJlZHVjZXJzLlxuICogXG4gKiBTaW5jZSBldmVyeSBhY3Rpb24gbGFiZWwgcGFzc2VzIHRocm91Z2ggdGhpcyBmdW5jdGlvbiBpdFxuICogaXMgYSBnb29kIHBsYWNlIHRvIGVuc3VyZSBhbGwgb2Ygb3VyIGFjdGlvbiBsYWJlbHNcbiAqIGFyZSB1bmlxdWUuXG4gKi9cblxubGV0IHR5cGVDYWNoZTogeyBbbGFiZWw6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIHR5cGU8VD4obGFiZWw6IFQgfCAnJyk6IFQge1xuICBpZiAodHlwZUNhY2hlWzxzdHJpbmc+bGFiZWxdKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBBY3Rpb24gdHlwZSBcIiR7bGFiZWx9XCIgaXMgbm90IHVucWl1ZVwiYCk7XG4gIH1cblxuICB0eXBlQ2FjaGVbPHN0cmluZz5sYWJlbF0gPSB0cnVlO1xuXG4gIHJldHVybiA8VD5sYWJlbDtcbn1cbiJdfQ==