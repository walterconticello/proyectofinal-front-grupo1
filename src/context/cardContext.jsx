import { createContext , useState, useEffect } from "react";
import axios from "axios";

const cardContext = createContext();

const CardProvider = ({ children }) => {
     const [cards, setCards] = useState([]);
     const [selectedCard, setSelectedCard] = useState(null);
     const [addCard , setAddCard] = useState(false);
     const [totalPages, setTotalPages] = useState(1);
     const API = "http://localhost:8001/api/Complex";

     useEffect(() => {
        getCards();
        }, []);

        //GET ALL CARDS

        const getCards = async () => {
            const response = await axios.get(API);
            setCards(response.data);
            setTotalPages(response.data.length);
        }

        //GET CARD 

        const getCard = async (id) => {
            const response = await axios.get(`${API}/${id}`);
            setSelectedCard(response.data);
        }
        Catch (error) {
            console.log("Error al obtener la Complex");
        }

        //POST CARD

        const postCard = async (card) => {
            const response = await axios.post(API, card);
            setAddCard(true);
            getCards();
        }
        Catch (error) {
            console.log("Error al agregar la Complex");
        }

        //PUT CARD

        const putCard = async (card) => {
            const response = await axios.put(`${API}/${card.id}`, card);
            getCards();
        }
        Catch (error) {
            console.log("Error al editar la Complex");
        }

        //DELETE CARD

        const deleteCard = async (id) => {
            const response = await axios.delete(`${API}/${id}`);
            getCards();
        }
        Catch (error) {
            console.log("Error al eliminar la Complex");
        }

        return (
            <cardContext.Provider value={{ cards, selectedCard, addCard, totalPages, getCards, getCard, postCard, putCard, deleteCard }}>
                {children}
            </cardContext.Provider>
        );
    };

export { CardProvider };

export default cardContext;

// Path: src\components\cardSportCenter\CardSportCenter.jsx

