import Chat from "./secretProject/components/Chat"
import Controls from "./secretProject/components/Controls"
import Sheet from "./secretProject/components/Sheet"

function App() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-300 text-black">
      <Chat />
      <Controls />
      <Sheet name="Sebalter"/>
    </div>
  )
}

export default App
