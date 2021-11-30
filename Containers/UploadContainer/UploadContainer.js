import React, { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";
import Input from "../../Components/FormElements/Input";
import Button from "../../Components/Buttons/Button";
import classes from "./UploadContainer.module.css";

import categories from "../../cata";
import counties from "../../counties";

const UploadContainer = (props) => {
  const lostStatus = [{ name: "Lost" }, { name: "Found" }];

  const router = useRouter();

  const [getCounty, setCounty] = useState();
  const [getTownList, setTownList] = useState([]);
  const [getTown, setTown] = useState([]);

  const [getFormData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    image: "",
    contact: "",
    category: "",
  });

  // const [getToken, setToken] = useState();

  const [getImage, setImage] = useState({});

  // const [getCategories, setCategories] = useState();
  // const [getSubCategory, setSubCategory] = useState();
  // const [getSubCategoryList, setSubCategoryList] = useState([]);
  // const [getThirdCategory, setThirdCategory] = useState();
  // const [getThirdCategoryList, setThirdCategoryList] = useState([]);

  const updateForm = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const changeCounty = (e) => {
    const count = counties.find((cntry) => cntry.name === e.target.value).subs;

    // console.log(count[0].cities);
    setCounty(e.target.value);
    setTownList(count);
    // setCounty(count);
  };

  const changeTown = (e) => {
    setTown(e.target.value);
  };

  const handleImage = (e) => {
    // console.log(e.target.files[0]);
    setImage({
      selectedFile: e.target.files[0],
      loaded: 0,
    });
  };

  const changeCategory = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(getImage);

    const data = new FormData();
    data.append("title", getFormData.title);
    data.append("type", getFormData.type);
    data.append("description", getFormData.description);
    data.append("category", getFormData.category);
    data.append("contact", getFormData.contact);
    data.append("county", getCounty);
    data.append("town", getTown);

    data.append("advertImage", getImage.selectedFile);
    axios
      .post("http://localhost:3001/", data, {
        // receive two    parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        // console.log(res.statusText);

        router.push("/");
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div className={classes.Container}>
      <form onSubmit={handleSubmit}>
        <h4>Upload</h4>

        <Input
          elType="Form"
          placeholder="Title"
          type="text"
          name="title"
          onInput={updateForm}
        />
        <Input
          elType="Dropdown"
          placeholder="Type of Post"
          type="text"
          name="type"
          value={getFormData.type}
          list={lostStatus}
          onInput={changeCategory}
        />
        <Input
          elType="Textarea"
          placeholder="Description"
          type="text"
          name="description"
          onInput={updateForm}
          rows={5}
          cols={5}
        />
        <Input
          elType="Form"
          placeholder="Image (Optional)"
          type="file"
          name="image"
          onInput={handleImage}
        />

        <Input
          elType="Form"
          placeholder="Phone number"
          type="text"
          name="contact"
          onInput={updateForm}
        />

        <Input
          elType="Dropdown"
          placeholder="Category"
          type="text"
          name="category"
          value={getFormData.category}
          list={categories}
          onInput={changeCategory}
        />
        <Input
          elType="Dropdown"
          placeholder="County"
          type="text"
          name="county"
          value={getFormData.county}
          list={counties}
          onInput={changeCounty}
        />
        <Input
          elType="Dropdown"
          placeholder="Town"
          type="text"
          name="town"
          value={getFormData.town}
          list={getTownList}
          onInput={changeTown}
        />

        <Button elType="Form" title="Upload" />
      </form>
    </div>
  );
};

export default UploadContainer;
