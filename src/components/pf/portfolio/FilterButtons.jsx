import React from "react";
 


const FilterButtons = ({applyFilter}) => {
    return (
      <>
        <div className="filter-button-wrapper">
            <button className="btn active" onClick={() => applyFilter("")} >Show all</button>

            <div className="separator"></div>
            
            <button className="btn" onClick={() => applyFilter("Professional")}       >Professional</button>
            <button className="btn" onClick={() => applyFilter("Academic")}           >Academic</button>
            <button className="btn" onClick={() => applyFilter("Hobby")}              >Hobby</button>

            <div align="center" style={{"display": "block", "width": "100%"}}>
                <button className="btn" onClick={() => applyFilter("C++")}  >C++</button>
                <button className="btn" onClick={() => applyFilter("C#")}  >C#</button>
                <button className="btn" onClick={() => applyFilter("Python")}  >Python</button>
                <button className="btn" onClick={() => applyFilter("Javascript")}  >Javascript</button>
                <button className="btn" onClick={() => applyFilter("Structured Text")}  >Structured Text</button>
                <button className="btn" onClick={() => applyFilter("Ladder")}  >Ladder</button>

                <button className="btn" onClick={() => applyFilter("WebDev")}   >WebDev</button>
                <button className="btn" onClick={() => applyFilter("React")}   >React</button>
                <button className="btn" onClick={() => applyFilter("Wordpress")}   >Wordpress</button>
                <button className="btn" onClick={() => applyFilter("HTML")}   >HTML</button>
                <button className="btn" onClick={() => applyFilter("CSS")}   >CSS</button>
                <button className="btn" onClick={() => applyFilter("Bootstrap")}   >Bootstrap</button>

                <button className="btn" onClick={() => applyFilter("Linux")}   >Linux</button>

                <button className="btn" onClick={() => applyFilter("GameDev")}   >GameDev</button>

                <button className="btn" onClick={() => applyFilter("SolidWorks")}   >SolidWorks</button>
                <button className="btn" onClick={() => applyFilter("3D printing")}   >3D printing</button>
                
                <button className="btn" onClick={() => applyFilter("PLC")}   >PLC</button>
                <button className="btn" onClick={() => applyFilter("B&R")}   >B&R</button>
                <button className="btn" onClick={() => applyFilter("Codesys")}   >Codesys</button>

                <button className="btn" onClick={() => applyFilter("Arduino")}   >Arduino</button>
                <button className="btn" onClick={() => applyFilter("Electronics")}   >Electronics</button>
                <button className="btn" onClick={() => applyFilter("Altium")}   >Altium</button>
                
            </div>
        </div>
    </>
  );
};
 





// const FilterButtons = ({ menuItems, filterItem, setItem }) => {
//   return (
//     <>
//         <div className="d-flex justify-content-center">

//             {menuItems.map((Val, id) =>
            
//                 <button className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
//                         onClick={() => filterItem(Val)}
//                         key={id}>
//                     {Val}
//                 </button>
            
//             )}

//             {/* <button className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
//                     onClick={() => setItem(Data)}>
//             All
//             </button> */}
//         </div>
//     </>
//   );
// };
 
export default FilterButtons;
