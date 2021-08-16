import FeaturedInfo from '../../Components/featuredInfo/FeaturedInfo'
import './home.css'
import Chart from '../../Components/chart/Chart'
import { userData } from '../../dummyData'
import WidgetSm from '../../Components/WidgetSm/WidgetSm'
import WidgetLg from '../../Components/WidgetLg/WidgetLg'

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
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
