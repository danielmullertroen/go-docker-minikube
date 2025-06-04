import { RegisterForm } from './components/RegisterForm';
import { UserDetails } from './components/UserDetails';
import logo from './assets/react.svg'; // or your own logo
import './App.css';

function App() {
    return (
        <div className="App">
            <img src={logo} alt="Logo" style={{ width: 64, display: 'block', margin: '0 auto 1.5rem' }} />
            <h1>User Management System</h1>
            <RegisterForm />
            <hr />
            <UserDetails />
        </div>
    );
}

export default App;