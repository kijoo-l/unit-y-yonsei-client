import { useParams } from "react-router-dom";

function BoothDetailPage() {
  const { boothNumber } = useParams();

  return <div>{boothNumber} 상세 페이지</div>;
}

export default BoothDetailPage;