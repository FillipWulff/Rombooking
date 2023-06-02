import Select from "react-select"
import './rom.css'
import { useState } from "react";

export default function Ledigerom(){
    const rom = [
        {name: "Green screen"},
        {name: "Blå base"},
        {name: "Esport rommet"},
        {name: "Lilla base"},
        {name: "Oransje base"},
        {name: "Grønn base"},
        {name: "Lille audi"},
        {name: "Proff rommet"},
        {name: "Ø-251"},
        {name: "IT-labben"},
    ]

    const gb = "grønn base"
    const gs = "green screen"

    const options = [
        { value: (gb+ " " + gs), label: "Mandag 08:15-09:00" },
        { value: "Mandag 2", label: "Mandag 09:00-09:45" },
        { value: "Mandag 3", label: "Mandag 10:00-10:45" },
        { value: "Mandag 4", label: "Mandag 10:45-11:30" },
        { value: "Mandag 5", label: "Mandag 12:15-13:00" },
        { value: "Mandag 6", label: "Mandag 13:00-13:45" },
        { value: "Mandag 7", label: "Mandag 14:00-14:45" },
        { value: "Mandag 8", label: "Mandag 14:45-15:30" },

        { value: "Tirsdag 1", label: "Tirsdag 08:15-09:00" },
        { value: "Tirsdag 2", label: "Tirsdag 09:00-09:45" },
        { value: "Tirsdag 3", label: "Tirsdag 10:00-10:45" },
        { value: "Tirsdag 4", label: "Tirsdag 10:45-11:30" },
        { value: "Tirsdag 5", label: "Tirsdag 12:15-13:00" },
        { value: "Tirsdag 6", label: "Tirsdag 13:00-13:45" },
        { value: "Tirsdag 7", label: "Tirsdag 14:00-14:45" },
        { value: "Tirsdag 8", label: "Tirsdag 14:45-15:30" },

        { value: "Onsdag 1", label: "Onsdag 08:15-09:00" },
        { value: "Onsdag 2", label: "Onsdag 09:00-09:45" },
        { value: "Onsdag 3", label: "Onsdag 10:00-10:45" },
        { value: "Onsdag 4", label: "Onsdag 10:45-11:30" },
        { value: "Onsdag 5", label: "Onsdag 12:15-13:00" },
        { value: "Onsdag 6", label: "Onsdag 13:00-13:45" },
        { value: "Onsdag 7", label: "Onsdag 14:00-14:45" },
        { value: "Onsdag 8", label: "Onsdag 14:45-15:30" },

        { value: "Torsdag 1", label: "Torsdag 08:15-09:00" },
        { value: "Torsdag 2", label: "Torsdag 09:00-09:45" },
        { value: "Torsdag 3", label: "Torsdag 10:00-10:45" },
        { value: "Torsdag 4", label: "Torsdag 10:45-11:30" },
        { value: "Torsdag 5", label: "Torsdag 12:15-13:00" },
        { value: "Torsdag 6", label: "Torsdag 13:00-13:45" },
        { value: "Torsdag 7", label: "Torsdag 14:00-14:45" },
        { value: "Torsdag 8", label: "Torsdag 14:45-15:30" },

        { value: "Fredag 1", label: "Fredag 08:15-09:00" },
        { value: "Fredag 2", label: "Fredag 09:00-09:45" },
        { value: "Fredag 3", label: "Fredag 10:00-10:45" },
        { value: "Fredag 4", label: "Fredag 10:45-11:30" },
        { value: "Fredag 5", label: "Fredag 12:15-13:00" },
        { value: "Fredag 6", label: "Fredag 13:00-13:45" },
        { value: "Fredag 7", label: "Fredag 14:00-14:45" },
        { value: "Fredag 8", label: "Fredag 14:45-15:30" }
      ];

      const [selected, setSelected] = useState(null);

      const handleChange = (selectedOption) => {
        setSelected(selectedOption);
        console.log(`Option selected:`, selectedOption);
      };


    return  (
        <div id="romvalg">
            <Select options={options} onChange={handleChange} autoFocus={true} id="knapp"/>
            <div id="resultat">
                Disse rommene er ledig nå:

                <p>{selected.value}</p>


            </div>
        </div>
    )


}