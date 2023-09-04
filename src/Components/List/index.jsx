import React from "react";
//Traemos los estilos de box y btn para agregarlea la lista.
import { Box, Btn } from "../UI"
// Traemos la informacion de la lista que esta en info.js
import { lista } from "../../info";
// Traemos la informacion de card
import Card from "../Card";


const List = () => {
  return <Box>
    {
      lista.cargos.map( (cargo, i) => {
        // este key siempre va cuando se trabaja con map normalmente es el id
        return <Card key={i} cargo={cargo}/>
      })
    }
    {/* se importa btn para darle estilo a este boton */}
    <Btn>Ver mas</Btn>
  </Box>
}


export default List;

// const List = () => {
//   return <Box>
//     {
//       lista.cargos.map( ({cargo, i}) => {
//
//         // <div key={id}>
//         return <Card key={i} cargo={cargo} />
//         // <Card key={id}>
//         //   <span> {type} </span>
//         //   <span> {from} </span>
//         //   <span> {value} </span>
//         // </Card>
//         // </div>
//       } )
//     }
//
//     <Btn>Ver más</Btn>
//   </Box>
// }
