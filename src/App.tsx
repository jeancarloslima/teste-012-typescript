import LoginForm from "./components/LoginForm"
import UserCard from "./components/UserCard"
import UserProfile from "./components/UserProfile"

function App() {

  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      {/* <UserCard name="Jean Lima" age={21} role="admin">
        <h4>Lista de coisas favoritas</h4>
      </UserCard> */}
      {/* <UserProfile /> */}
      <LoginForm />
    </div>
  )
}

export default App
