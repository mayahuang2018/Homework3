const showViewPage = function (){
    $('.hide').removeClass('show');
    $('#viewPage').addClass('show');
}

const showaPage = function (){
    $('.hide').removeClass('show');
    $('#aPage').addClass('show');
}

const showvPage = function (){
    $('.hide').removeClass('show');
    $('#vPage').addClass('show');
}

const showuPage = function (){
    $('.hide').removeClass('show');
    $('#uPage').addClass('show');
}

const showdPage = function (){
    $('.hide').removeClass('show');
    $('#dPage').addClass('show');
}

$('#view').on('click',showViewPage);
$('#addPage').on('click',showaPage);
$('#verifyPage').on('click',showvPage);
$('#updatePage').on('click',showuPage);
$('#deletePage').on('click',showdPage);

//1. A View option that displays all employee info:

const render= function (){
    $('.list').empty();
    
    for (let i=0; i<employeeList.length; i++){
        $('.list').append(`<p>${employeeList[i].name}</p>
        <p>${employeeList[i].officeNum}</p>
        <p>${employeeList[i].phoneNum}</p><hr>`);
      }
  }    
   render();


/*2. An Add option that allows users to input name, office number, 
and phone number and then renders the updated employee list. */

const getInputVal = function () {
    const uName = $('#name').val();
    const officeNum = $('#officeNum').val();
    const phoneNum = $('#phoneNum').val();

    employeeList.push({
        name: uName,
        officeNum: officeNum,
        phoneNum: phoneNum
    });

   render();    
}

$('#add').on('click', getInputVal);


/* A Verify option that allows users to input a name 
and renders `yes` if the employee exists and `no` otherwise.*/

const yesOrNo = function(){
    const userName = $('#name2').val();
    for (let i=0;i< employeeList.length;i++){
    if(userName===employeeList[i].name){
      $('.list2').text("yes"); 
      break;
      
    }else{
      $('.list2').text("no");
      
    }
 }
}

$('#verify').on('click',yesOrNo);



/* An Update option that allows the user to input name, office number, and phone number 
and updates the office number and phone number of the employee 
that matches the input name, and then renders the updated employee list. */

const updateEmployee = function (){
   const udName = $('#updateName').val();
   const udofficeNum = $('#UofficeNum').val();
   const udphoneNum = $('#UphoneNum').val();

   for (let i=0;i< employeeList.length;i++){
    if(udName===employeeList[i].name){

        employeeList[i].officeNum=udofficeNum ;
        employeeList[i].phoneNum=udphoneNum;
    }
   }

   const renderUpdate= function (){
    $('.ulist').empty();
    
    for (let i=0; i<employeeList.length; i++){
        $('.ulist').append(`<p>${employeeList[i].name}</p>
        <p>${employeeList[i].officeNum}</p>
        <p>${employeeList[i].phoneNum}</p><hr>`);
      }
  }    
   renderUpdate();
  
}

$('#update').on('click',updateEmployee);


/*A Delete option that deletes the employee with the matching name and 
then renders the updated employee list. */

const nameDelete = function () {
    const deleteEmployee = $('#deleteName').val();

    for (let i=0;i< employeeList.length;i++){
        if(deleteEmployee===employeeList[i].name){
            employeeList.splice(i,1);
             
            }  
    
        }
    
    $('#deleteName').val('');
    

    const renderDelete= function (){
        $('.dlist').empty();
                
        for (let i=0; i<employeeList.length; i++){
         $('.dlist').append(`<p>${employeeList[i].name}</p>
            <p>${employeeList[i].officeNum}</p>
            <p>${employeeList[i].phoneNum}</p><hr>`);
            
          }
     }    
        renderDelete();

   

}

$('#delete').on('click',nameDelete)




