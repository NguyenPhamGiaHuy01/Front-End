import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuCart from "./MenuCart";

// const foodTypes = [
//   { label: "All", value: "all" },
//   { label: "Vegetarian only", value: "vegetarian" },
//   { label: "Non-Vegetarian", value: "non-vegetarian" },
//   { label: "Seasonal", value: "seasonal" },
// ];

const categories = ["All", "Filter 1", "Filter 2", "Filter 3", "Filter 4"];

const producs = [1,1,1,1]
const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const handleFilter = (e) => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">Cửa hàng 1</h3>
        <div>
          {/* spacing là khoảng cách giữa các lưới  */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img className="w-full h-[40vh] object-cover" src="" alt="" />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img className="w-full h-[40vh] object-cover" src="" alt="" />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img className="w-full h-[40vh] object-cover" src="" alt="" />
            </Grid>
          </Grid>
        </div>
        <div className="space-y-3 mt-3">
          <div className="pt-3 pb-5">
            <h1 className="text-4xl font-semibold">Cửa hàng 1</h1>
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur iusto nam neque, non mollitia, nisi nulla ea, sequi
                rem reprehenderit esse. Quisquam excepturi tenetur porro quo
                soluta, nulla consequuntur facere.
              </span>
            </p>

            <p className="text-gray-500 flex items-center gap-3">
              <CalendarMonthIcon />
              <span>Mon-Sun: 9h-17h</span>
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter ">
          <div className="box space-y-5 lg:sticky top-28 ">
            {/* <div>
              <Typography varinant="h5" sx={{ paddingBottom: "1rem" }}>
                ABC
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div> */}
          </div>
          {/* <Divider /> */}
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography varinant="h5" sx={{ paddingBottom: "1rem" }}>
                Filter
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="space-y-10 lg:w-[80%] lg:pl-10">
{producs.map((item)=> <MenuCart/>)}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
