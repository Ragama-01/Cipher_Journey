import Sidebar from './components/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Click me</h1>
      </div>

      <h1 className="headers">Join me As I document my cyber sec journey</h1>

    </div>
    
  );
}

export default App;