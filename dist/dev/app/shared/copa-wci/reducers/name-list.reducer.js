"use strict";
var index_1 = require("../states/index");
var actions = require("../actions/name-list.action");
function reducer(state, action) {
    if (state === void 0) { state = index_1.initialState; }
    switch (action.type) {
        case actions.ActionTypes.INITIALIZED:
            return Object.assign({}, state, {
                names: action.payload
            });
        case actions.ActionTypes.NAME_ADDED:
            return Object.assign({}, state, {
                names: state.names.concat([action.payload])
            });
        default:
            return state;
    }
}
exports.reducer = reducer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvcmVkdWNlcnMvbmFtZS1saXN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUE2RDtBQUM3RCxxREFBdUQ7QUFFdkQsaUJBQ0ksS0FBa0MsRUFDbEMsTUFBdUI7SUFEdkIsc0JBQUEsRUFBQSw0QkFBa0M7SUFHcEMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVc7WUFDbEMsTUFBTSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPO2FBQ3RCLENBQUMsQ0FBQztRQUVMLEtBQUssT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQ2pDLE1BQU0sQ0FBTyxNQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQ3JDLEtBQUssRUFBTSxLQUFLLENBQUMsS0FBSyxTQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUM7YUFDeEMsQ0FBQyxDQUFDO1FBRUw7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDO0FBbEJELDBCQWtCQyIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcGEtd2NpL3JlZHVjZXJzL25hbWUtbGlzdC5yZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNhbXBsZVN0YXRlLCBpbml0aWFsU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvaW5kZXgnO1xyXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvbmFtZS1saXN0LmFjdGlvbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcclxuICAgIHN0YXRlOiBJU2FtcGxlU3RhdGUgPSBpbml0aWFsU3RhdGUsXHJcbiAgICBhY3Rpb246IGFjdGlvbnMuQWN0aW9uc1xyXG4pOiBJU2FtcGxlU3RhdGUge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9ucy5BY3Rpb25UeXBlcy5JTklUSUFMSVpFRDpcclxuICAgICAgcmV0dXJuICg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIG5hbWVzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjYXNlIGFjdGlvbnMuQWN0aW9uVHlwZXMuTkFNRV9BRERFRDpcclxuICAgICAgcmV0dXJuICg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIG5hbWVzOiBbLi4uc3RhdGUubmFtZXMsIGFjdGlvbi5wYXlsb2FkXVxyXG4gICAgICB9KTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==
