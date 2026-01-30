import React, { useEffect, useState } from 'react';
import border from '/dashboardimg/dashboard-img-03.png'
import './hero.css'

export const HeroSection = () => {

    const endTime = new Date("2026-02-01T22:00:00").getTime();
    // Remaingin Time Function
    const getRemainingTime = (targetTime) => {
        const now = Date.now();
        const diff = targetTime - now;

        if (diff <= 0) {
            return {
                hours: 0,
                minutes: 0,
                seconds: 0,
                completed: true,
            };
        }

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        return {
            hours,
            minutes,
            seconds,
            completed: false,
        };
    };

    const [time, setTime] = useState(getRemainingTime(endTime));

    useEffect(() => {
        const interval = setInterval(() => {
            const t = getRemainingTime(endTime);
            setTime(t);
            if (t.completed) clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime]);


    return (
        <div className='dashboard-section '>
            <div className='left-section'>
                <div className='heading-section'>
                    <h1 className='outline-border'>3.1 - 3.35 <span className='percentage'>%</span></h1>
                    <p className='profit-title'>Profit Per day</p>
                </div>
                <div className='subtitle-section'>
                    <div>
                        <div className='box-arrow'>
                            <img src={border} alt="" />
                            <h2 >Principal return at any time!</h2>
                        </div>

                        <div className='fastrack-time-section'>
                            <p className='fastrack-title'>Fastrack Remaining Time</p>
                            <div>
                                {
                                    time.completed ? (
                                        <span className='time-over'>Time Over</span>
                                    ) :
                                        (
                                            <span className='timer'>
                                                {time.hours}h {time.minutes}m {time.seconds}s
                                            </span>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                    <div className='description-section'>
                        <p><span><i className="bi bi-caret-right-fill"></i></span>Daily accurals <br />for 30 days</p>
                        <p><span><i className="bi bi-caret-right-fill"></i></span>Instant <br />withdrawals</p>
                        <p><span><i className="bi bi-caret-right-fill"></i></span>Free tokens <br /> every day</p>
                    </div>
                </div>
            </div>
            <div className='right-section'>
                <div class="statistic">
                    <div class="ring">
                        <div class="center-ring">
                            <div className='center-content'>
                                <h5>Total Income</h5>
                                <p>$962.25</p>
                            </div>
                        </div>
                    </div>

                    <div class="card top-left">
                        <h3>$1000</h3>
                        <p>Total Invest</p>
                    </div>

                    <div class="card top-right">
                        <h3>$5000</h3>
                        <p>Income Limit</p>
                    </div>

                    <div class="card bottom-left">
                        <h3>$500</h3>
                        <p>Capping</p>
                    </div>

                    <div class="card bottom-right">
                        <h3>$4073.78</h3>
                        <p>Remaining</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
