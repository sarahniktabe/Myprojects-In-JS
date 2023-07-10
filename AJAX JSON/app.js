// 1
document.querySelector('#button1').addEventListener('click', loadEmployee)
document.querySelector('#button2').addEventListener('click', loadEmployees)

function loadEmployee(){
    //2 
    const xhr = new XMLHttpRequest()

    //3 
    xhr.open('GET', 'employee.json', true)

    //4
    xhr.onload = function(){
        if (this.status === 200) {
            const response = JSON.parse(this.responseText)
            const output = `
            <ul>
                <li>ID: ${response.id}</li>
                <li>Name: ${response.name}</li>
                <li>Company: ${response.compony}</li>
                <li>Job: ${response.job}</li>
            </ul>
            `       
            document.querySelector('#employee').innerHTML = output
        }
    }

    // 5
    xhr.send()
}

function loadEmployees(){
    //2 
    const xhr = new XMLHttpRequest()

    //3 
    xhr.open('GET', 'employees.json', true)

    //4
    xhr.onload = function(){
        if (this.status === 200) {
            const response = JSON.parse(this.responseText)
            let output = ''
            response.forEach(employee => {
                
                output +=`
                <ul>
                    <li>ID: ${employee.id}</li>
                    <li>Name: ${employee.name}</li>
                    <li>Company: ${employee.compony}</li>
                    <li>Job: ${employee.job}</li>
                </ul>
                `   
            }); 
            document.querySelector('#employees').innerHTML = output
        }
    }

    // 5
    xhr.send()
}