$(document).ready(function(){
    const _url = "https://my-json-server.typicode.com/Alfianarga/pwaapi/products"

    let dataResults = ''
    let catResult = ''
    let categories = []

    $.get(_url, function(data){

        $.each(data, function(key, items){

            _cat = items.category

            dataResults += "<div>"
                            +"<h3>" + items.name + "</h3>"
                            + "<p>" + _cat + "</p>"
                        "<div>";
            
                if($.inArray(_cat, categories) == -1){
                    categories.push(_cat)
                    catResult += "<option value'"+_cat+"'>"+_cat+"</option>"
                }
        })

        $('#products').html(dataResults)
        $('#cat_select').html("<option value='all'>semua</option>" + catResult)


    })

    //Fungsi Filter
    $("#cat_select").on('change', function(){
        updateProduct($(this).val())
    })

    function updateProduct(cat){

        let dataResults = ''
        let _newUrl = _url

        if(cat != 'all')
        _newUrl = _url + "?category=" + cat

        $.get(_newUrl, function(data){

            $.each(data, function(key, items){
                _cat = items.category

                dataResults += "<div>"
                            +"<h3>" + items.name + "</h3>"
                            + "<p>" + _cat + "</p>"
                        "<div>";
            })

            $('#products').html(dataResults)
        })
    }
})