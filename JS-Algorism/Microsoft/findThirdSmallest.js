
function findFirstThirdNin(arr){ 
    
            let firstmin = arr[0]; 
            let secmin = arr[1];  
            let thirdmin = arr[2]; 
            for (let i = 0; i < arr.length; i++) 
            { 
                /* Check if current element is less than 
                firstmin, then update first, second and 
                third */
                if (arr[i] < firstmin) 
                { 
                    thirdmin = secmin; 
                    secmin = firstmin; 
                    firstmin = arr[i]; 
                } 
          
                /* Check if current element is less than 
                secmin then update second and third */
                else if (arr[i] < secmin) 
                { 
                    thirdmin = secmin; 
                    secmin = arr[i]; 
                } 
          
                /* Check if current element is less than 
                then update third */
                else if (arr[i] <thirdmin) 
                thirdmin = arr[i]; 
        } 
      
        console.log("First min = " + firstmin ); 
        console.log("Second min = " + secmin ); 
        console.log("Third min = " + thirdmin ); 
} 

let data = [4,2,5,7,8,1];
console.log(findFirstThirdNin(data))

