$(function () {
  ////OBTENCION DE TODOS LOS CLIENTES//
  $("#getClientes").on("click", function () {
    $.ajax({
      url: "/clientes",
      success: function (row) {
        let tbody = $("tbody");
        tbody.html(""); //limpiamos a tabla

        for (i = 0; i < row.length; i++) {
          tbody.append(`
            <tr>
              <td class="id">${row[i].id}</td>
              <td>
                <input type="text" class="name" value="${row[i].name}"/>
              </td>
              <td>
                <input type="number" class="dni" value="${row[i].dni}"/>
              </td>
              <td>
                <input type="text" class="domicilio" value="${row[i].domicilio}"/>
              </td>
              <td>
                <input type="number" class="telefono" value="${row[i].telefono}"/>
              </td>
              <td>
               <button class="update-button">Update</button>
               <button class="delete-button">delete</button>
              </td>
            </tr>
          `);
        }
      },
    });
  });

  /////////////////FINN DE OBETNER TODOS LOS CLIENTES//////////////////7

  //////////CREAR UN NUEVO CLIENTE///////////
  $("#clienteForm").on("submit", function (e) {
    e.preventDefault();
    let new_name = $("#1");
    let new_dni = $("#2");
    let new_domicilio = $("#3");
    let new_telefono = $("#4");

    $.ajax({
      url: "/clientes",
      method: "POST",
      data: {
        name: new_name.val(),
        dni: new_dni.val(),
        domicilio: new_domicilio.val(),
        telefono: new_telefono.val(),
      },
      success: function (response) {
        $("#getClientes").click();
      },
    });
  });

  ////////////////FIN DE CREAR CLIENTE//////////////////////////////////

  //////////////////////////UPDATE CLIENTE/////////////////////////////////////////////////7
  $("table").on("click", ".update-button", function () {
    let row = $(this).closest("tr");
    let id = row.find(".id").text();
    let Uname = row.find(".name").val();
    let Udni = row.find(".dni").val();
    let Udomicilio = row.find(".domicilio").val();
    let Utelefono = row.find(".telefono").val();

    $.ajax({
      url: "/clientes/" + id,
      method: "PATCH",
      data: {
        name: Uname,
        dni: Udni,
        domicilio: Udomicilio,
        telefono: Utelefono,
      },
      success: function (response) {
        $("#getClientes").click();
      },
    });
  });

  /////////////////////////////////////////////////////////////////////////////


  //////DELETE CLIENTE////////////////

  $("table").on("click",".delete-button",function(){
    let row = $(this).closest("tr");
    let id = row.find(".id").text();

    $.ajax({
      url: "/clientes/" + id,
      method : "DELETE",
      success : function(response){
        $("#getProducts").click();

      }

    })



  })
   

  ////////////////////////////////////////////////
});
