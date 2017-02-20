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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29wYS13Y2kvcmVkdWNlcnMvbmFtZS1saXN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUE2RDtBQUM3RCxxREFBdUQ7QUFFdkQsaUJBQ0ksS0FBa0MsRUFDbEMsTUFBdUI7SUFEdkIsc0JBQUEsRUFBQSw0QkFBa0M7SUFHcEMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVc7WUFDbEMsTUFBTSxDQUFPLE1BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDckMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPO2FBQ3RCLENBQUMsQ0FBQztRQUVMLEtBQUssT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVO1lBQ2pDLE1BQU0sQ0FBTyxNQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQ3JDLEtBQUssRUFBTSxLQUFLLENBQUMsS0FBSyxTQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUM7YUFDeEMsQ0FBQyxDQUFDO1FBRUw7WUFDRSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDSCxDQUFDO0FBbEJELDBCQWtCQyIsImZpbGUiOiJhcHAvc2hhcmVkL2NvcGEtd2NpL3JlZHVjZXJzL25hbWUtbGlzdC5yZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVNhbXBsZVN0YXRlLCBpbml0aWFsU3RhdGUgfSBmcm9tICcuLi9zdGF0ZXMvaW5kZXgnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL25hbWUtbGlzdC5hY3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgICBzdGF0ZTogSVNhbXBsZVN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICAgIGFjdGlvbjogYWN0aW9ucy5BY3Rpb25zXG4pOiBJU2FtcGxlU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25zLkFjdGlvblR5cGVzLklOSVRJQUxJWkVEOlxuICAgICAgcmV0dXJuICg8YW55Pk9iamVjdCkuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuYW1lczogYWN0aW9uLnBheWxvYWRcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBhY3Rpb25zLkFjdGlvblR5cGVzLk5BTUVfQURERUQ6XG4gICAgICByZXR1cm4gKDxhbnk+T2JqZWN0KS5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5hbWVzOiBbLi4uc3RhdGUubmFtZXMsIGFjdGlvbi5wYXlsb2FkXVxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=
