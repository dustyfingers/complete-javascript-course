// BUDGET CONTROLLER
var budgetController = (function() {
    
})();

// UI CONTROLLER
var UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,// will be either inc (income) or exp (expense)
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
        },
        getDOMStrings: function() {
            return DOMStrings;
        }
    };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMStrings();
    var crtlAddItem = function() {
        // 1. get the field input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. add the item to the budget controller
        // 3. add the new item to the ui
        // 4. calculate the budget
        // 5. display budget in ui
    }
    document.querySelector(DOM.inputBtn).addEventListener('click', crtlAddItem);

    document.addEventListener('keypress', function(evt) {
        if (evt.keyCode === 13 || evt.which === 13) {
            crtlAddItem();
        }
    })
})(budgetController, UIController);