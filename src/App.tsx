import UserCard from "./components/UserCard"

function App() {

  return (
    <div>
      <UserCard name="Jean Lima" age={21} role="admin">
        <h4>Lista de coisas favoritas</h4>
      </UserCard>
    </div>
  )
}

export default App
