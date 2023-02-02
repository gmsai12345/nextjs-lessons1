import Link from "next/link"
import { useRouter } from "next/router"
import { render } from "react-dom"
// when we want to click and it has to navigate there we use LINK
function sap(){ 
    const router = useRouter()
    const handleClick = () => {
        router.push('/sap/sap2')
    }
    return <> 
    <h1>sap</h1>
    <Link href='/sap/sap1'>
        <p>blog</p>
        </Link>
    
    <button onClick={handleClick}>
        Place prder
    </button>
    </>
}
export default sap
// next is navigation programatically 
// if validation is successful then it has to be rendered automatically