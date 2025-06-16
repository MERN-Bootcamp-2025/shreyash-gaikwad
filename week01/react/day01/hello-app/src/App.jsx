import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const myname = "Shreyash Gaikwad";
    const age = 24;

  return (
    <div className='hello-app'>
      <header className='header'>
        <h1>Hello Welcome to my React+Vite application</h1>
        <h2>Current Year is : {new Date().getFullYear()}</h2>
      </header>
       <section className="profile">
        <h2>About Me</h2>
        <p>Hello! I'm <strong>{myname}</strong>, a new <b>MERN Stack</b> trainee developer at <strong>MindBowser</strong></p>
      </section>
      <section>
          <label><strong>my Hobbies are :</strong></label>
        <ol>
          <li>Solving DSA</li>
          <li>Learning CSS</li>
        </ol>
      </section>
      <h3 style={{color:'blue'}}>motivational quote : Work hard until your signature becomes an autograph</h3>
    </div>
  );
}

export default App
