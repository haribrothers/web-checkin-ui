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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi90ZXN0aW5nL21vY2tzL25nMi1jb25maWctbXVsdGlsYW5nLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7SUE4QkEsQ0FBQztJQTdCQyxrQ0FBSSxHQUFKO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksS0FBYyxFQUFFLEdBQVk7UUFDdEMsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFO2dCQUNKLGVBQWUsRUFBRTtvQkFDZixJQUFJLEVBQUUsSUFBSTtvQkFDVixLQUFLLEVBQUUsU0FBUztpQkFDakI7Z0JBQ0Qsa0JBQWtCLEVBQUU7b0JBQ2xCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUNoQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtvQkFDaEMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7b0JBQy9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUNoQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtpQkFDbkM7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQTlCQSxBQThCQyxJQUFBO0FBOUJZLGtEQUFtQiIsImZpbGUiOiJhcHAvc2hhcmVkL2kxOG4vdGVzdGluZy9tb2Nrcy9uZzItY29uZmlnLW11bHRpbGFuZy5tb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vY2tNdWx0aWxhbmcge1xyXG4gIGluaXQoKTogYW55IHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0dGluZ3MoZ3JvdXA/OiBzdHJpbmcsIGtleT86IHN0cmluZyk6IGFueSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpMThuOiB7XHJcbiAgICAgICAgZGVmYXVsdExhbmd1YWdlOiB7XHJcbiAgICAgICAgICBjb2RlOiAnZW4nLFxyXG4gICAgICAgICAgdGl0bGU6ICdFbmdsaXNoJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXZhaWxhYmxlTGFuZ3VhZ2VzOiBbXHJcbiAgICAgICAgICB7IGNvZGU6ICdlbicsIHRpdGxlOiAnRW5nbGlzaCcgfSxcclxuICAgICAgICAgIHsgY29kZTogJ2VzJywgdGl0bGU6ICdTcGFuaXNoJyB9LFxyXG4gICAgICAgICAgeyBjb2RlOiAnZnInLCB0aXRsZTogJ0ZyZW5jaCcgfSxcclxuICAgICAgICAgIHsgY29kZTogJ3J1JywgdGl0bGU6ICdSdXNzaWFuJyB9LFxyXG4gICAgICAgICAgeyBjb2RlOiAnYmcnLCB0aXRsZTogJ0J1bGdhcmlhbicgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgbG9nZ2luZzoge1xyXG4gICAgICAgIERFQlVHOiB7XHJcbiAgICAgICAgICBMRVZFTF8xOiBmYWxzZSxcclxuICAgICAgICAgIExFVkVMXzI6IGZhbHNlLFxyXG4gICAgICAgICAgTEVWRUxfMzogZmFsc2UsXHJcbiAgICAgICAgICBMRVZFTF80OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19
