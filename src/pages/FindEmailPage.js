// src/pages/FindEmailPage.js
import React, { useState } from 'react';
import axios from 'axios';

function FindEmailPage() {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleFindEmail = async () => {
        try {
            const response = await axios.get(`/api/users/find-email?nickname=${nickname}`);
            setEmail(response.data.data.email);
            setError('');
        } catch (err) {
            setEmail('');
            setError('닉네임에 해당하는 이메일을 찾을 수 없습니다.');
        }
    };

    return (
        <div>
            <h2>아이디(이메일) 찾기</h2>
            <input
                type="text"
                placeholder="닉네임 입력"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            <button onClick={handleFindEmail}>이메일 찾기</button>

            {email && <p>가입된 이메일: {email}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default FindEmailPage;
