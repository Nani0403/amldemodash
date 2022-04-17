import React from "react";
import "./subNavbar.css";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function SubNavbar() {
  return (
    //<div className="subNavbar">
    <div className="subnavigaton">
      <Box
        sx={{
          BlockColor: "white",
          display: "flex",
          width: "100%",
          // backgroundColor:"skyblue",
        }}
      >
        <FormControl sx={{ width: "10%" }}>
          <Select defaultValue={10}>
            <MenuItem value={10}>Data Collection</MenuItem>
            <MenuItem value={20}>Basketball Detection</MenuItem>
            <MenuItem value={30}>soccer Detection</MenuItem>
            <MenuItem value={40}>Af Detection</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "10%" }}>
          <Select defaultValue={10}>
            <MenuItem value={10}>Experiment </MenuItem>
            <MenuItem value={20}>Basketball </MenuItem>
            <MenuItem value={30}>soccer </MenuItem>
            <MenuItem value={40}>Volleyball</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "10%" }}>
          <Select defaultValue={10}>
            <MenuItem value={10}>Work History</MenuItem>
            <MenuItem value={20}>2020-2021</MenuItem>
            <MenuItem value={30}>2021-2022</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
    //  </div>
  );
}

export default SubNavbar;
