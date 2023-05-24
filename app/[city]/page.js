import MainContent from "../components/MainContent"
import Preview from "../components/Preview"
import SideBar from "../components/SideBar"


export default function Home({params}) {
    console.log(params)   
    return (
        <div className='flex flex-col lg:flex-row w-screen'>
        <Preview city={params.city}></Preview>
        <SideBar></SideBar>
        <MainContent city={params.city}></MainContent>
        </div>
    )
}
