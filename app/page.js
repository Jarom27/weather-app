import Image from 'next/image'
import Preview from './components/Preview'
import MainContent from './components/MainContent'
import SideBar from './components/SideBar'
import TempProvider, { TempContext } from './context/TempContext'

export default function Home() {
  return (
    <div className='flex flex-col lg:flex-row w-screen'>
      <TempProvider>
          <Preview city={"Helsinki"}></Preview>
          <SideBar></SideBar>
          <MainContent city={"Helsinki"}></MainContent>
      </TempProvider>
      
    </div>
  )
}
