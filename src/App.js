
import './App.css';
import IssuesList from './components/IssueList';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <div className="mainContainer">
        <div className="leftBody">
            <ul className='leftList'>
              <li className="leftListItem">Quickstart</li>
              <li className="leftListItem">Overview</li>
              <li className="leftListItem">Guides</li>
              <li className="leftListItem">Actions</li>
              <li className="leftListItem">Activity</li>
              <li className="leftListItem">Apps</li>
              <li className="leftListItem">Billing</li>
              <li className="leftListItem">Branches</li>
              <li className="leftListItem">Checks</li>
              <li className="leftListItem">Codes of Conduct</li>
              <li className="leftListItem">Code Scanning</li>
              <li className="leftListItem">Codespaces</li>
              <li className="leftListItem">Collaborators</li>
              <li className="leftListItem">Commits</li>
              <li className="leftListItem">Dependabot</li>
              <li className="leftListItem">Dependency Graph</li>
              <li className="leftListItem">Deploy Keys</li>
              <li className="leftListItem">Deployments</li>
              <li className="leftListItem">Emojis</li>
              <li className="leftListItem">Gists</li>
            </ul>
        </div>

        <div className="ritBody">

            <IssuesList />
        </div>
      </div>

    </div>
  );
}

export default App;
