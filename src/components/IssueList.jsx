import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import "./IssueList.css";
import Loader from "./Loader/Loader";

const IssuesList = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage] = useState(10);

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      const res = await fetch(
        "https://api.github.com/repos/octocat/hello-world/issues?state=open"
      );
      const data = await res.json();
      setIssues(data);
      setLoading(false);
    };

    fetchIssues();
  }, []);

  // Get current issues
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstIssue = indexOfLastIssue - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssue, indexOfLastIssue);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let counter = indexOfFirstIssue + 1;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="issuesContainer">
          <h1 className="issueHead">Issues</h1>
          <h3 className="issueSlogan">
            Use the REST API to view and manage issues, including issue
            assignees, comments, labels, and milestones.
          </h3>

          {currentIssues.map((issue) => (
            <div key={issue.id} className="issueBox">
              <h3 className="issueTitle">
                {" "}
                {counter++}.
                <span onClick={() => setSelectedIssue(issue.id)}>
                  {issue.title}
                </span>
              </h3>
              
            </div>
          ))}

          <div className="displayContainer">
            {currentIssues
              .filter((item) => item.id === selectedIssue)
              .map((issue) => {
                return (
                  <div key={issue.id} className="displayDiv">
                    <p>
                      Issue No. :- {issue.number} 
                    </p>
                    <p>created by {issue.user.login}</p>
                    <p>body:- {issue.body}</p>
                    <p>Create at :- {issue.created_at}</p>
                    <p>Update at :- {issue.updated_at}</p>
                    <p>Node Id :- {issue.node_id}</p>
                  </div>
                );
              })}
          </div>

          <div className="paginate">
            <Pagination
              selectedPage={currentPage}
              issuesPerPage={issuesPerPage}
              totalIssues={issues.length}
              paginate={paginate}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default IssuesList;
