import { useRouter } from "next/router";
// use router hook
function productdetail(){
    const router = useRouter()
    const productId = router.query.productId
    return
    <> 
    <h1>product detail about {productId}</h1>
    
    </> 
}
export default productdetail;
// NESTED DYNAMIC ROUTES