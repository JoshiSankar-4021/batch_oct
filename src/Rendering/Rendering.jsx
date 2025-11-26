import './Rendering.css';
import { useEffect,useState } from 'react';
function Rendering(){
    const products =[{name:"Shoes",brand:"Nike",productsno:10,id:1},
        {name:"Shoes",brand:"Paragon",productsno:10,id:2},
        {name:"Shoes",brand:"Bata",productsno:10,id:3},
        {name:"Shoes",brand:"VKC PRIDE",productsno:10,id:4},
        {name:"Shoes",brand:"JIMMEY CHEW",productsno:10,id:5}
    ]
    const [users,setUsers]=useState([]);
    useEffect(() => {
    fetch("http://localhost:3000/api/here2/1")
        .then(res => res.json())
        .then(data => {
            setUsers(data.users);
        })
        .catch(err => console.log(err));
    }, []);


    useEffect(() => {
        console.log(users);
    }, [users]);

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

            <div>
                <h1>
                    DYNAMIC LIST RENDERING
                </h1>
                <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>
                            {user.firstname},{user.email},{user.password}
                        </li>
                    ))
                }
            </ul>
            </div>
            <div>
                <h1>DYNAMIC TABLE RENDERING</h1>
                 <table border="1">
                <thead>
            <tr>
                <th>Id</th>
                <th>FIRST NAME</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
            </tr>
                </thead>
                {
                    users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstname}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))
                }
            </table>
            </div>
        </div>
    );
}

export default Rendering;