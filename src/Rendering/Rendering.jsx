import './Rendering.css';
function Rendering(){
    const products =[{name:"Shoes",brand:"Nike",productsno:10,id:1},
        {name:"Shoes",brand:"Paragon",productsno:10,id:2},
        {name:"Shoes",brand:"Bata",productsno:10,id:3},
        {name:"Shoes",brand:"VKC PRIDE",productsno:10,id:4},
        {name:"Shoes",brand:"JIMMEY CHEW",productsno:10,id:5}
    ]
    return(
        <div>
            <h1>Dtat Rendering</h1>
            <h2>List Rendering</h2>
            <ul>
                {
                    products.map((product)=>(
                        <li key={product.id}>
                            {product.name},{product.brand},{product.productsno}
                        </li>
                    ))
                }
            </ul>
            <h2>Table Rendering</h2>
            <table border="1">
                <thead>
            <tr>
                <th>Id</th>
                <th>BRAND</th>
                <th>Product Name</th>
                <th>STOCK</th>
                <th>CART</th>
            </tr>
                </thead>
                {
                    products.map((product)=>(
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.brand}</td>
                            <td>{product.name}</td>
                            <td>{product.productsno}</td>
                            <td><button>ADD TO CART</button></td>
                        </tr>
                    ))
                }
            </table>
            <h2>Card rendering</h2>
            {
                products.map((product)=>(
                    <div key={product.id} className="Card">
                        <h1>{product.brand}</h1>
                        <h2>{product.name}</h2>
                        <h3>{product.productsno}</h3>
                        <button>ADD TO CART</button>
                    </div>
                ))
            }
        </div>
    );
}

export default Rendering;