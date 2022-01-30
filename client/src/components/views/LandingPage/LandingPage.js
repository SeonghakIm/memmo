import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  let navigate = useNavigate();
  const onClickHandler = () => {
    axios.get("api/user/logout").then((response) => {
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("로그아웃에 실패했습니다");
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
      <h2>시작 페이지</h2>
      <br />
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
}

export default LandingPage;
