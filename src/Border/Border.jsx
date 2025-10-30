function Border(){
    return(
        <div>
            <style>{
                `
                .hborder{
                   border-width:2px;
                   border-style:solid;
                   border-color:red;
                }
                `
                }
            </style>
            <h1 className="hborder">Border</h1>
        </div>
    );
}
export default Border;