import Image from 'next/image'
import Preview from './components/Preview'
import MainContent from './components/MainContent'
import SideBar from './components/SideBar'

export default function Home() {
  return (
    <div className='flex flex-col lg:flex-row w-screen'>
      <Preview city={"Helsinki"}></Preview>
      <SideBar></SideBar>
      <MainContent city={"Helsinki"}></MainContent>
    </div>
  )
}
