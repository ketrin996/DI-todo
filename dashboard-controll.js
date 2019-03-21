let deleteDashboardData = function(dashboard_id) {
    let dashboardIdx = dashboars.findIndex(function(i) {
        return i.id === dashboard_id
    });
    dashboars.splice(dashboardIdx, 1);
    console.log(dashboars)
};

let addDashboard = function(dashboard) {
    dashboars.push(dashboard);
    console.log(dashboars)
};

