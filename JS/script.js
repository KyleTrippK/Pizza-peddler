// user interface
$(document).ready(function(){
    $("#development").click(function(){$("#development-hide").toggle(500)});
    $("#aboutPizza").addClass("text-center");
    $("#pizzacrust").addClass("text-center");
    $("#location").addClass("text-center");
    $("#toppings").addClass("text-center");
    $("#toppingsbuttons").addClass("text-center");
    // $("locationsection").addClass("text-center");
    // $("#idsects").addClass("text-center");
    $("#final, #finalPrice").addClass("text-center");
    $("#receivedOrder, #locate, #location, #finalPrice").hide();
})

// Business logic
var sizePrice, crustPrice, toppingPrice, pizzaPrice;
function pizza(size, crust, toppings, number,){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
}
$(document).ready(function(){
    $("#choiceForm").last().submit(function(event){
        event.preventDefault();
        var pizzaSize = $("#pizzaSize").val();
        var pizzaCrust = $("#pizzaCrust").val();
        var pizzaTopping = $("#pizzaTopping").val();
        var pizzaNumber = $("#pizzaNumber").val();
        var piza = new pizza(pizzaSize, pizzaCrust, pizzaTopping, pizzaNumber);
        //pizza size against price
        if(piza.size == "small"){
            sizePrice = 500;
        }
        else if(piza.size == "medium"){
            sizePrice = 800;
        }
        else{
            sizePrice = 1000;
        }
        //pizza crust against price
        if(piza.crust == "stuffed crust"){
            crustPrice = 50;
        }
        else if(piza.crust == "pizza bagels"){
            crustPrice = 40;
        }
        else if(piza.crust == "flat bread"){
            crustPrice = 60;
        }
        else if(piza.crust == "chicago deep dish"){
            crustPrice = 80;
        }
        else{
            crustPrice = 70;
        }

        //pizza toppings against price
        if(piza.toppings == "fresh basil"){
            toppingPrice = 10;
        }
        else if(piza.toppings == "black olives"){
            toppingPrice = 20;
        }
        else if(piza.toppings == "pineapple"){
            toppingPrice = 30;
        }
        else{
            toppingPrice = 40;
        }
        pizzaPrice = (sizePrice + crustPrice + toppingPrice +150)*pizzaNumber;
        $("#receivedOrder").show();
        $("#showPrice").html(pizzaPrice);
        $("#submit").hide();


        $("#add").click(function(){
            var pizzaSize = $("#pizzaSize option:selected").val();
            $("#showPrice").append().last(piza.size);
        })
        $("input#pizzaSize").val("");
    })
    $("#askDelivery").click(function(){
        $("#receivedOrder").hide();
        $("#locate").show();
    })
    $("#pick").click(function(){
        $("#receivedOrder, #mainform").hide();
        $("#location").show();
    })
    $("#orders").click(function(){
        $("#mainform").show();
        $("#location").hide();
        $("#submit").show();
    })
    $("#deliveryBtn").click(function(){
        var clientLocation = $("#personLocation").val();
        var client = $("#personName").val();
        var totalPrice = pizzaPrice +  150;
        if(client == ""){
            alert("Please enter your username!");
        }
        else{
        $("#locate").hide();
        $("#clientName").html(client);
        $("#home").html(clientLocation);
        $("#finalPrice").show();
        $("#choiceForm").hide();
        $("#totalPrice").html(totalPrice);
        }
    })
    $("#back").click(function(){
        $("#choiceForm, #submit").show();
        $("#finalPrice").hide();
    })
})