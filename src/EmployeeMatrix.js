/* Write your code below */
const Matrix = require("./Matrix");

class EmployeeMatrix extends Matrix {
  constructor(rows, columns) {
    super(rows, columns);
    // Additional employee-specific setup can go here
  }
  loadData(salaryData) {
    // Convert each object into an array of its values (preserves column order)
    console.log(salaryData);
    this.data = salaryData.map((obj) => Object.values(obj));
  }
  getEmployees(department) {
    return this.getDepartmentRows(department).map((row) => row[1]);
  }

  getDepartmentRows(department) {
    return this.data.filter((row) => row[2] === department);
  }

  getTotalSalary(department) {
    let sum = 0;
    const rows = this.getDepartmentRows(department);
    for (let row of rows) sum += row[3];
    return sum;
  }
  findRichest() {
    let maxSalary = 0;
    let maxName = "";
    for (let row of this.data) {
      if (maxSalary < row[3]) {
        maxSalary = row[3];
        maxName = row[1];
      }
    }
    return maxName;
  }
}

//You can paste the code from the lesson below to test your solution
let data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 },
];

let m = new EmployeeMatrix();

m.loadData(data);
//m.print();
m.getEmployees("Finance");
console.log(m.getEmployees("Finance")); //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")); //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
console.log(m.getTotalSalary("Finance")); //prints 4300
console.log(m.getTotalSalary("Design")); //prints 5300
console.log(m.findRichest()); //prints nisha

/* Do not remove the exports below */
module.exports = EmployeeMatrix;
