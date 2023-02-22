let age1 = 15;
let age2 = 18;
let age3 = 60;

const checkAge = function(age){
    
        if(typeof age == 'number'){

        if(age < age1){
            console.log('You do not have acces. Because your age is ' + age + '. It is less than ' + age1);
        }
        else if(age >= age1 && age < age2){
            console.log('You have a limited access');
        }
        else if(age >= age2 && age <= age3 ){
            console.log('You can watch full content');
        }
        else if(age > age && age < 100){
            console.log('Keep calm and watch "Culture channel"');
        }
        else{
            console.log('You have to be dead')
        }
    }   
    else{ 
    console.log('Not integer value')
    }

}

checkAge('erbebt')

