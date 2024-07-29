import './styles.css';

export function Details() { //Se eu tivesse colocado default lá no main eu não precisaria colocar entre {} pois eu estaria exportando tudo
  return ( //1 componente sempre vai retornar sempre 1 unico elemento por isso da div envolta de tudo
    <div>
      <h1>Hello World!</h1>
    </div>
  )
} 