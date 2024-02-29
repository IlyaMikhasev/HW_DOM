const firstList = document.querySelectorAll('li');
firstList.forEach(node => {
    let textEl = node.textContent.split('\n');
    if(textEl[0].includes('http')){
        node.innerHTML = node.innerHTML.replace(`${textEl[0]}`,`<a href="${textEl[0]}">${textEl[0]}</a>`);}
});