import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo'

import './home.css'
import Chart from '../../Components/chart/Chart'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart />
    </div>
  )
}
