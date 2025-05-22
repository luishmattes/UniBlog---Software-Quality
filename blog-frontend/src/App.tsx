import { Feed } from './pages/Feed'
import { SideBar } from './components/SideBar'

function App() {

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <Feed />
            <SideBar />
        </div>

    )
}

export default App
