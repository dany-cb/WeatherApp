import { useSearchParams } from "react-router-dom";

const InfoScreen = () => {
  const [searchParams] = useSearchParams();
  return (
    <div>
      Longitude:{searchParams.get("lon")} Latitude:{searchParams.get("lon")}
    </div>
  );
};

export default InfoScreen;
