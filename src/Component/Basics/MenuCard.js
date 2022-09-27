import React from 'react'

const MenuCard = ({ menuProps }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuProps.map((curElem) => {
          const { id, name, date, time, image, country, meeting } = curElem; //destructuring
          return (
            <>
              <div className='card-container' key={id}>
                
                <div className="card">
                  <div className="card-body">
                    <img src={image} alt="images" className='card-media' />
                    <h5 className="card-title">{name}-{country}</h5>
                    <div className='card-description'>
                      <div className='date-style'>{date}</div>
                      <span className="subtle"><a href={meeting}>Zoom meet</a>
                      </span>|<span className="subtle time">{time}
                      </span>
                      <div className='btn-container'>
                        <a className="card-btn">Read</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default MenuCard