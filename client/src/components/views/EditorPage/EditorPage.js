import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postMemo } from "../../../_actions/user_action";

function LoginPage(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [Name] = useState("name");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const onContentHandler = (event) => {
    setContent(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      nickname: Name,
      title: Title,
      content: Content,
    };

    dispatch(postMemo(body)).then((response) => {
      if (response.payload.postSuccess) {
        navigate("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>작성자</label>
        <label value={Name} />
        <br />
        <label>제목</label>
        <input type="text" value={Title} onChange={onTitleHandler} />
        <br />
        <label>글 내용</label>
        <br />
        <textarea
          type="text"
          cols={100}
          rows={10}
          value={Content}
          onChange={onContentHandler}
        />
        <button>작성</button>
      </form>
    </div>
  );
}

export default LoginPage;
