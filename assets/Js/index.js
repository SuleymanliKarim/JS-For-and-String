{
    for (let i=0;i<10;i++){
        console.log(i)
    }
}

{
    for (let i =0 ; i < 200; i++){
        
        if(i % 2 == 0){
            console.log(i);
        }
    }
}

{
    for (let a = 0 ; a <200 ; a++){
    console.log(a)
    }
    
}

{
    for (let i =0 ; i < 200; i++){
        
        if(i % 2 !== 0){
            console.log(i);
        } 
}
}

{
    let a= "Gulbadam";

    for(let i = 0 ; i < a.length; i++){
        console.log(a[i])
    }
}

{
    let x='Qara "Black"';
    let y='Ag "Wihte"';
    let z='Qirmizi "red"';
console.log(z.length)
}

{
    let y="Wrong,Rihgt,Wrright";
        console.log(y.slice (0 , 15));
    
}


{
    let text="Hello Backend Developer";
    console.log(text.replace("Baceknd","Front end"));
}

{
    let text="7677";
    console.log(text.padStart(9,"x"));
}

{
    let text ="The rain in SPAIN stays mainlyin the plain"
    let result =text.matchAll(/ain/g);
    console.log(result);
}

{let a=4;

switch (a){
    case 1:
        console.log("Qara");
        break
        case 2:
            console.log("Qirmizi");
           break
            case 3:
                console.log("Sari");
                break
                case 4:
                    console.log("Yasil")
                    break
default : console.log("Bele reng  yoxdur")
                }
            }


        {
            let y=10,season

            switch (y){
                case 1:
                    console.log("September","autumun ");
                    break
                    case 2:
                        console.log("October","summer")
                        break
                        case 3:
                            console.log("November,autumun")
                            break
                            case 4:
                                console.log("December,Winter")
                                break
                                case 5:
                                console.log("February", "nothing")
                                    break
                                    case 6:
                                        console.log("March","nothing")
                                        break
                                        case 7:
                                        console.log("April","nothing")
                                        break    
                                        case 8:
                                                console.log("Octomber","never")
                                                break
                                                case 9:
                                                    console.log("August","autwin")
                                                    break
                                                    case 10:
                                                        console.log("may","Summer")
                                                        break
                                                        default : console.log("Bele ay yoxdur!")

            }
        }
{
    let n ="Pleas your enter first name"
    
    console.log(n)
}
{
    var i = 5;
for (var i = 0; i < 10; i++)
console.log(i)
}

{
    let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + "<br>";
  console.log("language")
}
}