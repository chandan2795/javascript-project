const BASE_url = "like here from other side"

const dropdown = document.querySelectorAll('.dopdown  select')




for (let select of dropdown) {
    for (currCode in countryList) {
        let newOption = document.createElement('option');
        newOption.innerHTML = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected"

        } else if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected"
        }


        select.append(newOption);


    }

    select.addEventListener('change',(e)=>{
        updateFlag(e.target)
    })

}



const updateFlag =(e))=>{

}