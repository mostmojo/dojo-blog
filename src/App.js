import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = "Welcome to the blog!"
  // const likes = 50;
  // const link = "https://google.com"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <a href={ link }>View</a> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
