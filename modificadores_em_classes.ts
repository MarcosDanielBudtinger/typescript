interface AnimalSelvagemInterface {
    name: string;
    color: string;
    correr();
    andar();
    comer();
}


class AnimalSelvagem implements AnimalSelvagemInterface{
    private som: string;

    constructor(public name: string, public color: string){
    }

    correr(){
        this.som = 'zummmmm';
        console.log(this.som);
    }

    andar(){
    }

    comer(){
    }
}

class CoelhoSelvagem extends AnimalSelvagem{

    tamanhoOrelha: number;

    correr(){
        super.correr();
    }
}

let coelhoSelvagem: CoelhoSelvagem = new CoelhoSelvagem('Coelho Selvagem', 'Cinza');

coelhoSelvagem.correr();