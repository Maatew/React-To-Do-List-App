import './App.css';
import TaskList from './components/tasklist';
import logo from './images/logo-1.png';

function App() {
  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
          className='my-logo'
          src={logo}  
          alt="My Logo" />        
      </div>  
      <div className='task-list-main'>
        <h1>._. MY TASKS ._.</h1> 
        <TaskList />     
      </div>    
    </div>
  );
}

export default App;
