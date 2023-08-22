module.exports = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    let data = await response.json();
    return data;
};