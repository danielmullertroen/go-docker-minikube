import { RegisterForm } from './components/RegisterForm';
import { UserDetails } from './components/UserDetails';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>User Management System</h1>
            <RegisterForm />
            <hr />
            <UserDetails />
        </div>
    );
}

export default App;