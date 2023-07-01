import { useEffect } from "react";

const ProductDetail = ({id}) => {

    // id의 값이 변경될 떄마다 "useEffect" 메세지와 id 값을 출력
    useEffect((id) => {
        console.log("useEffect" , id)

        // [id] -> useEffet 훅이 id 값에 의존하도록 설정하기 위함
    },[id])

    return ( 
        <div>

        </div>
     );
}
 
export default ProductDetail;