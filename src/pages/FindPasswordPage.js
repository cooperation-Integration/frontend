// src/pages/FindPasswordPage.js
import React, { useState } from 'react';
import axios from 'axios';

function FindPasswordPage() {
    const [email, setEmail] = useState('');
    const [codeSent, setCodeSent] = useState(false);
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const sendCode = async () => {
        try {
            await axios.post('/api/users/send-code', { email });
            setCodeSent(true);
            setMessage('인증 코드가 이메일로 전송되었습니다.');
        } catch (err) {
            setMessage('인증 코드 전송에 실패했습니다.');
        }
    };

    return (
        <div>
            <h2>비밀번호 찾기</h2>

            <input
                type="email"
                placeholder="이메일 입력"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={sendCode}>인증 코드 전송</button>

            {codeSent && (
                <>
                    <input
                        type="text"
                        placeholder="인증 코드 입력"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="새 비밀번호 입력"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button onClick={() => setMessage('비밀번호 변경 요청은 아직 연결 안됨')}>
                        비밀번호 변경
                    </button>
                </>
            )}

            <p>{message}</p>
        </div>
    );
}

export default FindPasswordPage;
