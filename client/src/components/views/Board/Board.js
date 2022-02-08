import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function Board() {
  const [Loading, setLoading] = useState(true);
  let data = useRef();
  useEffect(() => {
    axios.get("/api/board/board").then((response) => {
      data.current = response.data;
      setLoading(false);
    });
  }, [Loading]);

  return (
    <>
      {Loading ? (
        <div>Loading</div>
      ) : (
        data.current.docs.map((doc) => {
          return <div key={doc._id}>{doc.title}</div>;
        })
      )}
    </>
  );
}

export default Board;
