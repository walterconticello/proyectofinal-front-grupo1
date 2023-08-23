import { createContext , useState, useEffect } from "react";
import axios from 'axios';
import { Console } from "console";
import { get } from "http";

const cardContext = createContext();

const CardProvider = ({ children }) => {
     const [cards, setCards] = useState([]);
     const [selectedCard, setSelectedCard] = useState(null);
     const [totalPages, setTotalPages] = useState(1);
     const API = "http://localhost:8001/api/CardsSportCenter";

     useEffect(() => {
        getCards();
        }, []);

        //GET ALL CARDS

        const getCards = async (page=1) => {
            try {
                const response = await axios.get(`${API}?page=${page}`);
                const data = response.data;
                setCards(data.cards);
                setTotalPages(data.meta.totalPages);
            } catch (error) {
                console.log("Error al obtener los SportCenter");
            }
        };


        //GET CARDS 

        const getCard = async (id) => {
            try {
                const response = await axios.get(`${API}/${id}`);
                const data = response.data;
                setSelectedCard(data);
            } catch (error) {
                console.log("Error al obtener el SportCenter");
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

export { CardProvider , cardContext };

export default cardContext;
// Path: src\components\cardSportCenter\CardSportCenter.jsx
