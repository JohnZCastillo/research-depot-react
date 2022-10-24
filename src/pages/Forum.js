import { useState } from "react";
import CreateForum from "../components/forms/Forum";
import Navigation from "../components/Navigation";

const Forum = () => {
  const [newThread, setNewThread] = useState(false);

  const onClick = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navigation />

      <div>
        <span className="btn btn-primary" onClick={() => setNewThread(true)}>
          New Thread
        </span>
        
      </div>
      {newThread && <CreateForum name={"Post"} onClick={onClick} />}
      <h1>Forum</h1>
    </>
  );
};

export default Forum;
