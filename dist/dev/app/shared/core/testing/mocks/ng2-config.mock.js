"use strict";
var ConfigMock = (function () {
    function ConfigMock() {
    }
    ConfigMock.prototype.init = function () {
        return null;
    };
    ConfigMock.prototype.getSettings = function (group, key) {
        return {
            i18n: {
                defaultLanguage: {
                    code: 'en',
                    title: 'English'
                },
                availableLanguages: [
                    {
                        code: 'en',
                        title: 'English'
                    }
                ]
            },
            logging: {
                DEBUG: {
                    LEVEL_1: false,
                    LEVEL_2: false,
                    LEVEL_3: false,
                    LEVEL_4: false
                }
            }
        };
    };
    return ConfigMock;
}());
exports.ConfigMock = ConfigMock;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS90ZXN0aW5nL21vY2tzL25nMi1jb25maWcubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtJQTZCQSxDQUFDO0lBNUJDLHlCQUFJLEdBQUo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdDQUFXLEdBQVgsVUFBWSxLQUFjLEVBQUUsR0FBWTtRQUN0QyxNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUU7Z0JBQ0osZUFBZSxFQUFFO29CQUNmLElBQUksRUFBRSxJQUFJO29CQUNWLEtBQUssRUFBRSxTQUFTO2lCQUNqQjtnQkFDRCxrQkFBa0IsRUFBRTtvQkFDbEI7d0JBQ0UsSUFBSSxFQUFFLElBQUk7d0JBQ1YsS0FBSyxFQUFFLFNBQVM7cUJBQ2pCO2lCQUNGO2FBQ0Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFO29CQUNMLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxLQUFLO2lCQUNmO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSxnQ0FBVSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcmUvdGVzdGluZy9tb2Nrcy9uZzItY29uZmlnLm1vY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uZmlnTW9jayB7XHJcbiAgaW5pdCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRTZXR0aW5ncyhncm91cD86IHN0cmluZywga2V5Pzogc3RyaW5nKTogYW55IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGkxOG46IHtcclxuICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U6IHtcclxuICAgICAgICAgIGNvZGU6ICdlbicsXHJcbiAgICAgICAgICB0aXRsZTogJ0VuZ2xpc2gnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdmFpbGFibGVMYW5ndWFnZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29kZTogJ2VuJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdFbmdsaXNoJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgbG9nZ2luZzoge1xyXG4gICAgICAgIERFQlVHOiB7XHJcbiAgICAgICAgICBMRVZFTF8xOiBmYWxzZSxcclxuICAgICAgICAgIExFVkVMXzI6IGZhbHNlLFxyXG4gICAgICAgICAgTEVWRUxfMzogZmFsc2UsXHJcbiAgICAgICAgICBMRVZFTF80OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19
