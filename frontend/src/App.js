import logo from './logo.svg';
import './App.css';
import PublicationsTable from "./components/PublicationsTable";
import PublicationsForm from "./components/PublicationsForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Publications</h1>
            </header>
            <PublicationsTable/>
            <PublicationsForm/>
        </div>
    );
}

export default App;
