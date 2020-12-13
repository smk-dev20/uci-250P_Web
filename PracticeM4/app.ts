const greeting =(name:string) => {
    alert(`Hello, ${name}!`);
}
    greeting("Star Trek Newbie!");

class Show{
    private name: string = "none";
    private captain: string;
    private firstOfficer: string;
    constructor(show:string, cap:string, firstO:string){
        this.name = show;
        this.captain = cap;
        this.firstOfficer = firstO;
    }
    public printShowDetails():string{
        const showDetails = this.name +" with Captain "+this.captain+" and First Officer "+this.firstOfficer;
        console.log(showDetails);
        return showDetails;
    }
    
}    

class TNG extends Show{
    constructor(){
        super("The Next Generation", "Picard","Riker");
    }
}


let show1 : TNG = new TNG();
const el : HTMLElement | null = document.getElementById("to-watch1");
if(el) 
el.innerHTML = show1.printShowDetails();

class Voyager extends Show{
    constructor(){
        super("Voyager", "Janeway","Chakotay");
    }
}

let show2:Voyager = new Voyager();
const el1 : HTMLElement | null = document.getElementById("to-watch2");
if(el1) 
el1.innerHTML = show2.printShowDetails();

