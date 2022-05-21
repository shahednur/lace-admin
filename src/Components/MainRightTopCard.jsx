import React from 'react'

const MainRightTopCard = () => {
  return (
    <div className="topCard">
        <div className="topCard_name">
            <h2>Statistics</h2>
            <a href="/" >View More</a>
        </div>
        <div className="earning">
            <p>Artwork Sold <span>187</span></p>
            <p>Artwork Canceled <span>5</span></p>
            <p>Artwork Pending <span>34</span></p>
            <p>Artwork Delivered <span>200</span></p>
            <p>Total Earning<span>324 ETH</span></p>
        </div>
    </div>
  )
}

export default MainRightTopCard