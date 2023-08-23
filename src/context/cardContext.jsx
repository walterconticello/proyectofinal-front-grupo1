import { createContext , useState, useEffect } from "react";

const cardContext = createContext();

const CardProvider = ({ children }) => {
     const [cards, setCards] = useState([]);
     const [selectedCard, setSelectedCard] = useState(null);
     const [addCard , setAddCard] = useState(false);
     const [totalPages, setTotalPages] = useState(1);
     const API = "http://localhost:8001/api/CardsSportCenter";

     useEffect(() => {
        getCards();
        }, []);

        //GET ALL CARDS

        const getCards = async (page=1) => {
            try {
                const response = await fetch(`${API}?page=${page}`);
                const data = await response.json();
                setCards(data.cards);
                setTotalPages(data.meta.totalPages);
            } catch (error) {
                console.log("Error al obtener los SportCenter");
            }
        };


        //GET CARDS 

        const getCard = async (id) => {
            try {
                const response = await fetch(`${API}/${id}`);
                const data = await response.json();
                setSelectedCard(data);
            } catch (error) {
                console.log("Error al obtener el SportCenter");
            }
        };

    
        //POST CARDS

        const postCards = async (cards) => {
            try {
                const response = await fetch(`${API}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(cards)
                });
                getCards();
            } catch (error) {
                console.log("Error al crear el SportCenter");
            }
        };

    
        //PUT CARDS

        const updateCards = async (id, cards) => {
            try {
                await fetch(`${API}/${cards.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(cards)
                });
                getCards();
            } catch (error) {
                console.log("Error al actualizar el SportCenter");
            }
        };

        //DELETE CARDS

      const deleteCard = async (id) => {
        try {
          await fetch(`${API}/${id}`, {
              method: 'DELETE'
          });
          const deleteCard = cards.filter((card) => card.id !== id);
            setCards(deleteCard);
        } catch (error) {
            console.log("Error al eliminar el SportCenter");
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
