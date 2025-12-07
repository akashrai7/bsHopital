"use client";

import dynamic from "next/dynamic";
import { Fragment } from "react";
const LineChart1 = dynamic(() => import('@/shared/data/charts/apexcharts/linechartsdata1'), { ssr: false });

interface LineChartProps {}

const LineChart: React.FC<LineChartProps> = () => {

  return (
    <Fragment>

      <LineChart1 />

    </Fragment>
  );
};

export default LineChart;






