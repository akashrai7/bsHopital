"use client"

import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";

interface DateTimePickerProps { }

const DateTimePicker: React.FC<DateTimePickerProps> = () => {

    const [dates, setDates] = useState<{ [key: string]: Date | string | null }>({});

    const handleDateChange = (key: string, date: Date | null) => {
        if (date) {
            setDates((prevDates) => ({
                ...prevDates,
                [key]: date,
            }));
        } else {
            setDates((prevDates) => {
                const { [key]: removedKey, ...rest } = prevDates;
                return rest;
            });
        }
    };
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
  
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([today, nextWeek]);
    const [startDate, endDate] = dateRange;
    return (

        <Fragment>

            <Seo title="Forms-Date & Time Picker" />

            <Pageheader title="Forms" subtitle="Form Elements" currentpage="Date & Time Picker" activepage="Date & Time Picker" />

            {/* <!-- Start:: row-1 --> */}

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Date picker
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i></InputGroup.Text>
                                    <SpkDatepickr className="form-control" placeholderText="Choose date" selected={dates["basicDate"] ? new Date(dates["basicDate"]) : null} onChange={(date: Date | null) => handleDateChange("basicDate", date)} />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Date picker With Time
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                    <SpkDatepickr className="form-control" selected={dates["timeDate"] ? new Date(dates["timeDate"]) : null} onChange={(date: Date | null) => handleDateChange("timeDate", date)} Timeinput="Time:" dateFormat="yy/MM/dd h:mm aa" placeholderText='Choose date with time' showTimeInput />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Human Friendly dates
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted">
                                        <i className="ri-calendar-line"></i> </InputGroup.Text>
                                    <SpkDatepickr className="form-control" selected={dates["humanFriendly"] ? new Date(dates["humanFriendly"]) : null} onChange={(date: Date | null) => handleDateChange("humanFriendly", date)} placeholderText="Human friendly dates" />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Date range picker
                            </div>
                        </Card.Header>
                        <Card.Body className="custom-date-picker">
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    <SpkDatepickr className="form-control breadcrumb-input datepicker-input" placeholderText="Select date range" startDate={startDate} endDate={endDate} selectsRange={true} onChange={(update: any) => setDateRange(update)} />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Month Picker
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    <SpkDatepickr className="form-control"  placeholderText="Choose  Month" selected={dates["monthPicker"] ? new Date(dates["monthPicker"]) : null} onChange={(date: Date | null) => handleDateChange("monthPicker", date)} dateFormat="MM/yyyy" Yearpicker={true} />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Locale with time
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    <SpkDatepickr className="form-control" placeholderText="Choose time in 24hr format" selected={dates["localTime"] ? new Date(dates["localTime"]) : null} onChange={(date: Date | null) => handleDateChange("localTime", date)} Localtime="pt-BR" showTimeSelect timeFormat="p" timeIntervals={15} dateFormat="Pp" />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Time picker
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    <SpkDatepickr className="form-control" selected={dates["timepicker"] ? new Date(dates["timepicker"]) : null} onChange={(date: Date | null) => handleDateChange("timepicker", date)} showTimeSelect showTimeSelectOnly={true} timeIntervals={15} Caption="Time" placeholderText="Choose Time" dateFormat="h:mm aa" />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Time Picker with Limits
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                                <InputGroup className="datepicker-inputwraper">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    <SpkDatepickr className="form-control" selected={dates["limitPicker"] ? new Date(dates["limitPicker"]) : null} onChange={(date: Date | null) => handleDateChange("limitPicker", date)} showTimeSelect showTimeSelectOnly timeIntervals={15} Caption="Time" dateFormat="h:mm aa" placeholderText="choose time min 16:00 to max 22:30" />
                                </InputGroup>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Inline Time Picker
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group overflow-auto">
                                <SpkDatepickr className="form-control" selected={dates["inlineTime"] ? new Date(dates["inlineTime"]) : null} onChange={(date: Date | null) => handleDateChange("inlineTime", date)} Inline={true} showTimeSelect showTimeSelectOnly={true} timeIntervals={15} Caption="Time" dateFormat="h:mm aa" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Inline Calendar
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group overflow-auto">
                                <SpkDatepickr className="form-control" selected={dates["timeDate"] ? new Date(dates["timeDate"]) : null} onChange={(date: Date | null) => handleDateChange("timeDate", date)} Inline={true} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Date Picker with week numbers
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="form-group mb-0">
                                        <div className="input-group">
                                            <SpkDatepickr className="form-control" selected={dates["weekNumbers"] ? new Date(dates["weekNumbers"]) : null} onChange={(date: Date | null) => handleDateChange("weekNumbers", date)} dateFormat="Y-m-d" showWeekNumbers={true} />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Preloading time
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="form-group mb-0">
                                        <div className="input-group">
                                            <SpkDatepickr className="form-control" selected={dates["preLoad"] ? new Date(dates["preLoad"]) : null} onChange={(date: Date | null) => handleDateChange("preLoad", date)} showTimeSelect showTimeSelectOnly timeIntervals={15} Caption="Time" dateFormat="h:mm aa" placeholderText="choose time" />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Col>
            </Row>

            {/* <!-- End:: row-2 --> */}

        </Fragment>
    )
};

export default DateTimePicker;