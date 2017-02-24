"use strict";
var multilingual_state_1 = require("../states/multilingual.state");
var multilingual_action_1 = require("../actions/multilingual.action");
function reducer(state, action) {
    if (state === void 0) { state = multilingual_state_1.initialState; }
    switch (action.type) {
        case multilingual_action_1.ActionTypes.LANG_CHANGED:
            if (state.lang !== action.payload)
                return Object.assign({}, state, {
                    lang: action.payload
                });
            return state;
        default:
            return state;
    }
}
exports.reducer = reducer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi9yZWR1Y2Vycy9tdWx0aWxpbmd1YWwucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUVBQWdGO0FBQ2hGLHNFQUFzRTtBQUV0RSxpQkFDSSxLQUF3QyxFQUN4QyxNQUFlO0lBRGYsc0JBQUEsRUFBQSx5Q0FBd0M7SUFHMUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxpQ0FBVyxDQUFDLFlBQVk7WUFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNoQyxNQUFNLENBQU8sTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO29CQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU87aUJBQ3JCLENBQUMsQ0FBQztZQUVQLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZjtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUFmRCwwQkFlQyIsImZpbGUiOiJhcHAvc2hhcmVkL2kxOG4vcmVkdWNlcnMvbXVsdGlsaW5ndWFsLnJlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb2R1bGVcclxuaW1wb3J0IHsgSU11bHRpbGluZ3VhbFN0YXRlLCBpbml0aWFsU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvbXVsdGlsaW5ndWFsLnN0YXRlJztcclxuaW1wb3J0IHsgQWN0aW9ucywgQWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL211bHRpbGluZ3VhbC5hY3Rpb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXHJcbiAgICBzdGF0ZTogSU11bHRpbGluZ3VhbFN0YXRlID0gaW5pdGlhbFN0YXRlLFxyXG4gICAgYWN0aW9uOiBBY3Rpb25zXHJcbik6IElNdWx0aWxpbmd1YWxTdGF0ZSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBY3Rpb25UeXBlcy5MQU5HX0NIQU5HRUQ6XHJcbiAgICAgIGlmIChzdGF0ZS5sYW5nICE9PSBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICByZXR1cm4gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGxhbmc6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIl19
