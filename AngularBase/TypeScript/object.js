var VladOS = {
    name: "Vlad",
    surname: "Ocheretnyi",
    age: 21,
    status: "Drink Coffe",
    getDateBirth: function () {
        return Date.now() - this.age;
    }
};
