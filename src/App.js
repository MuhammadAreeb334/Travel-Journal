import Headers from "./components/Header"
import Main from "./components/Main";
import data from "./data";

function App() {
  const MainContent = data.map(item => {
    return <Main 
      key = {item.id}
      item = {item}
    />
  })
  return (
    <div className="App">
      <Headers />
      <section>
        {MainContent}
      </section>    
    </div>
  );
}

export default App;
