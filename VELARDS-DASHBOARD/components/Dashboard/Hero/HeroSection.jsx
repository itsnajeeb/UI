// HeroSection.jsx
import React, { useEffect, useState } from 'react';
import border from '/dashboardimg/dashboard-img-03.png';
import bgImage from '/dashboardimg/dashboard-img-02.png';
import './hero.css';

export const HeroSection = () => {
    const endTime = new Date("2026-02-01T22:00:00").getTime();

    const getRemainingTime = (targetTime) => {
        const now = Date.now();
        const diff = targetTime - now;

        if (diff <= 0) {
            return { hours: 0, minutes: 0, seconds: 0, completed: true };
        }

        return {
            hours: Math.floor(diff / (1000 * 60 * 60)),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
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
        <section className='dashboard-section '>

            <img src={bgImage} alt="" />

            <div className='left-section'>
                <div className='heading-section'>
                    <h1 className='outlineBorder colorGredientText'>  3.1 - 3.35</h1>
                    <span className='percentage outlineBorder colorGredientText'>%</span>

                    {/* <p className='profit-title'>Profit Per day</p> */}
                </div>

                <div className='subtitle-wrapper'>
                    <div className='timer-column'>
                        <div className='box-arrow'>
                            <img src={border} alt="border" />
                            <h2>Principal return at any time!</h2>
                        </div>

                        <div className='fastrack-time-section'>
                            <p className='fastrack-title'>Fastrack Remaining Time</p>
                            <div className='timer-display'>
                                {time.completed ? (
                                    <span className='time-over'>Time Over</span>
                                ) : (
                                    <span className='timer'>
                                        {time.hours}h {time.minutes}m {time.seconds}s
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='description-section'>
                        <p><i className="bi bi-caret-right-fill"></i> Daily accruals for 30 days</p>
                        <p><i className="bi bi-caret-right-fill"></i> Instant withdrawals</p>
                        <p><i className="bi bi-caret-right-fill"></i> Free tokens every day</p>
                    </div>
                </div>
            </div>

            <div className='right-section'>
                <div className="statistic-container">
                    <div className="ring">
                        <div className="center-ring">
                            <div className='center-content'>
                                <h5>Total Income</h5>
                                <p>$962.25</p>
                            </div>
                        </div>
                    </div>

                    {/* Stat Cards */}
                    <div className="stat-card top-left">
                        <h3>$1000</h3>
                        <p>Total Invest</p>
                    </div>
                    <div className="stat-card top-right">
                        <h3>$5000</h3>
                        <p>Income Limit</p>
                    </div>
                    <div className="stat-card bottom-left">
                        <h3>$500</h3>
                        <p>Capping</p>
                    </div>
                    <div className="stat-card bottom-right">
                        <h3>$4073.78</h3>
                        <p>Remaining</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;