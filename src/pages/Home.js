import Navbar from "../features/navbar/navbar";
import ProductList from "../features/product-list/ProductList";

function Home(){
    return(<div>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
    </div>)
}
export default Home;