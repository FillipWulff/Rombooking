import Select from "react-select" //Imports react-select library which gives me the oppurtunity to use the desired react-select menu
import './rom.css' //Imports the css
import { useState } from "react"; //Imports the useState function

export default function Ledigerom(){
    
    const gs = "green screen rommet"
    const bb = "blå base"
    const er = "e-sport rommet"
    const lb = "lilla base"
    const pr = "proff rommet"
    const ø251 = "Ø-251"
    const it = "IT-labben"

    const options = [ //Creates the different options and assigns the belonging values
        {value: gs + ", " + er + ", ", label: "Mandag 08:15-09:00"},
        {value: "", label: "Mandag 09:00-09:45"},
        {value: "", label: "Mandag 10:00-10:45"},
        {value: "", label: "Mandag 10:45-11:30"},
        {value: "", label: "Mandag 12:15-13:00"},
        {value: "", label: "Mandag 13:00-13:45"},
        {value: "", label: "Mandag 14:00-14:45"},
        {value: "", label: "Mandag 14:45-15:30"},

        {value: "", label: "Tirsdag 08:15-09:00"},
        {value: "", label: "Tirsdag 09:00-09:45"},
        {value: "", label: "Tirsdag 10:00-10:45"},
        {value: "", label: "Tirsdag 10:45-11:30"},
        {value: "", label: "Tirsdag 12:15-13:00"},
        {value: "", label: "Tirsdag 13:00-13:45"},
        {value: "", label: "Tirsdag 14:00-14:45"},
        {value: "", label: "Tirsdag 14:45-15:30"},

        {value: "", label: "Onsdag 08:15-09:00"},
        {value: "", label: "Onsdag 09:00-09:45"},
        {value: "", label: "Onsdag 10:00-10:45"},
        {value: "", label: "Onsdag 10:45-11:30"},
        {value: "", label: "Onsdag 12:15-13:00"},
        {value: "", label: "Onsdag 13:00-13:45"},
        {value: "", label: "Onsdag 14:00-14:45"},
        {value: "", label: "Onsdag 14:45-15:30"},

        {value: "", label: "Torsdag 08:15-09:00"},
        {value: "", label: "Torsdag 09:00-09:45"},
        {value: "", label: "Torsdag 10:00-10:45"},
        {value: "", label: "Torsdag 10:45-11:30"},
        {value: "", label: "Torsdag 12:15-13:00"},
        {value: "", label: "Torsdag 13:00-13:45"},
        {value: "", label: "Torsdag 14:00-14:45"},
        {value: "", label: "Torsdag 14:45-15:30"},

        {value: "", label: "Fredag 08:15-09:00"},
        {value: "", label: "Fredag 09:00-09:45"},
        {value: "", label: "Fredag 10:00-10:45"},
        {value: "", label: "Fredag 10:45-11:30"},
        {value: "", label: "Fredag 12:15-13:00"},
        {value: "", label: "Fredag 13:00-13:45"},
        {value: "", label: "Fredag 14:00-14:45"},
        {value: "", label: "Fredag 14:45-15:30"}
    ]
        
        const [selected, setSelected] = useState(null);

        const handleChange = (selectedOption) => {
        setSelected(selectedOption);
        console.log(`Option selected:`, selectedOption);
        };

    return  (
        <div id="LedigRom">
            <h1>Velg ditt tidspunkt og finn et ledig rom!</h1>
            <Select options={options}></Select>
        </div>
    )


}