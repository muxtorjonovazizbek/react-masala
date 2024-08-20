import React, { Component } from "react";

export default class App extends Component {
  state = {
    counters: [0],
    active: false,
    data: [
      {id: 1, firstName: "John", lastName: "Smith", age: 45, city: "Chicago", salary: 1000},
      {id: 2, firstName: "Jane", lastName: "Doe", age: 25, city: "New York", salary: 5000},
      {id: 3, firstName: "Mary", lastName: "Smith", age: 16, city: "Chicago", salary: 2500},
      {id: 4, firstName: "Hane", lastName: "Luke", age: 15, city: "Washington", salary: 3000},
      {id: 5, firstName: "Cay", lastName: "Cane", age: 22, city: "Las Vegas", salary: 3000},
  
  
    ]
  };


  armyFilter = () => {
    const {data} = this.state
    const filterdData = data.filter(item => item.age > 18)
    this.setState({
      data: filterdData
    })

  }

  addCounter = () => {
    const { counters } = this.state;
    counters.push(0);
    this.setState({
      counters: counters,
    });
  };

  increaseCount = (index) => {
    const { counters } = this.state;
    counters[index] += 1;
    this.setState({
      counters: counters,
    });
  };

  decreaseCount = (index) => {
    const { counters } = this.state;
    counters[index] -= 1;
    this.setState({
      counters: counters,
    });
  };

  render() {
    const { counters, active,data } = this.state;
    return (
      <div className="container">
        <div className="row mt-4 d-flex">
          <div className="mt-4" style={{ marginLeft: "110px" }}>
            <button
              className="btn btn-success"
              onClick={() => this.setState({ active: !active })}
            >
              {active ? "Log In" : "Log Out"}
            </button>
            {active ? (
              <h1 className="mt-2">Log In</h1>
            ) : (
              <h1 className="mt-2">Welcome</h1>
            )}
            ,
          </div>

          <div className="col-md-6 offset-1 mt-5">
            <button className="btn btn-primary" onClick={this.addCounter}>
              Add Counter
            </button>
            {counters.map((item, index) => {
              return (
                <div key={index} className="d-flex gap-2 align-items-center">
                  <button
                    className="btn btn-info my-2 "
                    onClick={() => this.increaseCount(index)}
                  >
                    +
                  </button>
                  <span>{item}</span>
                  <button
                    className="btn btn-info my-2"
                    onClick={() => this.decreaseCount(index)}
                  >
                    -
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-5">
            <div className="mb-3" style={{marginLeft: "1115px"}}>
              <button className="btn btn-primary" onClick={this.armyFilter}>Armiyaga qabul qilish</button>
            </div>
            <table className="table table-bordered table-hover">
              <thead>
              <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
                <th>City</th>
                <th>Salary</th>
              </tr>
              </thead>

              <tbody>
                    {
                     data.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.age}</td>
                          <td>{item.city}</td>
                          <td>{item.salary}</td>
                        </tr>
                     ))
                    }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
