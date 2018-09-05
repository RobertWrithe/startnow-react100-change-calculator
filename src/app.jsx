import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  calculateChange(event) {
    event.preventDefault();
    this.state.changeDue = '';
    const amountDue = parseFloat(this.state.amountDue) * 100;
    const amountReceived = parseFloat(this.state.amountReceived) * 100;
    let changeDue = amountReceived - amountDue;
    if (isNaN(changeDue)) {
      this.setState({ changeDue: '' })
    } else { this.setState({ changeDue: changeDue }) };
    if (changeDue > 2000) {
      let twenties = Math.floor(changeDue / 2000);
      changeDue %= 2000;
      this.setState({ twenties: twenties });
    } else { this.setState({ twenties: '' }) };
    if (changeDue > 1000) {
      let tens = Math.floor(changeDue / 1000);
      changeDue %= 1000;
      this.setState({ tens: tens });
    } else { this.setState({ tens: '' }) };
    if (changeDue > 500) {
      let fives = Math.floor(changeDue / 500);
      changeDue %= 500;
      this.setState({ fives: fives });
    } else { this.setState({ fives: '' }) };
    if (changeDue > 100) {
      let ones = Math.floor(changeDue / 100);
      changeDue %= 100;
      this.setState({ ones: ones });
    } else { this.setState({ ones: '' }) };
    if (changeDue > 25) {
      let quarters = Math.floor(changeDue / 25);
      changeDue %= 25;
      this.setState({ quarters: quarters });
    } else { this.setState({ quarters: '' }) };
    if (changeDue > 10) {
      let dimes = Math.floor(changeDue / 10);
      changeDue %= 10;
      this.setState({ dimes: dimes });
    } else { this.setState({ dimes: '' }) };
    if (changeDue > 5) {
      let nickels = Math.floor(changeDue / 5);
      changeDue %= 5;
      this.setState({ nickels: nickels });
    } else { this.setState({ nickels: '' }) };
    if (changeDue > 0) {
      let pennies = Math.round(changeDue);
      this.setState({ pennies: pennies });
    } else { this.setState({ pennies: '' }) };
  };


  render() {
    return (
      <div className='container'>
        <h1 style={{ color: 'white' }}>Change Calculator</h1>
        <hr></hr>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Enter Information</div>
              <div className='panel-body'>
                <form className='form'>
                  <div className='form-group'>
                    <label>How much is due?</label>
                    <input
                      name='amountDue'
                      type='number'
                      id='amountDue'
                      className='form-control'
                      placeholder='0.00'
                      onChange={this.handleChange}
                      value={this.state.amountDue}
                    />
                  </div>
                  <div className='form-group'>
                    <label>How much was received?</label>
                    <input
                      name='amountReceived'
                      type='number'
                      id='amountReceived'
                      className='form-control'
                      placeholder='0.00'
                      onChange={this.handleChange}
                      value={this.state.amountReceived}
                    />
                  </div>
                </form>
              </div>
              <div className='panel-footer'><button type='submit' className='btn btn-primary' name='submit' onClick={this.calculateChange}>Calculate</button></div>
            </div>
          </div>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-body text-center'>
                <div>
                  {this.state.changeDue === '' &&
                    <div className='alert alert-info' role='alert'>Please enter information.</div>
                  }
                  {this.state.changeDue > 0 &&
                    <div className='alert alert-success' role='alert'>The total change due is ${(this.state.changeDue / 100).toFixed(2)}</div>
                  }
                  {this.state.changeDue < 0 &&
                    <div className='alert alert-danger' role='alert'>Additional money owed.</div>
                  }
                </div>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='well'>
                      <p><strong>Twenties</strong></p>
                      <p className='change'>{this.state.twenties || 0}</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='well'>
                      <p><strong>Tens</strong></p>
                      <p className='change'>{this.state.tens || 0}</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='well'>
                      <p><strong>Fives</strong></p>
                      <p className='change'>{this.state.fives || 0}</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='well'>
                      <p><strong>Ones</strong></p>
                      <p className='change'>{this.state.ones || 0}</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='well'>
                      <p><strong>Quarters</strong></p>
                      <p className='change'>{this.state.quarters || 0}</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='well'>
                      <p><strong>Dimes</strong></p>
                      <p className='change'>{this.state.dimes || 0}</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='well'>
                      <p><strong>Nickels</strong></p>
                      <p className='change'>{this.state.nickels || 0}</p>
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='well'>
                      <p><strong>Pennies</strong></p>
                      <p className='change'>{this.state.pennies || 0}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

{/* <div className='col-sm-8'>
  <div></div>
  <div className='container'>
    <div className='row'>
      <div className='col-sm-1'>
        <h1>Twenties</h1>
        <p className='change'>{this.state.twenties}</p>
      </div>
      <div className='col-sm-1'>
        <h1>Tens</h1>
        <p className='change'>{this.state.tens}</p>
      </div>
      <div className='col-sm-1'>
        <h1>Fives</h1>
        <p className='change'>{this.state.fives}</p>
      </div>
      <div className='col-sm-1'>
        <h1>Ones</h1>
        <p className='change'>{this.state.ones}</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-1'>
        <h1>Quarters</h1>
        <p className='change'>{this.state.quarters}</p>
      </div>
      <div className='col-sm-1'>
        <h1>Dimes</h1>
        <p className='change'>{this.state.dimes}</p>
      </div>
      <div className='col-sm-1'>
        <h1>Nickels</h1>
        <p className='change'>{this.state.nickels}</p>
      </div>
      <div className='col-sm-1'>
        <h1>Pennies</h1>
        <p className='change'>{this.state.pennies}</p>
      </div>
    </div>
  </div>
</div> */}
