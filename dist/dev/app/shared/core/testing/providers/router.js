"use strict";
var common_1 = require("@angular/common");
var testing_1 = require("@angular/common/testing");
function TEST_LOCATION_PROVIDERS() {
    return [
        { provide: common_1.Location, useClass: testing_1.SpyLocation },
        { provide: common_1.LocationStrategy, useClass: testing_1.MockLocationStrategy },
        { provide: common_1.APP_BASE_HREF, useValue: '/' }
    ];
}
exports.TEST_LOCATION_PROVIDERS = TEST_LOCATION_PROVIDERS;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS90ZXN0aW5nL3Byb3ZpZGVycy9yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDBDQUE0RTtBQUM1RSxtREFBNEU7QUFFNUU7SUFFRSxNQUFNLENBQUM7UUFDTCxFQUFDLE9BQU8sRUFBRSxpQkFBUSxFQUFFLFFBQVEsRUFBRSxxQkFBVyxFQUFDO1FBQzFDLEVBQUMsT0FBTyxFQUFFLHlCQUFnQixFQUFFLFFBQVEsRUFBRSw4QkFBb0IsRUFBQztRQUMzRCxFQUFFLE9BQU8sRUFBRSxzQkFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7S0FDMUMsQ0FBQztBQUNKLENBQUM7QUFQRCwwREFPQyIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcmUvdGVzdGluZy9wcm92aWRlcnMvcm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYW5ndWxhclxuaW1wb3J0IHsgTG9jYXRpb24sIExvY2F0aW9uU3RyYXRlZ3ksIEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3B5TG9jYXRpb24sIE1vY2tMb2NhdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL3Rlc3RpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gVEVTVF9MT0NBVElPTl9QUk9WSURFUlMoKTogQXJyYXk8YW55PiB7XG5cbiAgcmV0dXJuIFtcbiAgICB7cHJvdmlkZTogTG9jYXRpb24sIHVzZUNsYXNzOiBTcHlMb2NhdGlvbn0sXG4gICAge3Byb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBNb2NrTG9jYXRpb25TdHJhdGVneX0sXG4gICAgeyBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLCB1c2VWYWx1ZTogJy8nIH1cbiAgXTtcbn1cbiJdfQ==
