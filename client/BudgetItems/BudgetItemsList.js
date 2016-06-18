Template.BudgetList.helpers({
    budgetItemsIncome: function () {
        return BudgetItems.find({Type:"Income"}, {sort: {Name: 1} });
    },
    budgetItemsExpense: function () {
        return BudgetItems.find({Type:"Expense"}, {sort: {Name: 1} });
    },
    AmountToDate:function(){
        return AmountToDateFunc(this.Name)
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
    'click .budgetItem': function (e) {
        var budgetItemId = this._id;
        Router.go('editBudgetItem', {_id: budgetItemId});
    },
});

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