// 获取css标准文档代码
var lis = document.getElementById("container").children
var result = [];
for (let li of lis) {
    if (li.getAttribute('data-tag').match(/css/))
        result.push({
            name: li.children[1].innerText,
            url: li.children[1].children[0].href
        })
}
console.log(result)

console.log(JSON.stringify(result, null, "    "))


let iframe = document.createElement('iframe');
document.body.innerHTML = "";
document.body.appendChild(iframe);
function happen(element, event) {
    return new Promise((resolve) => {
        let handler = () => {
            resolve();
            element.removeEventListene(event, handler)
        }
        element.addEventListener(event, handler)
    })
}
void async function () {
    for (let stand of result) {
        iframe.src = stand.url;
        await happen(iframe, 'load')
    }
}()