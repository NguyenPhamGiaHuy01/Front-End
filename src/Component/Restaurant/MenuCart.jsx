import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const demo = [
  {
    category: "Nuts & seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Nuts & seeds",
    ingredients: ["Protein", "Bacon strips"],
  },
];
const MenuCart = () => {

    const handleCheckBoxChange = (value)=>{
        console.log("value")
    }
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
              <img className="w-[7rem] h-[7rem] object-cover" src="" alt="" />
            </div>

            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold">Product 1</p>
              <p>Giá: </p>
              <p className="text-gray-400">Đánh giá</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
              {/* {demo.map((item) => (
                <div>
                  <p>{item.category}</p>
                  <FormGroup>
                    {item.ingredients.map((item2) => (
                      <FormControlLabel
                        control={<Checkbox onChange={()=>{handleCheckBoxChange(item)}} />}
                        label={item2}
                      />
                    ))}
                  </FormGroup>
                </div>
              ))} */}
              Phần miêu tả
            </div>

            <div className="pt-5">
                <Button variant="contained" disabled={false} type="submit">{true?"Add to Cart":"Out Of Stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MenuCart;
