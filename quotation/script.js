var quotationData = [];


$(document).ready(function () {
    var currentDate = new Date();
    $("#currentDate").html(currentDate.toDateString());

    
    $.getJSON("data/data.json", data => {
        quotationData = data;
        renderTable();
    });
});



function addItem() {
    var quantity = $("#quantity").val();
    var description = $("#description").val();  
    var unitPrice = parseFloat($("#unitPrice").val());

    if (description && quantity > 0 && unitPrice > 0) {
        quotationData.push({
            "description": description,
            "quantity": Number.parseFloat(quantity),
            "unitPrice": Number.parseFloat(unitPrice),
        });
        $('#exampleModal').modal('hide')
        renderTable();
    } else {
        alert("Please fill in all fields correctly.");
    }
}

function renderTable() {
    var data = quotationData;
    var subTotal = 0;
    data.forEach(item => {
        subTotal += item.unitPrice * item.quantity;
    });
    var vat = (subTotal * 0.07).toFixed(2);
    var total = (subTotal * 1.07).toFixed(2);

    console.log("Sub Total" + subTotal);
    $("#subTotal").html("" + subTotal);
    $("#vat").html("" + vat);
    $("#total").html("" + total);

    var dataRows = data.map((item, i) => {
        let amount = (item.quantity * item.unitPrice);
        return `<tr class="data-row">
                            <td class="text-center">${item.quantity}</td>
                            <td class="data"> <button onclick="deleteItem(${i})">X</button>
                                ${item.description}
                            </td>
                            <td class="text-right">${item.unitPrice.toFixed(2)}</td>
                            <td class="text-right">${amount.toFixed(2)}</td>
                        </tr>`;   
    
    });
    $(".data-row").remove();

    dataRows.forEach((row) => {
        $("#dataTable").before(row);
    });
}

function deleteItem(i) {
    quotationData.splice(i, 1)
    renderTable()
}

