import "../css/App.css";
import ListContacts from "./ListContacts";

const App = () => {
  const contacts = [
    {
      id: "karen",
      name: "Karen Isgriggzy",
      handle: "karen_isgriggzy",
      avatarURL: "http://localhost:5001/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
  ];

  return (
    <>
      <ListContacts contacts={contacts}/>
    </>
  )
};

export default App;
