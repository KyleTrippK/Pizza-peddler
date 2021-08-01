// user interface
$(document).ready(function(){
    $("#development").click(function(){$("#development-hide").toggle(500)});
    $("#aboutPizza").addClass("text-center");
    $("#pizzacrust").addClass("text-center");
    $("#location").addClass("text-center");
    $("#toppings").addClass("text-center");
    $("#toppingsbuttons").addClass("text-center");
    $("#locationsection").addClass("text-center");
    $("#idsects").addClass("text-center");
    $("#final").addClass("text-center");
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
    $("#choiceForm").submit(function(event){
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
        // var Delivery = 150;
        pizzaPrice = (sizePrice + crustPrice + toppingPrice +150)*pizzaNumber;
        // var deliv = pizzaPrice  = Delivery
        $("#receivedOrder").show();
        $("#showprice").html(pizzaPrice);
    })
    $("#askDelivery").click(function(){
        $("#receivedOrder").hide();
        $("#locate").show();
    })
    $("#pick").click(function(){
        $("#receivedOrder").hide();
        $("#location").show();
    })
    $("#deliveryBtn").click(function(){
        $("#location").hide();
        $("#finalPrice").show();
        $("#tTotal").html(pizzaPrice)

    })
    $("#deliveryBtn").click(function(){
        var personN=$("#personName").val()
        alert(personN)
    })
})