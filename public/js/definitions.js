const defaultUserNickname = 'anonymous'
const userNickname = localStorage.getItem('nickname') ?? defaultUserNickname
const sessionId = localStorage.getItem('sessionId') ?? null
