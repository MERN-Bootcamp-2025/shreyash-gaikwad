import './App.css'
import ProfileCard from './ProfileCards'
import Profile from './profile'

function App() {
  return (
    <div className="App">
      <h1>Members</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {Profile.map((user, index) => (
          <ProfileCard key={index} {...user} />
        ))}
      </div>
    </div>
  )
}

export default App;
