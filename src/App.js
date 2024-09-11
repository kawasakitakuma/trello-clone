import Header from "./components/header/Header";
import { TaskCards } from "./components/task/TaskCards";
import mountainImage from "./images/mountain.jpg";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${mountainImage})` }}>
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
