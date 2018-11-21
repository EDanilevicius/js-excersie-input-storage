const button = document.getElementById("input_box");


button.addEventListener("submit", event =>{
    //prevent submit button from form to relod
    event.preventDefault();

    const inputName = document.querySelector("#input_box input[name='fname']").value;
    const inputPhone = document.querySelector("#input_box input[name='phone']").value;

    //localStorage
    localStorage.setItem("field1",inputName);
    localStorage.setItem("field2",inputPhone);

    document.querySelector("#name_section").innerHTML = localStorage.getItem("field1");
    document.querySelector("#phone_section").innerHTML = localStorage.getItem("field2");

});

window.addEventListener("load", function(event) {
    //Get local storage info
    let savedName = localStorage.getItem("field1")
    let savedPhone = localStorage.getItem("field2")
    //When page opens fields will be automatically updated with local storage info
    document.querySelector("#input_box input[name='fname']").value = savedName;
    document.querySelector("#input_box input[name='phone']").value = savedPhone; 
  });