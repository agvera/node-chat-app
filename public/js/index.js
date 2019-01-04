const socket = io()

socket.on('connect', function () {
    console.log('Connected to server')
    socket.emit('createMessage', {
        from: 'Chona',
        text: 'Yo!'
    })
})

socket.on('newMessage', function (message) {
    console.log('New Email', message)
})

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})