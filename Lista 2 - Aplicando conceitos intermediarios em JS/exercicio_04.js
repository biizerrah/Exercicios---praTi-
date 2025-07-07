function fatorial(num){
  
  if(num < 0){
    
    return "ERRO!!!! O número deve ser positivo!"
    
  }else if(num === 0){
    
    return 1
    
  }else {
    
    return num * fatorial(num - 1)
  }
}

