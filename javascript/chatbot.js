document.getElementById('chatbot-toggle').addEventListener('click', () => {
    document.getElementById('chatbot-section').classList.toggle('chatbot-hidden');
    document.getElementById('chatbot-toggle').style.display = 'none';
});

document.getElementById('close-chatbot').addEventListener('click', () => {
    document.getElementById('chatbot-section').classList.add('chatbot-hidden');
    document.getElementById('chatbot-toggle').style.display = 'block';
});