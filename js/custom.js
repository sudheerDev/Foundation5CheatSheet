function addInputs(){
       $('#inputForm .row:last-child').removeClass('lastInput').parents('#inputForm').append('<div class="row lastInput" ><div class="small-5 columns"><input type="text" placeholder="input name" name="inputs[]"></div><div class="small-3 columns"><input type="number" placeholder="min"></div><div class="small-3 columns"><input type="number" placeholder="max"></div><div class="small-1 columns"><button class="tiny remove">-</button></div></div>');
    };   
function multipleAddInputs(){
    var increment;
    var totalInputsToAdd = $('#multipleInputs').val();
    for(increment=0; increment<totalInputsToAdd; increment++ ){
        addInputs();
    }
}
function addOutputs(){
       $('#outputForm .row:last-child').removeClass('lastOutput').parents('#outputForm').append('<div class="row lastOutput" name="Outputs[]"><div class="small-5 columns"><input type="text" placeholder="output name"></div><div class="small-3 columns"><input type="number" placeholder="min"></div><div class="small-3 columns"><input type="number" placeholder="max"></div><div class="small-1 columns"><button class="tiny remove">-</button></div></div>');
    };   
function multipleAddOutputs(){
    var increment;
    var totalOutputsToAdd = $('#multipleOutputs').val();
    for(increment=0; increment<totalOutputsToAdd; increment++ ){
        addOutputs();
    }
}
$( document ).ready(function(){
   $('#addInput').on("click",addInputs);
   $('#multipleInputsAdd').on("click",multipleAddInputs);
   $('#addOutput').on("click",addOutputs);
   $('#multipleOutputsAdd').on("click",multipleAddOutputs);
   $('#dataSubmit').on("click",function(){
   document.getElementById("inputForm").submit();
   document.getElementById("outputForm").submit();    
   });
});
 $(document).on("click",".remove",function(e){
      e.preventDefault()
      $(this).parent().parent('.row').remove()
     
   });
   

   
  

