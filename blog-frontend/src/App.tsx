import { Feed } from './pages/Feed'

function App() {

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <div className="bg-gray-800 min-h-screen w-[40rem] flex flex-col items-center justify-center">
                <Feed />
            </div>
        </div>

    )
}

export default App
