import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Station } from "../../interfaces/Stations";


class Creature {

  name:string;
  type:string;
  health:number;
  weapon:string;


  constructor(name:string, type:string, health:number, weapon:string){
    this.name = name; 
    this.type = type;
    this.health = health;
    this.weapon = weapon;
  };


  getName(){
    return this.weapon; 
  }


  getWeapon(){
    return this.name; 
  }

  displayCreatureData(){
    return "name: " + this.name  + " " +  "type:" + " " + this.type +  " " +  "health: " + this.health + " "  + "weapon: " + this.weapon;
  }

}


const creature1:Creature = new Creature("Joe", "Goblin", 100, "sword");


console.log(creature1.displayCreatureData());





export default function StationCard(props:Station) {

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 263,
          border: 1,
          borderColor: "#919EAB",
        },
      }}
    >
      <Paper elevation={0}>
      {}
      </Paper>
    </Box>
  );
}
