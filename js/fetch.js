let display = document.querySelector('.demo');
let btn = document.querySelector('.btn');





async function fetchData(){
    const data = await fetch('http://127.0.0.1:5500/fetch.txt')
    const showData =  await data.text();
    display.innerHTML = showData;
};


btn.addEventListener('click', fetchData);