import { LinearProgress} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'
import { TrendingCoins } from '../Api/Data'
import { ContextApi } from '../Context'

export function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Slider = () => {
    const [trendingcoins, setTrendingcoins] = useState([])
    const [loading, setLoading] = useState(true)
    const {currency, symbol} = ContextApi()
    // const SliderArea = styled()({
      
    // })
    const fetchData = async()=>{
        const {data} = await axios.get(TrendingCoins(currency))
        setTrendingcoins(data)
        setLoading(false)
    }
    console.log(trendingcoins)
    useEffect(()=>{
        fetchData()
    },[currency])

    const items = trendingcoins.map((coin)=>{
        let gain = coin.price_change_percentage_24h >= 0
        return(
            <Link to={"/"} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                textTransform: 'uppercase',
                color: 'white'
            }}>
                <img src={coin?.image} alt={coin.name}
                style={{
                    marginBottom : '20px',
                    height:'100px',
                    // width: ''

                }}/>
                <span>
                    {coin.symbol} 
                &nbsp;  &nbsp;
                <span style={{
                    color: gain > 0 ? 'green' : 'red',
                    fontWeight: 500,
                }}>
                {gain && '+'}{coin?.price_change_percentage_24h?.toFixed(2)}%
                </span>
                </span>
                <span style={{ fontWeight: '500', fontSize: '20px'}}>{symbol}&nbsp;{numberWithCommas(coin?.current_price.toFixed(2))}</span>
            </Link>
        )
    })

    const responsive = {
        0:{
            items: 2,
        },
        512:{
            items: 3,
        },
        900:{
            items: 4,
        }
    }
  return (
   <div  className='trying'
    style={{
        height: '70%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        color: 'white',
        marginBottom: '3%',
    }}>
        {loading? (<LinearProgress style={{background: 'gold'}}/>):(
                <AliceCarousel
                disableDotsControls
                disableButtonsControls
                autoPlay
                mouseTracking
                infinite
                autoPlayInterval={900}
                animationDuration={1500}
                responsive={responsive}
                items={items}/>
        )}
    
    </div>

  )
}

export default Slider