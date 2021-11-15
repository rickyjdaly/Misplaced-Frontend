import React, { useState, useEffect } from "react";

import axios from "axios";

import classes from "./SearchContainer.module.css";
import { useRouter } from "next/router";
import Card from "../../Components/Cards/Card";
import Input from "../../Components/FormElements/Input";
import Button from "../../Components/Buttons/Button";
import counties from "../../counties";

import categories from "../../cata";

const SearchContainer = (props) => {
  const router = useRouter();

  const [getSidebar, setSidebar] = useState({
    keyword: "",
    category: "",
    contact: "",
    county: "",
    town: "",
  });
  const [getAdverts, setAdverts] = useState([]);

  const [getUserDetails, setUserDetails] = useState("");

  const [getCategories, setCategories] = useState();
 
  const [getSlider, setSlider] = useState(false);

  const [getCounty, setCounty] = useState();
  const [getTownList, setTownList] = useState([]);
  const [getTown, setTown] = useState([]);

  // useEffect(()=>{
  //     populateAdverts();

  // }, [])

  useEffect(() => {
    if (!router.isReady) {
      return;
    } else {
      var data = router.query;
      // console.log(data);
      var keys = Object.keys(data);

      if (router.query.county) {
        defaultCounty(data.county);
        setSidebar(data);
        populateAdverts(data);
      }
      if (router.query.category) {
        defaultCategory(data.category);
        setSidebar(data);
        populateAdverts(data);
      } else {
        // defaultCounty(data.county);
        setSidebar(data);
        populateAdverts(data);
      }

      // defaultCounty(data.county);

      setSidebar(data);
    }
  }, [router]);

  const populateAdverts = (data) => {
    const newData = data;
    // console.log(newData);

    console.log(newData);

    const final = {};

    for (const x in newData) {
      if (newData[x] != null && newData[x] != undefined && newData[x] != "") {
        final[x] = newData[x];
      }
    }

    axios
      .post("http://localhost:3001/filter", final)
      .then((response) => {
        setAdverts(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(getSidebar);
    const newData = getSidebar;

    populateAdverts(newData);
    router.push({ pathname: "/search", query: newData });

    setSlider(false);
  };

  const toggleSlider = () => {
    setSlider((prev) => !getSlider);
  };

  const handleChange = (e) => {
    setSidebar((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const defaultCategory = (category) => {
    console.log("default clicked" + category);

    setCategories(category);

    // const count = categories.find((cata) => cata.name === category).subs;
    // console.log(count);
    // setSubCategory(count);
    // setSubCategoryList(count);

    // if (router.query.subCategory) {
    //   const subCount = count.find(
    //     (subCata) => subCata.name === router.query.subCategory
    //   );

    //   // console.log('sub count')
    //   // console.log(subCount);

    //   var data = router.query;
    //   setUserDetails(data);

    //   setSidebar((prev) => ({
    //     ...prev,
    //     subCategory: subCount.name,
    //   }));
    //   // setCategories(event.target.value);
    //   // setSubCategoryList(subCount);
    //   setThirdCategoryList(subCount.third);
    // }
  };

  const changeCategory = (event) => {
    // const count = categories.find(
    //   (cata) => cata.name === event.target.value
    // ).subs;

    setSidebar((prev) => ({
      ...prev,
      category: event.target.value
    }));
    setCategories(event.target.value);
    // setSubCategoryList(count);
  };

//   const changeSubCategory = (e) => {
//     const count = getSubCategoryList.find(
//       (cata) => cata.name === e.target.value
//     ).third;

//     // console.log(count);

//     setSubCategory(e.target.value);
//     setThirdCategoryList(count);
//     setSidebar((prev) => ({
//       ...prev,
//       subCategory: e.target.value,
//       thirdCategory: "",
//     }));
//   };

//   const changeThirdCategory = (e) => {
//     setThirdCategory(e.target.value);
//     setUserDetails((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//     setSidebar((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

  const defaultCounty = (county) => {
    // console.log('default clicked' + county);

    const count = counties.find((cntry) => cntry.name === county).subs;
    // console.log(count);
    setTownList(count);
  };

  const changeCounty = (event) => {
    const count = counties.find(
      (cntry) => cntry.name === event.target.value
    ).subs;
    // console.log(count[0].cities);
    setSidebar((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setCounty(event.target.value);
    setTownList(count);
  };

  const changeTown = (e) => {
    setTown(e.target.value);
    setSidebar((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={classes.Page}>
      {/* <div className={classes.Arrow}>
                <i class="fas fa-chevron-right"></i>
            </div> */}

      {getSlider ? (
        <div className={classes.Slider}>
          <div className={classes.SliderClose} onClick={toggleSlider}>
            <i className="fas fa-times"></i>
          </div>

          <div className={classes.Slides}>
            <form onSubmit={handleSubmit}>
              <Input
                elType="Search"
                name="keyword"
                placeholder="Keyword"
                type="text"
                value={getSidebar.keyword}
                onInput={handleChange}
              />
              {/* <Input
                elType="Search"
                name="minPrice"
                placeholder="Min
                        Price"
                type="text"
                value={getSidebar.minPrice}
                onInput={handleChange}
              />
              <Input
                elType="Search"
                name="maxPrice"
                placeholder="Max
                        Price"
                type="text"
                value={getSidebar.maxPrice}
                onInput={handleChange}
              /> */}
              <Input
                elType="CategorySearchDropdown"
                name="category"
                placeholder="Category"
                value={getSidebar.category}
                type="text"
                list={categories}
                onInput={changeCategory}
                // onInput={handleChange}
              />
              {/* <Input
                elType="CategorySearchDropdown"
                name="subCategory"
                placeholder="SubCategory"
                value={getSidebar.subCategory}
                type="text"
                list={getSubCategoryList}
                onInput={changeSubCategory}
              />
              <Input
                elType="CategorySearchDropdown"
                name="thirdCategory"
                placeholder="ThirdCategory"
                value={getSidebar.thirdCategory}
                type="text"
                list={getThirdCategoryList}
                onInput={changeThirdCategory}
              /> */}
              <Input
                elType="CountySearchDropdown"
                placeholder="County"
                type="text"
                name="county"
                value={getSidebar.county}
                list={counties}
                onInput={changeCounty}
              />
              <Input
                elType="CountySearchDropdown"
                placeholder="Town"
                type="text"
                name="town"
                value={getSidebar.town}
                list={getTownList}
                onInput={changeTown}
              />

              <Button elType="Search" title="Search" />
            </form>
          </div>
        </div>
      ) : (
        <div className={classes.Arrow} onClick={toggleSlider}>
          <i className="fas fa-chevron-right"></i>
        </div>
      )}

      <div className={classes.Container}>
        <form onSubmit={handleSubmit}>
          <Input
            elType="Search"
            name="keyword"
            placeholder="Keyword"
            type="text"
            value={getSidebar.keyword}
            onInput={handleChange}
          />
          {/* <Input
            elType="Search"
            name="minPrice"
            placeholder="Min
                        Price"
            type="text"
            value={getSidebar.minPrice}
            onInput={handleChange}
          />
          <Input
            elType="Search"
            name="maxPrice"
            placeholder="Max
                        Price"
            type="text"
            value={getSidebar.maxPrice}
            onInput={handleChange}
          /> */}
          <Input
            elType="CategorySearchDropdown"
            name="category"
            placeholder="Category"
            value={getSidebar.category}
            type="text"
            list={categories}
            onInput={changeCategory}
            // onInput={handleChange}
          />
          {/* <Input
            elType="CategorySearchDropdown"
            name="subCategory"
            placeholder="SubCategory"
            value={getSidebar.subCategory}
            type="text"
            list={getSubCategoryList}
            onInput={changeSubCategory}
          />
          <Input
            elType="CategorySearchDropdown"
            name="thirdCategory"
            placeholder="ThirdCategory"
            value={getSidebar.thirdCategory}
            type="text"
            list={getThirdCategoryList}
            onInput={changeThirdCategory}
          /> */}
          <Input
            elType="CountySearchDropdown"
            placeholder="County"
            type="text"
            name="county"
            value={getSidebar.county}
            list={counties}
            onInput={changeCounty}
          />
          <Input
            elType="CountySearchDropdown"
            placeholder="Town"
            type="text"
            name="town"
            value={getSidebar.town}
            list={getTownList}
            onInput={changeTown}
          />

          <Button elType="Search" title="Search" />
        </form>
      </div>

      <div className={classes.Adverts}>
        <div className={classes.AdvertContainer}>
          {getAdverts.length > 0 ? (
            getAdverts.map((advert) => (
              <Card
                elType="Profile"
                adId={advert._id}
                
                title={advert.title}
                image={advert.image}
                price={advert.price}
                town={advert.town}
                county={advert.county}
                type={advert.type}
              />
            ))
          ) : (
            <h2 className={classes.ResultMessage}>No Results Found...</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
