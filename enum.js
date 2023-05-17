// enum UserRoles{
//     admin,
//     superAdmin,
//     manager,
//     staff
// }
// enum UserRoles{
//     admin=2,
//     superAdmin=4,
//     manager=8,
//     staff=16
// }
var orderStatus;
(function (orderStatus) {
    orderStatus[orderStatus["placed"] = 0] = "placed";
    orderStatus[orderStatus["inRoute"] = 1] = "inRoute";
    orderStatus[orderStatus["Cancelled"] = 2] = "Cancelled";
    orderStatus[orderStatus["delivered"] = 3] = "delivered";
})(orderStatus || (orderStatus = {}));
var orderStatusNumber = orderStatus.placed;
// if(status==0)
// {
// }
