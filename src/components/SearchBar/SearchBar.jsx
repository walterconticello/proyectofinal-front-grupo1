import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import svgPelota from "../../assets/icono-sport-futbol.svg"
import { faCalendarDays, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { useNavigate } from "react-router";

const SearchBar = () => {
	const [selectedFutbol, setSelectedFutbol] = useState('5');
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState('10:00');



	const handleFutbolChange = (event) => {
		setSelectedFutbol(event.target.value);
	};
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	const handleTimeChange = (time) => {
		setSelectedTime(time);
	};

	const navigate = useNavigate();

	const handleSearch = () => {
		navigate("/complejos", { state: { selectedDate, selectedTime, selectedFutbol } });
	};


	return (
		<div className="searchBar rounded-3xl lg:rounded-full shadow-buscador bg-misc-white max-w-xl lg:max-w-5xl mx-auto">
			<div className="py-3 pl-7 pr-3 flex flex-col lg:flex-row lg:justify-between">
				<div className="inputStyled position-relative">
					<svg width="26" height="25" viewBox="0 0 30 29" fill="none"><path d="M14.81 15.708a3.625 3.625 0 100-7.25 3.625 3.625 0 000 7.25z" stroke="#00B04B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.81 2.417a9.667 9.667 0 00-9.666 9.666c0 2.287.485 3.782 1.812 5.438l7.854 9.062 7.854-9.062c1.327-1.656 1.813-3.152 1.813-5.438a9.667 9.667 0 00-9.667-9.666v0z" stroke="#00B04B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
					<input type="text" className="inputSearchBar" />
				</div>
				<div className="selectTipoCancha ">
					<img src={svgPelota} alt="" />
					<div className="headerSelectWrapper">
						<select
							className="headerSelect"
							name="futbol"
							value={selectedFutbol}
							onChange={handleFutbolChange}
						>
							<option value="5">Futbol 5</option>
							<option value="7">Futbol 7</option>
							<option value="9">Futbol 9</option>	
							<option value="11">Futbol 11</option>
						</select>
						<FontAwesomeIcon icon={faChevronDown} className="headerSelectIcon" />
					</div>
				</div>
				<div className="inputFecha">
					<div className="headerDateTimePicker">
						<DatePicker
							onChange={handleDateChange}
							value={selectedDate}
							className="date"
						/>
					</div>
				</div>
				<div className="inputHora">
					<div className="headerDateTimePicker">
						<TimePicker
							onChange={handleTimeChange}
							value={selectedTime}
							format="HH:mm"
							className="hour"
						/>
					</div>
				</div>
				<div className="headerSearchItem">
					<button
						className="bg-lime-500 hover:bg-white h-5 rounded-md px-5 py-4 text-sm hover:text-lime-500 font-bold w-20 mx-4 transition text-gray-50 heroButton"
						onClick={handleSearch}
					>
						<span className="flex items-center justify-center h-full">
							Buscar
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default SearchBar