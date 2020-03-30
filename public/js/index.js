const nicknameField =  document.getElementById('nicknameField')
const nickNameElement = document.getElementById('userNickname')
const changeNicknameButton = document.getElementById('changeNicknameButton')

nickNameElement.innerHTML = userNickname
nicknameField.value = userNickname

changeNicknameButton.addEventListener('click', () => {
    if (!nicknameField.value) {
        nicknameField.value = defaultUserNickname
    }

    localStorage.setItem('nickname', nicknameField.value)
    nickNameElement.innerHTML = nicknameField.value
})

socket.on('updateSessionId', ({id}) => {
    localStorage.setItem('sessionId', id)
})