$(document).ready(() => {
    $(document).submit(event => {
        event.preventDefault()
        var userInput = {
            userName: $('#userName').val().trim(),
            profilePic: $('#profilePic').val().trim(),
            surveyAnswers: [
                $('#question1').val(),
                $('#question2').val(),
                $('#question3').val(),
                $('#question4').val(),
                $('#question5').val(),
                $('#question6').val(),
                $('#question7').val(),
                $('#question8').val(),
                $('#question9').val(),
                $('#question10').val(),
            ]
        }
        $.ajax({
            type: 'POST',
            url: '/api/friends',
            data: userInput
        })
        .then(data => {
            console.log(data.photo)
            $('#newFriendName').text(data.name)
            $('#newFriendPhoto').attr('src', data.photo)
            $('#newFriendDesc').text(data.desc)
            $('#newFriendDisplay').modal('show')
        })
    })
    $('.close').on('click', () => {
        location.reload()
    })
})