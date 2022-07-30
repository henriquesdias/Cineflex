import { useState } from "react";

function selectSeat(seat, setSelect, select,idSeat,chosenSeats,setChosenSeats) {
  if (seat.isAvailable === false) {
    alert("Esse assento não está disponível");
  } else {
    if (select === "") {
      setSelect("select");
      setChosenSeats([...chosenSeats,idSeat]);
    } else {
      setSelect("");
      setChosenSeats([...chosenSeats.filter( element => {
        if (element !== idSeat) {
          return element;
        }
      })])
    }
  }
}

export default function Seat({ element, idSeat, chosenSeats, setChosenSeats }) {
  const [select, setSelect] = useState("");
  return (
    <div
      className={
        element.isAvailable === true
          ? `circle ${select}`
          : "circle indisponible"
      }
      onClick={() => selectSeat(element, setSelect, select, idSeat,chosenSeats,setChosenSeats)}
    >
      {element.name <= 9 ? `0${element.name}` : element.name}
    </div>
  );
}