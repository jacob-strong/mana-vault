class CardItem {
  id: number;
  title: string;
  text: string | null;
  scryfallId: string | null;

  constructor(id: number, title: string, text: string | null = null, scryfallId: string | null = null) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.scryfallId = scryfallId;
  }
}

export default CardItem;