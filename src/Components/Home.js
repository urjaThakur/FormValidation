import React, { Component } from 'react'

const initialState = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  address: "",
  height: "",
  weight: "",
  age: "",
  firsterror: "",
  lasteror: "",
  phoneerr: "",
  emailerr: "",
  heighterr: "",
  weighterr: "",
  ageerr: "",
  addresserr: "",
}
class Home extends Component {
  constructor(props) {
    super(props)

    this.state = initialState
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  validate = () => {
    const { firstname, lastname, phone, email, address, height, weight, age } = this.state;
    var pattern1 = new RegExp(/^[A-Za-z ]+$/);
    var pattern2 = new RegExp(/^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/);
    var pattern3 = new RegExp(/^([0-9]+)$/);
    var pattern4 = new RegExp(/^([0-9]{10})$/)
    let valid = true;
    if (!firstname) {
      this.setState({ firsterror: "Please fill form field" })
      valid = false;
    }
    else if (!pattern1.test(firstname)) {
      this.setState({ firsterror: "Enter valid name" })
      valid = false;
    }
    else {
      this.setState({ firsterror: "" })
    }
    if (!lastname) {
      this.setState({ lasteror: "Please fill form field" })
      valid = false;
    }
    else if (!pattern1.test(lastname)) {
      this.setState({ lasteror: "Enter valid name" })
      valid = false;
    }
    else {
      this.setState({ lasteror: "" })
    }
    if (!email) {
      this.setState({ emailerr: "Please fill form field" })
      valid = false;
    }
    else if (!pattern2.test(email)) {
      this.setState({ emailerr: "Enter valid Email" })
      valid = false;
    }
    else {
      this.setState({ emailerr: "" })
    }
    if (!phone) {
      this.setState({ phoneerr: "Please fill form field" })
      valid = false;
    }
    else if (!pattern4.test(phone)) {
      this.setState({ phoneerr: "Enter valid Phone Number" })
      valid = false
    }
    else {
      this.setState({ phoneerr: "" })
    }
    if (!height) {
      this.setState({ heighterr: "Please fill form field" })
      valid = false;
    }
    else if (!pattern3.test(height) || height === "0") {
      this.setState({ heighterr: "Enter valid height" })
      valid = false
    }
    else {
      this.setState({ heighterr: "" })
    }
    if (!weight) {
      this.setState({ weighterr: "Please fill form field" })
      valid = false;
    }
    else if (!pattern3.test(weight) || weight === "0") {
      this.setState({ weighterr: "Enter valid weight" })
      valid = false
    }
    else {
      this.setState({ weighterr: "" })
    }
    if (!age) {
      this.setState({ ageerr: "Please fill form field" })
      valid = false;
    }
    else if (!pattern3.test(age) || age === "0") {
      this.setState({ ageerr: "Enter valid age" })
      valid = false
    }
    else {
      this.setState({ ageerr: "" })
    }
    if (!address) {
      this.setState({ addresserr: "Please fill form field" })
      valid = false;
    }
    else {
      this.setState({ addresserr: "" })
    }
    return valid;
  }
  submitHandler = (e) => {
    const { firstname, lastname, phone, email, height, weight, age } = this.state;
    if (this.validate()) {
      this.props.history.push({
        pathname: "/display",
        state: {
          firstname: firstname,
          lastname: lastname,
          phone: phone,
          email: email,
          height: height,
          weight: weight,
          age: age
        }
      });
    }
    e.preventDefault();

  }

  cancelHandler = () => {
    this.setState(initialState)
  }
  render() {
    const { firsterror, lasteror, phoneerr, emailerr,
      heighterr, weighterr, ageerr, addresserr } = this.state;
    const { firstname, lastname, address, phone, email, height, weight, age } = this.state;
    return (
      <div className='card m-5 mx-auto'>
        <div className="card-header bg-dark">
          <h1 className="card-title text-white">Details</h1>
        </div>
        <div className="card-body">
          <form onSubmit={this.submitHandler}>
            <input className="form-control mb-2 "
              type="text"
              value={firstname}
              placeholder="firstname"
              name="firstname"
              onChange={this.changeHandler} />
            {firsterror ? <div className="error">{firsterror}</div> : null}
            <input className="form-control mb-2"
              type="text"
              value={lastname}
              placeholder="lastname"
              name="lastname"
              onChange={this.changeHandler} />
            {lasteror ? <div className="error">{lasteror}</div> : null}
            <input className="form-control mb-2"
              type="text"
              value={phone}
              placeholder="phone"
              name="phone"
              onChange={this.changeHandler} />
            {phoneerr ? <div className="error">{phoneerr}</div> : null}
            <input className="form-control mb-2"
              type="text"
              value={email}
              placeholder="email"
              name="email"
              onChange={this.changeHandler} />
            {emailerr ? <div className="error">{emailerr}</div> : null}
            <input className="form-control mb-2"
              type="text"
              value={address}
              placeholder="address"
              name="address"
              onChange={this.changeHandler} />
            {addresserr ? <div className="error">{addresserr}</div> : null}
            <input className="form-control mb-2"
              type="text"
              value={height}
              placeholder="height in cms"
              name="height"
              onChange={this.changeHandler} />
            {heighterr ? <div className="error">{heighterr}</div> : null}
            <input className="form-control mb-2"
              type="text"
              value={weight}
              placeholder="weight in kgs"
              name="weight"
              onChange={this.changeHandler} />
            {weighterr ? <div className="error">{weighterr}</div> : null}
            <input className="form-control mb-2"
              type="text"
              value={age}
              placeholder="age"
              name="age"
              onChange={this.changeHandler} />
            {ageerr ? <div className="error">{ageerr}</div> : null}
            <button type="submit" className="btn btn-primary  btn-block mb-2">Submit</button>
          </form>
          <button onClick={this.cancelHandler} type="submit" className="btn btn-danger  btn-block">Cancel</button>
        </div>

      </div>
    )
  }
}

export default Home
