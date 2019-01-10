$(".devour-form").on("submit", function(event) { //on the "devour-form" btn submit
event.preventDefault();
var id = $(this).children(".burger_id").val();
console.log(id)
$.post("burgers/update/" + id, {
id: id
}).then(function(data) {
    // reload page to display devoured burger in proper column
    location.reload();
    console.log(data)
})
});
