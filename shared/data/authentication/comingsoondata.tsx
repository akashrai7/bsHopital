"use client"

import Countdown from "react-countdown";

const AfterComplete = () => <span>You are good to go!</span>;

const rendering = ({ days, hours, minutes, seconds, completed }: any) => {

    if (completed) {
        return <AfterComplete />;
    } else {
        return (
            <div className="d-flex gap-5 flex-wrap gy-xxl-0 gy-3 justify-content-center my-4 rounded p-4 timer-container">
                <div>
                    <div className="text-center">
                        <div>
                            <p className="mb-1 fs-13 fw-medium">Days</p>
                            <h5 className="mb-0 fw-semibold">{days}</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <div>
                            <p className="mb-1 fs-13 fw-medium">Hours</p>
                            <h5 className="mb-0 fw-semibold">{hours}</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <div>
                            <p className="mb-1 fs-13 fw-medium">Minutes</p>
                            <h5 className="mb-0 fw-semibold">{minutes}</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <div>
                            <p className="mb-1 fs-13 fw-medium">Seconds</p>
                            <h5 className="mb-0 fw-semibold">{seconds}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export function DayCounter() {
    return (<Countdown date={Date.now() + 15599999990} renderer={rendering} />);
}
