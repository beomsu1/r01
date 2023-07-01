import { useState } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

const Kiosk = () => {

    // 초기값을 0으로 설정한 것. -> targetId의 초기값은 0
    // setTargetId 함수를 이용해서 targetId의 상태를 업데이트 해야함.
    // ex) setTargetId(10) -> targetId 상태는 10으로 업데이트
    const [targetId, setTargetId] = useState(0)

    // 호출하면 id (번호) 값을 받아서 콘솔창에 출력
    const requestViewProduct = (id) => {
    console.log("requestViewProduct" , id)
    
    // targetId를 id의 값으로 상태를 업데이트하자!
    setTargetId(id)
}

    return ( 
        <div>
            <ProductList requestViewProduct={requestViewProduct}></ProductList>
            <ProductDetail></ProductDetail>
        </div>
     );
}
 
export default Kiosk;