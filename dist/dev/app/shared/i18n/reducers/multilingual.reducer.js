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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaTE4bi9yZWR1Y2Vycy9tdWx0aWxpbmd1YWwucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUVBQWdGO0FBQ2hGLHNFQUFzRTtBQUV0RSxpQkFDSSxLQUF3QyxFQUN4QyxNQUFlO0lBRGYsc0JBQUEsRUFBQSx5Q0FBd0M7SUFHMUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxpQ0FBVyxDQUFDLFlBQVk7WUFDM0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNoQyxNQUFNLENBQU8sTUFBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO29CQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU87aUJBQ3JCLENBQUMsQ0FBQztZQUVQLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZjtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUFmRCwwQkFlQyIsImZpbGUiOiJhcHAvc2hhcmVkL2kxOG4vcmVkdWNlcnMvbXVsdGlsaW5ndWFsLnJlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb2R1bGVcbmltcG9ydCB7IElNdWx0aWxpbmd1YWxTdGF0ZSwgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi4vc3RhdGVzL211bHRpbGluZ3VhbC5zdGF0ZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvbXVsdGlsaW5ndWFsLmFjdGlvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICAgIHN0YXRlOiBJTXVsdGlsaW5ndWFsU3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gICAgYWN0aW9uOiBBY3Rpb25zXG4pOiBJTXVsdGlsaW5ndWFsU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBY3Rpb25UeXBlcy5MQU5HX0NIQU5HRUQ6XG4gICAgICBpZiAoc3RhdGUubGFuZyAhPT0gYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIHJldHVybiAoPGFueT5PYmplY3QpLmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgIGxhbmc6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=
