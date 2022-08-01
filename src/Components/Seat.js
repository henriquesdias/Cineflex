import { useState } from "react";

function selectSeat(seat, setSelect, select,idSeat,chosenSeats,setChosenSeats,seatNumbers,setSeatNumbers) {
  if (seat.isAvailable === false) {
    alert("Esse assento não está disponível");
  } else {
    if (select === "") {
      setSelect("select");
      setChosenSeats([...chosenSeats,idSeat]);
      setSeatNumbers([...seatNumbers,seat.name])
    } else {
      setSelect("");
      setChosenSeats([...chosenSeats.filter( element => element !== idSeat )])
      setSeatNumbers([...seatNumbers.filter( element => element !== seat.name)])
    }
  }
}

export default function Seat({
  element,
  idSeat,
  chosenSeats,
  setChosenSeats,
  seatNumbers,
  setSeatNumbers,
}) {
  const [select, setSelect] = useState("");
  return (
    <div
      className={
        element.isAvailable === true
          ? `circle ${select}`
          : "circle indisponible"
      }
      onClick={() =>
        selectSeat(
          element,
          setSelect,
          select,
          idSeat,
          chosenSeats,
          setChosenSeats,
          seatNumbers,
          setSeatNumbers
        )
      }
    >
      {element.name <= 9 ? `0${element.name}` : element.name}
    </div>
  );
}