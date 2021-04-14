$(document).ready(function(){
    $("#buttonAdd").click(function(){
        let title = $( "#Title" ).val();
        let location = $( "#Location" ).val();
        let description = $( "#Description" ).val();

        let startDate = $( "#Start-date" ).val();
        let startTime = $( "#Start-time" ).val();

        let endDate = $( "#End-date" ).val();
        let endTime = $( "#End-time" ).val();

        let misssingValue = false;
        if(title.length == 0){
            $( "#Title" ).css("background-color","RED");
            misssingValue = true;
        }else{
            $( "#Title" ).css("background-color","#FFF");
        }

        if(!startDate){
            $( "#Start-date" ).css("background-color","RED");
            misssingValue = true;
        }else{
            $( "#Start-date" ).css("background-color","#FFF");
        }

        if(misssingValue){
            return;
        }

        console.log(startDate);

        // if(title.length == 0){
        //     $( "#Title" ).css("background-color","RED");
        // }
    });
});