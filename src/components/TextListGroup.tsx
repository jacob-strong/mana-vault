import { useState } from "react";
import CardItem from "./CardItem";

interface Props {
  cards: CardItem[];
  onSelectCard: (card: CardItem) => void;
  onDeleteCard: (id: number) => void;
  onEditCard: (id: number) => void;
}

function TextListGroup({
  cards,
  onSelectCard,
  onDeleteCard,
  onEditCard,
}: Props) {
  // the hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/* error message if no cards in collection */}
      {cards.length === 0 && <p>No cards in collection :( broke ass </p>}

      {/* display list */}
      <ul className="list-group">
        {cards.map((card, index) => (
          <li
            key={card.id}
            className={
              selectedIndex === index
                ? "list-group-item active d-flex justify-content-between"
                : "list-group-item d-flex justify-content-between"
            }
          >
            <span
              onClick={() => {
                setSelectedIndex(index);
                onSelectCard(card);
              }}
            >
              {card.title}
            </span>

            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => onEditCard(card.id)}
              >
                Edit
              </button>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDeleteCard(card.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TextListGroup;
