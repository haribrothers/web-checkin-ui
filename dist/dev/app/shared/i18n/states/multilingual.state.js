"use strict";
exports.initialState = {
    lang: 'en'
};
function getLang(state$) {
    return state$.select(function (state) { return state.lang; });
}
exports.getLang = getLang;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi9zdGF0ZXMvbXVsdGlsaW5ndWFsLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNYSxRQUFBLFlBQVksR0FBdUI7SUFDOUMsSUFBSSxFQUFFLElBQUk7Q0FDWCxDQUFDO0FBRUYsaUJBQXdCLE1BQXNDO0lBQzVELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRkQsMEJBRUMiLCJmaWxlIjoiYXBwL3NoYXJlZC9pMThuL3N0YXRlcy9tdWx0aWxpbmd1YWwuc3RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBJTXVsdGlsaW5ndWFsU3RhdGUge1xuICBsYW5nOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IElNdWx0aWxpbmd1YWxTdGF0ZSA9IHtcbiAgbGFuZzogJ2VuJ1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmcoc3RhdGUkOiBPYnNlcnZhYmxlPElNdWx0aWxpbmd1YWxTdGF0ZT4pIHtcbiAgcmV0dXJuIHN0YXRlJC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUubGFuZyk7XG59XG4iXX0=
