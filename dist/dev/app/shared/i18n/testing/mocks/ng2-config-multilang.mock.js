"use strict";
var ConfigMockMultilang = (function () {
    function ConfigMockMultilang() {
    }
    ConfigMockMultilang.prototype.init = function () {
        return null;
    };
    ConfigMockMultilang.prototype.getSettings = function (group, key) {
        return {
            i18n: {
                defaultLanguage: {
                    code: 'en',
                    title: 'English'
                },
                availableLanguages: [
                    { code: 'en', title: 'English' },
                    { code: 'es', title: 'Spanish' },
                    { code: 'fr', title: 'French' },
                    { code: 'ru', title: 'Russian' },
                    { code: 'bg', title: 'Bulgarian' }
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
    return ConfigMockMultilang;
}());
exports.ConfigMockMultilang = ConfigMockMultilang;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi90ZXN0aW5nL21vY2tzL25nMi1jb25maWctbXVsdGlsYW5nLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7SUE4QkEsQ0FBQztJQTdCQyxrQ0FBSSxHQUFKO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksS0FBYyxFQUFFLEdBQVk7UUFDdEMsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFO2dCQUNKLGVBQWUsRUFBRTtvQkFDZixJQUFJLEVBQUUsSUFBSTtvQkFDVixLQUFLLEVBQUUsU0FBUztpQkFDakI7Z0JBQ0Qsa0JBQWtCLEVBQUU7b0JBQ2xCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUNoQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtvQkFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7b0JBQy9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUNoQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtpQkFDbkM7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBO0FBOUJZLGtEQUFtQiIsImZpbGUiOiJhcHAvc2hhcmVkL2kxOG4vdGVzdGluZy9tb2Nrcy9uZzItY29uZmlnLW11bHRpbGFuZy5tb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vY2tNdWx0aWxhbmcge1xuICBpbml0KCk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRTZXR0aW5ncyhncm91cD86IHN0cmluZywga2V5Pzogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaTE4bjoge1xuICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U6IHtcbiAgICAgICAgICBjb2RlOiAnZW4nLFxuICAgICAgICAgIHRpdGxlOiAnRW5nbGlzaCdcbiAgICAgICAgfSxcbiAgICAgICAgYXZhaWxhYmxlTGFuZ3VhZ2VzOiBbXG4gICAgICAgICAgeyBjb2RlOiAnZW4nLCB0aXRsZTogJ0VuZ2xpc2gnIH0sXG4gICAgICAgICAgeyBjb2RlOiAnZXMnLCB0aXRsZTogJ1NwYW5pc2gnIH0sXG4gICAgICAgICAgeyBjb2RlOiAnZnInLCB0aXRsZTogJ0ZyZW5jaCcgfSxcbiAgICAgICAgICB7IGNvZGU6ICdydScsIHRpdGxlOiAnUnVzc2lhbicgfSxcbiAgICAgICAgICB7IGNvZGU6ICdiZycsIHRpdGxlOiAnQnVsZ2FyaWFuJyB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBsb2dnaW5nOiB7XG4gICAgICAgIERFQlVHOiB7XG4gICAgICAgICAgTEVWRUxfMTogZmFsc2UsXG4gICAgICAgICAgTEVWRUxfMjogZmFsc2UsXG4gICAgICAgICAgTEVWRUxfMzogZmFsc2UsXG4gICAgICAgICAgTEVWRUxfNDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
