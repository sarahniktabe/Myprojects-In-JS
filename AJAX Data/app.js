// Ajax
document.querySelector('#button').addEventListener('click', loadData)

function loadData(){
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'data.txt', true)

    xhr.onload = function(){
        console.log(this.status)
        // 200 -> correct
        // 404 -> not found
        // 403 -> Forbiden
        console.log(this.readyState)
        // 0 -> unsent
        // 1 -> open
        // 2 -> received
        // 3 -> loading
        // 4 -> done
        if (this.status === 200 && this.readyState === 4) {
            document.querySelector('#output').innerHTML = `<h2 style="color: blue; margin-top:50px; text-align:center">
            ${this.responseText}</h2>`
        }
    }

    xhr.send()
}