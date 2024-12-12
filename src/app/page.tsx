import Product from './Product/page';
import Navbar from './Components/Navbar';
import Detail from './Detail/page';
import Checkout from './Checkout/page';
import Login from './Login/page'
import Card from './Card/page'
import Help from './Help/page'
import JoinUs from './JoinUs/page'

export default function Home () {
  return (
    <div>
      <Navbar/>
      <Detail/>
      <Product/>
      <Checkout/>
      <Login/>
      <Card/>
      <JoinUs/>
      <Help/>
    </div>
  )
}