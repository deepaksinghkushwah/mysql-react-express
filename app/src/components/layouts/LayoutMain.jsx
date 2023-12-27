
import Header from '../common/Header'
import Nagivation from '../common/Nagivation'
import { Outlet } from "react-router-dom"
import Footer from '../common/Footer'
import { useUserStore } from '../../store/useStore'
import UserInfo from '../common/UserInfo'
const LayoutMain = () => {
  const user = useUserStore(state => state.user);
  return (
    <>


      <div className="container mx-auto bg-slate-100 mt-10">
        {/** header */}
        <div className='flex md:flex-row justify-around  p-3 shadow-lg sm:flex-col xs:flex-col  bg-yellow-100'>
          <div className='md:w-1/4 sm:w-full'>
            <Header />
          </div>
          <div className='col-span-2 md:w-1/2 sm:w-full'>
            {user ? <UserInfo user={user} /> : ''}
          </div>
          <div className='md:text-right mr-5 md:w-1/4 sm:text-left sm:w-full'>
            TEST
          </div>

        </div>
        {/** body */}

        <div className='flex md:flex-row mt-6 mb-6 gap-4 h-full ml-5 mr-5 sm:flex-col'>
          <div className='pt-3 lg:w-[200px] sm:flex-auto pb-3 h-72 shadow-lg bg-white'>
            <Nagivation />
          </div>
          <div className='pb-3 flex-auto w-full'>
            <div className='tracking-wide text-justify'>
              <Outlet />
            </div>
          </div>
        </div>
        
        {/** Footer */}
        <Footer />
      </div>




    </>
  )
}

export default LayoutMain