// [50, 60, 10] and [10, 20, 13]         
function add_numbers(num1,num2){
    for (var i=0; i<num1.length; i++){
        sum=num1[i]+num2[i]
        console.log(sum)
        console.log("  ")

    }
}
add_numbers( [50, 60, 10],[10, 20, 13] )


// // Meraki

// function add_numbers(num1,num2){
//     console.log(num1+num2);
//     console.log("------------");
//  }
  
//  function add_numbers_list(list1,list2){
//     for(var i=0;i<3;i++){
//         add_numbers(list1[i],list2[i]);
//     }
//  }
  
//  add_numbers_list([50, 60, 10],[10, 20, 13])