// 1
const user = {
    hobby: "",
    premium: true,
}
user.mood = "happy"
user.hobby = "skydiving"
user.premium = false;
for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

// 2
const user1 = {
    mood: "happy",
    hobby: "skydiving",
    premium: true,
}
const countProps = (object) => {
    return Object.keys(object).length;
};
console.log(countProps(user1));

// 3
const employees3 = [
    { name: "employee1", tasks: 2 },
    { name: "employee2", tasks: 3 },
    { name: "employee3", tasks: 5 },
    { name: "employee4", tasks: 1 },
    { name: "employee5", tasks: 8 },
    { name: "employee6", tasks: 2 },
]
const findBestEmployee = (objects) => {
    return objects.reduce((acc, object) => {
        return object.tasks > acc.tasks ? object : acc;
    })
};
console.log(findBestEmployee(employees3))

// 4
const employees = {
    employee1: 1000,
    employee2: 1500,
    employee3: 2000,
    employee4: 1200,
    employee5: 1800,
};
const countTotalSalary = (employees) => {
    return Object.values(employees).reduce((total, sum) => total + sum, 0);
};
console.log(countTotalSalary(employees))

// 5
const employees2 = [
    { name: "employee1", tasks: 2 },
    { name: "employee2", tasks: 3 },
    { name: "employee3", tasks: 5 },
    { name: "employee4" },
    { name: "employee5", tasks: 8 }
];
const getAllPropValues = (arr, prop) => {
    return arr.map(item => item[prop]);
};
console.log(getAllPropValues(employees2, 'tasks'));

// 6
const products = [
    { name: "apple", price: 15, quantity: 10 },
    { name: "banana", price: 50, quantity: 20 },
    { name: "apple", price: 18, quantity: 15 }
];
const calculateTotalPrice = (allProducts, productName) => {
    const product = allProducts.find(product => product.name === productName);
    if (product) {
        return product.price * product.quantity;
    }
};
console.log(calculateTotalPrice(products, "apple"));

// 7 
const account = {
    balance: 0,
    transactions: [],
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push({ type: 'deposit', amount });
        }
    },
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push({ type: 'withdraw', amount });
        }
    },
    transactionHistory() {
        return this.transactions;
    },
};
account.deposit(100);
account.withdraw(50);
console.log(account.transactionHistory());