


let posicao = []
let servidorOnline = true;

export const chegada = (piloto) => {
  return new Promise((resolve, reject) => {
      if (!servidorOnline) reject('servidor Offline')
      posicao.push(piloto)
      resolve(posicao)
     
      
  })
}

export const recorde = () => {
  return new Promise((resolve, reject) => {
      if (!servidorOnline) reject('servidor Offline')
      resolve(posicao[0])
  })
}
