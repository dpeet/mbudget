Template.BudgetList.helpers({
    budgetItems: function () {
        return BudgetItems.find();
    },
});

Template.BudgetList.events({
    'click .budgetItem': function (e) {
        var budgetItemId = this._id;
        Router.go('editBudgetItem', {_id: budgetItemId});
    },
});

// Template.takePhoto.helpers({
//     'photo': function(){
//         return Session.get('photo');
//     }
// });



// if(Meteor.isClient){
//     Template.takePhoto.events({
//         'click .capture': function(){
//             MeteorCameraUI.getPicture({}, function(error, data){
//                 Session.set('photo', data);
//             });
//         }
//     });
// }