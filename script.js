document.addEventListener('DOMContentLoaded', function () {
    const topics = document.querySelectorAll('.topic');

    topics.forEach(function (topic) {
        topic.addEventListener('click', function () {
            topic.classList.toggle('active');
        });
    });
});