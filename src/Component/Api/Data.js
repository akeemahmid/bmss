import { FaTwitter, FaYoutube, FaGlobeAfrica, } from "react-icons/fa";
import {GiNotebook} from 'react-icons/gi'
import {TbBulbFilled} from 'react-icons/tb'
export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
 
  export const Arrays = [
    {
      heading: 'Web3 Youtuber',
      logo:  <FaYoutube/>,
      body: 'Enthusiastic Web3 YouTuber creating engaging, educating and empowering viewer about decentralized technologies, accelerating adoption through informative and insightful videos'
    },

    {
      heading: 'DeFi Analyst',
      logo:  <TbBulbFilled/>,
      body: 'Experienced DeFi analyst delivering in depth insight and research on decentralized finance trends. Driving informed decision-making and fostering growth in the DeFi ecosystem'
    },  
    {
      heading: 'Researcher ',
      logo:  <FaGlobeAfrica/>,
      body: 'Passionate crypto researcher with expertise in blockchain technology and Defi analysis. Delivering valuable insight and strategic guidance to enthusiast. Driving cryptocurrency growth through research'
    },
    {
      heading: 'Content Writer ',
      logo:  <GiNotebook/>,
      body:'Versatile content writer crafting engaging articles with valuable insight across industries, captivating readers with impactful storytelling. Delivering high- quality content that meets client unique needs and drives audience engagement'
    },
    {
      heading: 'Twitter Influence',
      logo:  <FaTwitter/>,
      body: 'Dedicated Twitter influencer providing valuable insight and thought leadership on the latest trends on cryptocurrencies, fostering discussions and accelerating crypto adoption through influential content'
    }
  ]