const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");



btn.addEventListener('click', function() {
    if (input.value != 0 ){
        let chapter = input.value;

        const listItem = document.createElement('li');
        const delBtn = document.createElement('button');

        listItem.textContent = chapter;
        listItem.appendChild(delBtn);
        delBtn.textContent = "❌";
        list.appendChild(listItem);

        console.log(listItem);

        delBtn.addEventListener('click', function() {
            list.removeChild(listItem);
          })

        input.focus();

        input.value="";

    }else {
        console.log("no entry")
    }
    }
)
