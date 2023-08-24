import { createContext , useState, useEffect } from "react";
import axios from 'axios';

export const cardContext = createContext();

const CardProvider = ({ children }) => {
     const [cards, setCards] = useState([]);
     const [selectedCard, setSelectedCard] = useState(null);
     const [totalPages, setTotalPages] = useState(1);
     const API =  "http://localhost:3000/SportCenter";

        //GET ALL CARDS

        const getCards = async () => {
            try {
                const response = await axios.get(`${API}`);
                setCards(response.data);
            } catch (error) {
                console.log("Error al obtener los SportCenter");
            }
        };


        //GET CARDS 

        const getCard = async (id) => {
            try {
              const response = await axios.get(`${API}/${id}`);
              const complexId = cards.filter((card) => card.id === id);
              console.log(complexId);
              setSelectedCard(complexId);
            } catch (error) {
              console.log("Error al obtener el SportCenter:", error);
            }
          };
    
        //POST CARDS

      const postCard = async (cards) => {
        try {
            const response = await axios.post(API, cards);
            Console.log(response, "SportCenter creado correctamente");
        } catch (error) {
            console.log("Error al crear el SportCenter");
        }
    };


    
        //PUT CARDS

        const updateCards = async (cards) => {
            try {
                await axios.put(`${API}/${cards.id}`, cards);
                await getCards();
            } catch (error) {
                console.log("Error al actualizar el SportCenter");
            }
        };

       

        //DELETE CARDS

  const deleteCard = async (id) => {
    try {
        await axios.delete(`${API}/${id}`);
        const deleteCard = cards.filter((card) => card.id !== id);
        setCards(deleteCard);
    } catch (error) {
        console.log("Error al eliminar el SportCenter");
    }
};



    return (
        <cardContext.Provider
            value={{ 
                cards , 
                getCards , 
                getCard , 
                postCard , 
                updateCards , 
                deleteCard , 
                selectedCard , 
                totalPages 
            }}  
        >
            {children}
        </cardContext.Provider>
    );
};

export default CardProvider;
// Path: src\components\cardSportCenter\CardSportCenter.jsx
