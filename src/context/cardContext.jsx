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

        const getCards = async (page=1) => {
            try {
                const response = await axios.get(`${API}?page=${page}`);
                setCards(response.data.cards);
                setTotalPages(response.data.meta.totalPages);
            } catch (error) {
                console.log("Error al obtener las Complex");
            }
        };


        //GET CARDS 

        const getCard = async (id) => {
            try {
                const response = await axios.get(`${API}/${id}`);
                setSelectedCard(response.data);
            } catch (error) {
                console.log("Error al obtener la Complex");
            }
        };

    
        //POST CARDS

        const postCards = async (cards) => {
            try {
                const response = await axios.post(`${API}`, cards);
                getCards();
            } catch (error) {
                console.log("Error al crear la Complex");
            }
        };

    
        //PUT CARDS

        const updateCards = async (id, cards) => {
            try {
                await axios.put(`${API}/${cards.id}`, cards);
                getCards();
            } catch (error) {
                console.log("Error al actualizar la Complex");
            }
        };

        //DELETE CARDS

      const deleteCard = async (id) => {
        try {
          await axios.delete(`${API}/${id}`);
          const deleteCard = cards.filter((card) => card.id !== id);
            setCards(deleteCard);
        } catch (error) {
            console.log("Error al eliminar la Complex");
        }
    };

    return (
        <cardContext.Provider
            value={{ cards , getCards , getCard , postCards , updateCards , deleteCard , selectedCard , totalPages }}  
        >
            {children}
        </cardContext.Provider>
    );
};

export { CardProvider , cardContext };



export default cardContext;

// Path: src\components\cardSportCenter\CardSportCenter.jsx