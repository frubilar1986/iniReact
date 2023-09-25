import { useParams } from "react-router-dom";

export default function ReyModel() {
  // const data = useParams()
  const { rey } = useParams();
    console.log(rey)
  return (
    <div>
      <img src={`https://www.html6.es/img/rey_${rey}.png`} />
      <h1>{rey}</h1>
      
    </div>
  );
}
