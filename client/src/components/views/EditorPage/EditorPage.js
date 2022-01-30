import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../_actions/user_action";

function LoginPage(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [Name, setName] = useState("name");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  /*let doBold = document.execCommand("Bold");
  let doItalic = document.execCommand("Italic"); // 기울이기
  let doUnderline = document.execCommand("Underline"); // 밑줄
  let doStrikeThrough = document.execCommand("StrikeThrough"); // 중간줄
  let doCut = document.execCommand("Cut"); // 자르기
  let doCopy = document.execCommand("Copy"); // 복사하기
  let doPaste = document.execCommand("Paste"); // 붙혀넣기
  let doUndo = document.execCommand("Undo"); // 실행취소
  let doRedo = document.execCommand("Redo"); // 다시실행
  let doinsertorderedList = document.execCommand("insertorderedList"); // 글번호 매기기
  let doinsertunorderdList = document.execCommand("insertunorderdList"); // 글머리 매기기
  let dooutdent = document.execCommand("outdent"); // 내어쓰기
  let doindent = document.execCommand("indent"); // 들여쓰기
  let dojustifyleft = document.execCommand("justifyleft"); // 왼쪽정렬
  let dojustifycenter = document.execCommand("justifycenter"); // 가운데정렬
  let dojustifyright = document.execCommand("justifyright"); // 오른쪽정렬*/

  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      nickname: Name,
      title: Title,
      content: Content,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div>
        <input type="button" value="B" onclick={document.execCommand("bold")} />
        <input
          type="button"
          value="Italic"
          onclick={document.execCommand("Italic")}
        />
        <input
          type="button"
          value="abc"
          onclick={document.execCommand("Underline")}
        />
        <input
          type="button"
          value="abc"
          onclick="document.execCommand('StrikeThrough')"
        />
        <input
          type="button"
          value="왼쪽 정렬"
          onclick="document.execCommand('justifyleft')"
        />
        <input
          type="button"
          value="가운데 정렬"
          onclick="document.execCommand('justifycenter')"
        />
        <input
          type="button"
          value="오른쪽 정렬"
          onclick="document.execCommand('justifyright')"
        />
      </div>
      <div>
        <label>작성자</label>
        <label value={Name} />
        <br />
        <label>제목</label>
        <input type="text" value={Title} onChange={onTitleHandler} />
        <br />
        <label>글 내용</label>
        <div contentEditable="true"></div>
        <div></div>
      </div>
      <button>작성</button>
    </div>
  );
}
export default LoginPage;
