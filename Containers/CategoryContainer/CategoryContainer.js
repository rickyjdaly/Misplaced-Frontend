import React, { useState, useEffect } from "react";
import Card from "../../Components/Cards/Card";
import axios from "axios";

import classes from "./CategoryContainer.module.css";

const CategoryContainer = (props) => {
  const [categoryCount, setCategoryCount] = useState([
    { name: "Animals", count: 0 },
    { name: "Bags and Wallets", count: 0 },
    { name: "Electronics", count: 0 },
    { name: "Household Property", count: 0 },
    { name: "Tools", count: 0 },
    { name: "Jewellery", count: 0 },
    { name: "Books", count: 0 },
    { name: "Musical Instruments", count: 0 },
    { name: "People", count: 0 },
    { name: "Tickets", count: 0 },
    { name: "Toys", count: 0 },
    { name: "Keys", count: 0 },
    { name: "Other", count: 0 }
  ]);
  const [getAdverts, setAdverts] = useState([]);

  const cats = [
    { name: "Animals", count: 0 },
    { name: "Bags and Wallets", count: 0 },
    { name: "Jewellery", count: 0 },
    { name: "Household Property", count: 0 },
    { name: "Tools", count: 0 },
    { name: "Electronics", count: 0 },
    { name: "Books", count: 0 },
    { name: "Musical Instruments", count: 0 },
    { name: "People", count: 0 },
    { name: "Tickets", count: 0 },
    { name: "Toys", count: 0 },
    { name: "Keys", count: 0 },
    { name: "Other", count: 0 },
    { name: "Quads", count: 0 }

  ];

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        // setAdverts(response.data);
        // addCategoryCount();

        response.data.map((item) => {
          // console.log(item.category);
          cats.map((cats) => {
            if (cats.name === item.category) {
              cats.count = cats.count + 1;

              // console.log(cats.name + '   ' + cats.count);
            }
          });
        });

        setCategoryCount(cats);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  const shortCategories = [
    {
        icon: "fas fa-dog",
        title: "Animals",
        count: categoryCount.find((x) => x.name == "Animals").count,
        data: "Animals",
      },
      {
        icon: "fas fa-key",
        title: "Keys",
        count: categoryCount.find((x) => x.name == "Keys").count,
        data: "Keys",
      },
      {
        icon: "fas fa-gem",
        title: "Jewellery",
        count: categoryCount.find((x) => x.name == "Jewellery").count,
        data: "Jewellery",
      }
    
    
  ];
  const fullCategories = [
    {
      icon: "fas fa-dog",
      title: "Animals",
      count: categoryCount.find((x) => x.name == "Animals").count,
      data: "Animals",
    },
    {
    
      icon: "fas fa-briefcase",
      title: "Bags and Wallets",
      count: categoryCount.find((x) => x.name == "Bags and Wallets").count,
      data: "Bags and Wallets",
    },
    {
      icon: "fas fa-tv",
      title: "Electronics",
      count: categoryCount.find((x) => x.name == "Electronics").count,
      data: "Electronics",
    },

    {
      icon: "fas fa-home",
      title: "Household Property",
      count: categoryCount.find((x) => x.name == "Household Property").count,
      data: "Household Property",
    },
    {
      icon: "fas fa-tools",
      title: "Tools",
      count: categoryCount.find((x) => x.name == "Tools").count,
      data: "Tools",
    },
    {
      icon: "fas fa-gem",
      title: "Jewellery",
      count: categoryCount.find((x) => x.name == "Jewellery").count,
      data: "Jewellery",
    },
    {
      icon: "fas fa-book",
      title: "Books",
      count: categoryCount.find((x) => x.name == "Books").count,
      data: "Books",
    },
    {
      icon: "fas fa-guitar",
      title: "Musical Instruments",
      count: categoryCount.find((x) => x.name == "Musical Instruments").count,
      data: "Musical Instruments",
    },

    {
      icon: "fas fa-user",
      title: "People",
      count: categoryCount.find((x) => x.name == "People").count,
      data: "People",
    },
    {
      icon: "fas fa-ticket-alt",
      title: "Tickets",
      count: categoryCount.find((x) => x.name == "Tickets").count,
      data: "Tickets",
    },
    {
      icon: "fas fa-gamepad",
      title: "Toys",
      count: categoryCount.find((x) => x.name == "Toys").count,
      data: "Toys",
    },
    {
      icon: "fas fa-key",
      title: "Keys",
      count: categoryCount.find((x) => x.name == "Keys").count,
      data: "Keys",
    },
  ];

  if (props.elType === "short") {
    return (
      <div className={classes.Container}>
        {shortCategories.map((m) => (
          <Card
            key={m.title}
            elType="Category"
            title={m.title}
            count={m.count}
            icon={m.icon}
            data={m.data}
          />
        ))}
      </div>
    );
  }
  if (props.elType === "full") {
    return (
      <div className={classes.Container}>
        {fullCategories.map((m) => (
          <Card
            elType="Category"
            title={m.title}
            count={m.count}
            icon={m.icon}
            data={m.data}
          />
        ))}
      </div>
    );
  }
};

export default CategoryContainer;
