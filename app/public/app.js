$(document).ready(() => {
    $('#submit').on('click', function(event) {
        event.preventDefault()
        console.log('clicked')
        var userInput = {
            userName: $('#userName').val().trim(),
            profilePic: $('#profilePic').val().trim(),
            surveyAnswers: [
                $('#question1').val()
                $('#question2').val()
                $('#question3').val()
                $('#question4').val()
                $('#question5').val()
                $('#question6').val()
                $('#question7').val()
                $('#question8').val()
                $('#question9').val()
                $('#question10').val()
            ]
        }
        $.post('/api/friends', userInput,
        function(data) {
            console.log('User added')
            $('#userName').val('')
            $('#profilePic').val('')
        })
    })
})