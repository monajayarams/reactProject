import * as React from "react";
import "./styles.scss";
import CheckboxList from "./components/checkboxList";
import Textbox from "./components/textbox";
import Select from "./components/dropdown";
import RadioButton from "./components/radiobutton";
import data from "./techList.json";
import utils from "./utils";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.items = data.techList;
  }
  get initialState() {
    return {
      name: "",
      gender: "",
      experience: "Select",
      technologies: new Map(),
      errorMsg: {},
      validFields: {},
    };
  }
  handleNameChange = (e) => {
    const name = e.target.value;
    this.setState({ name: name });
  };
  handleExperienceChange = (e) => {
    const experience = e.target.value;
    this.setState({ experience: experience });
  };
  handleGenderChange = (e) => {
    const gender = e.target.value;
    this.setState({ gender: gender });
  };
  handleTechChange = (e) => {
    const { technologies } = this.state;
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState({
      technologies: technologies.set(item, isChecked),
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, gender, experience, technologies } = this.state;
    let errorMsg = { ...this.state.errorMsg };
    let validFields = { ...this.state.validFields };
    errorMsg.name = !utils.isValid(name)
      ? "Enter your Name"
      : name.match(/^[a-zA-Z ]*$/)
      ? ""
      : "Name must contain only alphabets";
    errorMsg.gender = !utils.isValid(gender) ? "Select your Gender" : "";
    errorMsg.experience = !utils.isValid(experience)
      ? "Select your Experience"
      : "";
      let techList = [];
      technologies.forEach((key, value) => {
        if (key) techList.push(value);
      });
    errorMsg.technologies = !utils.isValid(technologies)
      ? "Select your Skills"
      : techList.length === 0 ? "Select your Skills": "";
    validFields.name = !utils.isValid(errorMsg.name);
    validFields.gender = !utils.isValid(errorMsg.gender);
    validFields.experience = !utils.isValid(errorMsg.experience);
    validFields.technologies = !utils.isValid(errorMsg.technologies);
    let isFormValid = Object.entries(validFields).filter(([key, value]) => {
      return !value;
    });
    if (isFormValid.length === 0) {
      this.outputResult();
      this.setState(this.initialState);
    } else {
      this.setState({
        errorMsg: errorMsg,
        validFields: validFields,
      });
    }
  };
  outputResult = () => {
    const { name, gender, experience, technologies } = this.state;
    let techList = [];
    technologies.forEach((key, value) => {
      if (key) techList.push(value);
    });
    console.log(
      `Name: ${name}, Gender: ${gender}, Experience: ${experience}, Skills: ${techList}`
    );
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
            <h2> Candidate Form </h2>
          <form onSubmit={this.handleFormSubmit}>
            <Textbox
              name="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
              placeholder="Enter Full Name"
              valid={this.state.validFields.name}
              errorMsg={this.state.errorMsg.name}
            />
            <Select
              name="Experience"
              onChange={this.handleExperienceChange}
              selectedValue={this.state.experience}
              valid={this.state.validFields.experience}
              errorMsg={this.state.errorMsg.experience}
            />
            <RadioButton
              name="Gender"
              onChange={this.handleGenderChange}
              id="isDeveloper"
              option1="Male"
              option2="Female"
              value1="male"
              value2="female"
              value={this.state.gender}
              valid={this.state.validFields.gender}
              errorMsg={this.state.errorMsg.gender}
            />
            <CheckboxList
              name="Skills"
              items={this.items}
              value={this.state.technologies}
              onChange={this.handleTechChange}
              valid={this.state.validFields.technologies}
              errorMsg={this.state.errorMsg.technologies}
            />
            <button className="submit" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
