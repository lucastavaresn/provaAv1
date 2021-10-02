import {Veiculo} from './Veiculo.js'
import {chegada , recorde} from './api.js'
import {Piloto} from './Piloto.js'

export class Corrida{
  constructor(){
    this.listPodio = []
    this.recordistas = []
    this.resultado = {}
  }
  
  largada = async function(){
    let clara = new Piloto('Clara',6, 13)
    let amanda = new Piloto('Amanda',2,17)

    let otavio = new Piloto('Otavio',5,19)

    let clarice = new Piloto('Clarice',7,25)




    let carrango = new Veiculo('carro','corsa',2000,'cinza',100)
    let ferrari = new Veiculo('carro','ferrari',2021,'vermelha',400)

    ferrari.acelerando0a100(clara,this.relatorio, this.listPodio, this.recordistas)
    ferrari.acelerando0a100(amanda,this.relatorio, this.listPodio, this.recordistas)
    carrango.acelerando0a100(otavio,this.relatorio, this.listPodio, this.recordistas)
    carrango.acelerando0a100(clarice, this.relatorio, this.listPodio, this.recordistas)
    
    return this.listPodio
  }.bind(this)
    
  relatorio = async function(obj, podio, recordistas){
    let piloto = {
      "tempo": obj.feedback,
      "piloto": obj.piloto,
      "carro": obj.modelo
    }
  
    chegada(piloto).then((respostaDistancia) => {

      
    podio.push(piloto)

    if (respostaDistancia.length == Veiculo.totalVeiculosCorrida){
          recorde().then((resposta) => {
            
            console.log("================== PÓDIO DA CORRIDA ===============")
            podio.forEach(function(corredor, i){
              if(i == 0){
                console.log(`${i +1}º Lugar: ${corredor.piloto}           Tempo: ${corredor.tempo}s`)
              }else{

                console.log(`${i +1}º Lugar: ${corredor.piloto}           Tempo: ${corredor.tempo}s     Diferença com ${i}° Lugar: ${corredor.tempo - podio[i-1].tempo}`)
              }
            });
            
            console.log("=============RECORDE ATUAL===============")
            
            recordistas.push(resposta)
            console.log(`Nome: ${resposta.piloto}   Tempo: ${resposta.tempo}`)
            console.log("=========================================")

          }).catch(erro => console.log(erro))
    }

  }).catch(erro => console.log(erro)).b
  
  // console.log(obj.piloto + ' com motor de ' + obj.potenciaMotor + 'cv demorou ' + obj.feedback + ' segundos de 0 a 100 km' )
  
  

  }
 
  buscaRecordistas = async function (nome){
    this.resultado = {"msg": "Nenhum piloto encontrado"}
    this.recordistas.forEach(corredor => {
    if(nome.toUpperCase() == corredor.piloto.toUpperCase()){
      this.resultado = corredor
      return  this.resultado
    }
  });
  return {}
}
}

