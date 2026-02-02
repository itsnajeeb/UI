import React from 'react'
import blueImg from '/webimg/card-img-01.png';
import redImg from '/webimg/card-img-02.png';
import './FreshFruits.css'
export const FreshFruits = () => {
  const FruitsData = [
    {
      cardImg: blueImg,
      cardTitle: 'FRESH FROM OUR FARM',
      fruitsName: 'Graps',
      colorName: 'Blue',
      percentage: 35,
      offerMonth: 'June-July',
      btnText: 'View All',
      cardColor: '#eee2ff',
      textColor: '#6170bc'
    },
    {
      cardImg: redImg,
      cardTitle: 'FRESH FROM OUR FARM',
      fruitsName: 'Graps',
      colorName: 'Red',
      percentage: 35,
      offerMonth: 'June-July',
      btnText: 'View All',
      cardColor: '#FFE7E6',
      textColor: '#c73d4c'

    },

  ]
  return (
    <div className='furits-container'>
      <div className='fruits-content'>

        {
          FruitsData.map((data) => (
            <div className="fruits-card" style={{ backgroundColor: data.cardColor }}>
              <div className='left-card-content'>
                <p className='card-subTitle' style={{ color: data.textColor }}>{data.cardTitle}</p>

                <div className="card-border">
                  <h5 className='card-content-subTitle' style={{ color: data.textColor }}>Nature Only</h5>
                  <h1 className='card-content-title' style={{color:data.textColor}}>
                    <span className='fruits-color' > {data.colorName} </span>
                    {data.fruitsName}</h1>

                  <p className='percentage'>{data.percentage} % IN {data.offerMonth}</p>

                  <button className='btn' style={{backgroundColor:data.textColor}}>{data.btnText} <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span></button>
                </div>
              </div>

              <div className='fruits-image'>
                <img src={data.cardImg} alt="" />
              </div>
            </div>
          ))
        }


        {/* <div className="fruits-card">
          <div className='left-card-content'>
            <p className='card-subTitle'>FRESH FROM OUR FARM : GRAPS</p>

            <div className="card-border">
              <h5 className='card-content-subTitle'>Nature Only</h5>
              <h1 className='card-content-title'>Blue Graps</h1>
              <p className='percentage'>35% OFF IN JUNE-JULY</p>
              <button className='btn'>View All <span className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span></button>
            </div>
          </div>

          <div className='fruits-image'>
            <img src={blueImg} alt="" />
          </div>
        </div> */}



      </div>
    </div>
  )
}

export default FreshFruits