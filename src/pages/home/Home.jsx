import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo'
import './home.css'
import Chart from '../../Components/chart/Chart'
import { userData } from '../../dummyData'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
    </div>
  )
}
