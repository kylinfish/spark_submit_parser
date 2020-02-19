document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
    parseEntry();
});


function parseEntry() {
    let input = document.getElementById('spark_instruction').value;
    document.getElementById('originalInput').innerText = input;
    document.getElementById('spark_instruction').value = '';
    document.getElementById('result').removeAttribute('hidden');
    document.getElementById('args').innerHTML = '';


    let args = input.split('spark-submit ')[1].split(' ')

    let ulNode = document.createElement('ul');
    for (let i = 0; i < args.length; i++) {
        if (args[i] == '') {
            continue;
        }

        let content = (args[i].search('--') != -1) ? (args[i] + ':   ' + args[++i]) : args[i];

        let liNode = document.createElement('li');
        let textnode = document.createTextNode(content);
        liNode.appendChild(textnode);
        ulNode.appendChild(liNode);
    }

    document.getElementById('args').appendChild(ulNode);
}
