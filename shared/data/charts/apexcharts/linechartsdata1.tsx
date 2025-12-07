"use client";

import dynamic from "next/dynamic";
import * as linechartdata from "@/shared/data/charts/apexcharts/linechartsdata";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
const Spkapexcharts = dynamic(() => import('@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts'), { ssr: false });

const LineChart1 = () => {

  return (
    <Fragment>

      {/* Page Header */}

      <Seo title={"Apex Line Charts"} />

      <Pageheader title="Charts" currentpage="Apex Line Charts" subtitle="Apex Charts" activepage="Apex Line Charts" />

      {/* Page Header Close */}

      {/* Start::row-1 */}
      <Row>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Basic Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="line-chart">
                <Spkapexcharts chartOptions={linechartdata.Linebasicoptions} chartSeries={linechartdata.Linebasicseries} type="line" width={"100%"} height={300} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Line Chart With Data Labels</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="line-chart-datalabels">
                <Spkapexcharts chartOptions={linechartdata.Linedataoptions} chartSeries={linechartdata.Linedataseries} type="line" width={"100%"} height={300} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Zoomable Time Series</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="zoom-chart">
                <Spkapexcharts chartOptions={linechartdata.Linezoomoptions} chartSeries={linechartdata.Linezoomseries} type="area" width={"100%"} height={300} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Line With Annotations</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="annotation-chart">
                <Spkapexcharts chartOptions={linechartdata.Lineannotationoptions} chartSeries={linechartdata.Lineannotationseries} type="area" width={"100%"} height={300} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Brush Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="wrapper">
                <div id="brush-chart1">
                  <Spkapexcharts chartOptions={linechartdata.Linebrushoptions} chartSeries={linechartdata.Linebrushseries} type="line" width={"100%"} height={200} />
                </div>
                <div id="brush-chart">
                  <Spkapexcharts chartOptions={linechartdata.optionsLine} chartSeries={linechartdata.seriesLine} type="area" width={"100%"} height={170} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>StepLine Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="stepline-chart">
                <Spkapexcharts chartOptions={linechartdata.Linestepoptions} chartSeries={linechartdata.Linestepseries} type="line" width={"100%"} height={380} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Gradient Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="gradient-chart">
                <Spkapexcharts chartOptions={linechartdata.Linegardientoptions} chartSeries={linechartdata.Linegardientseries} type="line" width={"100%"} height={350} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Missing/Null Values Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="null-chart">
                <Spkapexcharts chartOptions={linechartdata.Linenulloptions} chartSeries={linechartdata.Linenullseries} type="line" width={"100%"} height={350} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Real Time Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="dynamic-chart">
                <Spkapexcharts chartOptions={linechartdata.Linerealoptions} chartSeries={linechartdata.Linerealseries} type="line" width={"100%"} height={350} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Dashed Line Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="dashed-chart">
                <Spkapexcharts chartOptions={linechartdata.Linedashoptions} chartSeries={linechartdata.Linedashseries} type="line" width={"100%"} height={350} />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Syncing Charts</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id="wrapper">
                <div id="chart-line">
                  <Spkapexcharts chartOptions={linechartdata.Linesyncoptions} chartSeries={linechartdata.Linesyncseries} type="line" width={"100%"} height={160} />
                </div>
                <div id="chart-line2">
                  <Spkapexcharts chartOptions={linechartdata.optionsLine2} chartSeries={linechartdata.seriesLine2} type="line" width={"100%"} height={160} />
                </div>
                <div id="chart-area">
                  <Spkapexcharts chartOptions={linechartdata.optionsArea} chartSeries={linechartdata.seriesArea} type="area" width={"100%"} height={160} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* End::row-1 */}

    </Fragment>
  );
};

export default LineChart1;






