import './App.css';

function App() {
  const title = "Welcome to the blog!"
  const likes = 50;
  const link = "https://google.com"

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <a href={ link }>View</a>
      </div>
    </div>
  );
}

export default App;
