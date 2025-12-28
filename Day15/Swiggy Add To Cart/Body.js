const FoodItem = [
  { id: 1, food: "Pizza", price: 500 },
  { id: 2, food: "Burger", price: 300 },
  { id: 3, food: "Cusin", price: 400 },
  { id: 4, food: "Biscuit", price: 1000 },
  { id: 5, food: "Rice", price: 700 },
  { id: 6, food: "Egg", price: 800 },
  { id: 7, food: "Apple", price: 600 },
  { id: 8, food: "Paneer", price: 400 },
  { id: 9, food: "Tikka", price: 900 },
  { id: 10, food: "Lambo", price: 1200 },
  { id: 11, food: "Kadhai Paneer", price: 700 },
];
import Card from "./Card";

export default function Body() {
  return (
    <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
      {FoodItem.map((item) => {
        return <Card data={item} key={item.id}/>;
      })}
    </div>
  );
}
