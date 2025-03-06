import { createContext, useEffect, useState } from "react";

const Context = createContext();

const ContextApi = ({ children }) => {
  const [user, setUser] = useState({});
  const [isOnline, setIsOnline] = useState(true);
  const [userID, setUserID] = useState(null);
  const [notes, setNotes] = useState([
    {
      id: "StudymaterialData"
    },
    {
      id: "NotesData"
    },
    {
      id: "AssignmentsData"
    },
    {
      id: "PYQsData"
    },
    {
      id: "ResearchPaperData"
    },
    {
      id: "ArchivesData"
    },
  ]);

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Context.Provider value={{
      user, setUser,
      isOnline, setIsOnline,
      userID, setUserID,
      isAuthenticated, setIsAuthenticated,
      notes, setNotes,
    }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextApi };