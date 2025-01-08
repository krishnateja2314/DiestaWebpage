import React from "react";
import Charts from "./Charts";
import axios from "axios";
const page = async () => {
  var Total = [0];
  var Culti = [0];
  var Sports = [0];
  await axios.get("/data/getScore").then((res) => {
    Total = res.data.body.score.Total;
    Culti = res.data.body.score.Culti;
    Sports = res.data.body.score.Sports;
  });
  return <Charts total={Total} cultural={Culti} sports={Sports} />;
};

export default page;
