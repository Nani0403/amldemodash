import React from "react";
import "../Home/homepg.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
  PieSeries,
  LineSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Homepg() {
  const data = [
    { argument: "abhi", value: 30 },
    { argument: "jatin", value: 20 },
    { argument: "dheeraj", value: 10 },
    { argument: "shivani", value: 50 },
    { argument: "shahbaz", value: 60 },
  ];
  return (
    <div
      style={{
        alignItems: "center",
        height: "100%",
        width: "1500px",
        marginTop: "3%",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <Chart data={data}>
                <ArgumentAxis />
                <ValueAxis />
                <BarSeries valueField="value" argumentField="argument" />
              </Chart>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              {
                <Chart data={data}>
                  <ArgumentAxis />
                  <ValueAxis />
                  <PieSeries valueField="value" argumentField="argument" />
                </Chart>
              }
            </Item>
          </Grid>

          <Grid item xs={4}>
            <Item>
              {
                <Chart data={data}>
                  <ArgumentAxis />
                  <ValueAxis />
                  <LineSeries valueField="value" argumentField="argument" />
                </Chart>
              }
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Chart data={data}>
                <PieSeries
                  valueField="value"
                  argumentField="argument"
                  innerRadius={0.4}
                />
                <Title text="Name and data" />
              </Chart>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default Homepg;
