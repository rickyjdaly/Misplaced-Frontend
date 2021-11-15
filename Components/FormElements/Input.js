import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  if (props.elType == "Header") {
    return (
      <div className={classes.Container}>
        <i className={props.icon}></i>
        <input
          className={classes.Input}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={props.onInput}
        />
      </div>
    );
  }

  if (props.elType === "Form") {
    return (
      <div className={classes.FormContainer}>
        <p>{props.placeholder}:</p>
        <input
          name={props.name}
          className={classes.FormInput}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onInput}
          required={props.required}
        />
      </div>
    );
  }
  if (props.elType === "Textarea") {
    return (
      <div className={classes.FormContainer}>
        <p>{props.placeholder}:</p>
        <textarea
          name={props.name}
          className={classes.FormInput}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onInput}
          required={props.required}
          rows={5}
          cols={5}
        />
      </div>
    );
  }

  if (props.elType === "Modal") {
    return (
      <div className={classes.ModalContainer}>
        <p>{props.placeholder}:</p>
        <input
          name={props.name}
          className={classes.ModalInput}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onInput}
        />
      </div>
    );
  }

  if (props.elType == "HeaderDropdown") {
    return (
      <div className={classes.HeaderDropdown}>
        <i className={props.icon}></i>
        <select
          className={classes.Input}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={props.onInput}
        >
          <option
            className={classes.Option}
            key="default"
            name="county"
            value=""
            disabled
            selected
          >
            {props.placeholder}
          </option>
          {props.list.map((m) => (
            <option key={m.name}>{m.name}</option>
          ))}
        </select>
      </div>
    );
  }

  if (props.elType === "Dropdown") {
    return (
      <div className={classes.SelectContainer}>
        <p>{props.placeholder}:</p>
        <select
          name={props.name}
          className={classes.SelectInput}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onInput}
          required
        >
          <option name="county" id="option" value="" disabled selected>
            {props.placeholder}
          </option>
          {props.list.map((m) => (
            <option>{m.name}</option>
          ))}
        </select>
      </div>
    );
  }

  if (props.elType === "Search") {
    return (
      <div className={classes.SearchContainer}>
        <p>{props.placeholder}:</p>
        <input
          className={classes.SearchInput}
          value={props.value}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onInput}
        />
      </div>
    );
  }
  if (props.elType === "CountySearchDropdown") {
    return (
      <div className={classes.SearchDropdownContainer}>
        <p>{props.placeholder}:</p>
        <select
          name={props.name}
          className={classes.SelectDropdownInput}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onInput}
        >
          <option
            name="county"
            key="default"
            id="option"
            value=""
            disabled
            selected
          >
            {props.placeholder}
          </option>
          {props.list.map((m) => (
            <option key={m.name}>{m.name}</option>
          ))}
        </select>
      </div>
    );
  }

  if (props.elType === "CategorySearchDropdown") {
    return (
      <div className={classes.SearchDropdownContainer}>
        <p>{props.placeholder}:</p>
        <select
          name={props.name}
          className={classes.SelectDropdownInput}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onInput}
        >
          <option
            name="county"
            key="default"
            id="option"
            value=""
            disabled
            selected
          >
            {props.placeholder}
          </option>
          {props.list.map((m) => (
            <option key={m.name}>{m.name}</option>
          ))}
        </select>
      </div>
    );
  }
};

export default Input;
