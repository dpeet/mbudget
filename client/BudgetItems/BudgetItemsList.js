Template.BudgetList.helpers({
    budgetItemsIncome: function () {
        return BudgetItems.find({Type:"Income"}, {sort: {Name: 1} });
    },
    budgetItemsExpense: function () {
        return BudgetItems.find({Type:"Expense"}, {sort: {Name: 1} });
    },
    FormatAmount:function(){
        return FormatAmountFunc(this.Amount);
    },
    FormatAmountToDate:function(){
        return Math.abs(AmountToDateFunc(this.Name)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    },
    CurrentProgress:function(){
        return CurrentProgressFunc(this.Name, this.Amount);
    },
    IncomeTotal:function(){
        return IncomeTotalFunc();
    },
    ExpenseTotal:function(){
        return ExpenseTotalFunc();
    },
    Difference:function(){
        return IncomeTotalFunc() - ExpenseTotalFunc();
    },
    IncomeSpentToDate:function(){
        return IncomeSpentToDateFunc()
    },
    ExpenseSpentToDate:function(){
        return ExpenseSpentToDateFunc()
    },
    DifferencepentToDate:function(){
        return IncomeSpentToDateFunc() - ExpenseSpentToDateFunc();
    },
});

Template.BudgetList.events({
    'click #budgetItem': function (e) {
        var budgetItemId = this._id;
        Router.go('editBudgetItem', {_id: budgetItemId});
    },
});

Template.BudgetItemsListCard.helpers({
    FormatAmount:function(){
        return FormatAmountFunc(this.Amount);
    },
    CurrentProgress:function(){
        return CurrentProgressFunc(this.Name, this.Amount);
    },
});

Template.BudgetItemsListCard.events({
    'click .budget-items-list-card': function (e) {
        var budgetItemId = this._id;
        Router.go('editBudgetItem', {_id: budgetItemId});
        // TODO change to have long form of the card?
    },
});

FormatAmountFunc = function(amt){
    return amt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};

CurrentProgressFunc = function(name, amt){
    let result = Math.abs(AmountToDateFunc(name)/parseFloat(amt)*100.0)
    return result > 0 ? Math.round(result) : 0;
};

IncomeTotalFunc = function(){
    let incomeTotal = 0;
    for(let item of BudgetItems.find({Type:"Income"}).fetch()){
        incomeTotal += item.Amount;
    }
    return incomeTotal;
};

ExpenseTotalFunc = function(){
    let expenseTotal = 0;
    for(let item of BudgetItems.find({Type:"Expense"}).fetch()){
        expenseTotal += item.Amount;
    }
    return expenseTotal;
};

AmountToDateFunc = function(name){
    let budgetCategory = name;
    let amtTotal = 0;
    for(let transaction of Transactions.find({Category:budgetCategory}).fetch()){
        amtTotal += transaction.Cost;
    }
    return amtTotal;
};

IncomeSpentToDateFunc = function(){
    let incomeTotalSpent = 0;
    for(let item of BudgetItems.find({Type:"Income"}).fetch()){
        let amt = AmountToDateFunc(item.Name)
        incomeTotalSpent += amt;
    }
    return incomeTotalSpent;
},
ExpenseSpentToDateFunc = function(){
    let expenseTotalSpent = 0;
    for(let item of BudgetItems.find({Type:"Expense"}).fetch()){
        let amt = AmountToDateFunc(item.Name)
        expenseTotalSpent += amt;
    }
    return expenseTotalSpent;
}