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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29yZS90ZXN0aW5nL21vY2tzL25nMi1jb25maWcubW9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtJQTZCQSxDQUFDO0lBNUJDLHlCQUFJLEdBQUo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdDQUFXLEdBQVgsVUFBWSxLQUFjLEVBQUUsR0FBWTtRQUN0QyxNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUU7Z0JBQ0osZUFBZSxFQUFFO29CQUNmLElBQUksRUFBRSxJQUFJO29CQUNWLEtBQUssRUFBRSxTQUFTO2lCQUNqQjtnQkFDRCxrQkFBa0IsRUFBRTtvQkFDbEI7d0JBQ0UsSUFBSSxFQUFFLElBQUk7d0JBQ1YsS0FBSyxFQUFFLFNBQVM7cUJBQ2pCO2lCQUNGO2FBQ0Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsS0FBSyxFQUFFO29CQUNMLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxLQUFLO29CQUNkLE9BQU8sRUFBRSxLQUFLO2lCQUNmO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSxnQ0FBVSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcmUvdGVzdGluZy9tb2Nrcy9uZzItY29uZmlnLm1vY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uZmlnTW9jayB7XG4gIGluaXQoKTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFNldHRpbmdzKGdyb3VwPzogc3RyaW5nLCBrZXk/OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBpMThuOiB7XG4gICAgICAgIGRlZmF1bHRMYW5ndWFnZToge1xuICAgICAgICAgIGNvZGU6ICdlbicsXG4gICAgICAgICAgdGl0bGU6ICdFbmdsaXNoJ1xuICAgICAgICB9LFxuICAgICAgICBhdmFpbGFibGVMYW5ndWFnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2RlOiAnZW4nLFxuICAgICAgICAgICAgdGl0bGU6ICdFbmdsaXNoJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGxvZ2dpbmc6IHtcbiAgICAgICAgREVCVUc6IHtcbiAgICAgICAgICBMRVZFTF8xOiBmYWxzZSxcbiAgICAgICAgICBMRVZFTF8yOiBmYWxzZSxcbiAgICAgICAgICBMRVZFTF8zOiBmYWxzZSxcbiAgICAgICAgICBMRVZFTF80OiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19
