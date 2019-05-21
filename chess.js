
//* represent white and space represent black
var c = 1,j;
for (  var i =1;i <= 8;i++,c++){
    console.log("\n")
    j = 1;
    if ( c% 2==0){
        while(j<=8){
            process.stdout.write("*  ");
            j++;
        }
    }
    else{
        while(j<=8){
            process.stdout.write("  *");
            j++;
        }
    }

}