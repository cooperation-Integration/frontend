import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/users/login", formData);
            alert("로그인 성공!");
            sessionStorage.setItem("accessToken", res.data.data.accessToken);
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("로그인 실패: " + (err.response?.data?.message || "서버 오류"));
        }
    };

    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">로그인</button>
            </form>

            <hr />

            <div>
                <button onClick={() => window.location.href = 'http://localhost:8080/oauth2/authorization/kakao'}>
                    카카오 로그인
                </button>
                <br/>
                <button onClick={() => window.location.href = 'http://localhost:8080/oauth2/authorization/google'}>
                    구글 로그인
                </button>
            </div>

            <hr />

            <div>
                <p>계정이 없으신가요?</p>
                <button onClick={() => navigate("/register")}>회원가입</button>
                <br /><br />

                <p>이메일 또는 비밀번호를 잊으셨나요?</p>
                <button onClick={() => navigate("/find-email")}>이메일 찾기</button>
                <br />
                <button onClick={() => navigate("/find-password")}>비밀번호 찾기</button>
            </div>
        </div>
    );
}

export default LoginPage;
