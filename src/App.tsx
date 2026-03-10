import { useState } from "react";

import CardItem from "./components/CardItem";
import CardListGroup from "./components/CardListGroup";
import SearchBar from "./components/SearchBar";

function App() {
  const [cards, setCards] = useState<CardItem[]>([
    new CardItem(1, "Teval, The Balanced Scale"),
    new CardItem(2, "The One Ring"),
    new CardItem(3, "Galadriel, Light of Valinor"),
    new CardItem(4, "Wyleth, Soul of Steel"),
    new CardItem(5, "Rhystic Study"),
    new CardItem(6, "Solemn Simulacrum"),
    new CardItem(7, "Lothlorien Blade"),
    new CardItem(8, "The Grey Havens"),
    new CardItem(9, "Terra, Magical Adept"),
  ]);

  function addItem(newCard: string) {
    const newId = Date.now();
    const cardItem = new CardItem(newId, newCard);
    setCards([...cards, cardItem]);
    console.log(cards);
  }

  function deleteItem(id: number) {
    setCards(cards.filter((card) => card.id !== id));
  }

  function editItem(id: number) {
    const newTitle = prompt("Enter new card name:");

    if (!newTitle) return;

    setCards(
      cards.map((card) =>
        card.id === id
          ? new CardItem(card.id, newTitle, card.text, card.scryfallId)
          : card,
      ),
    );
  }

  const handleSelectCard = (card: CardItem) => {
    console.log("Selected card:", card.title);
  };

  return (
    <>
      <div className="container mt-4">
        <h1>Your Card Collection</h1>
      </div>
      <div className="container mt-4">
        <SearchBar onAdd={addItem} />
      </div>
      <div className="container mt-4">
        <CardListGroup cards={cards} onSelectCard={handleSelectCard} onDeleteCard={deleteItem}onEditCard={editItem}/>
      </div>
    </>
  );
}

export default App;
