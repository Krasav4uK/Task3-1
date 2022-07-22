import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const intialCount = [
        {id:0, value:0, name: "Ненужная вещь"},
        {id:1, value:4, name: "Ложка"},
        {id:2, value:0, name: "Вилка"},
        {id:3, value:0, name: "Тарелка"},
        {id:4, value:0, name: "Набор минималиста"},
    ];
    const [counters, setCounters] = useState(intialCount);

    const handleDelete = (id) => {
        const newCounters = counters.filter((c)=>c.id!==id)
        setCounters(newCounters);
    }

    const handleReset =() => {
        setCounters(intialCount);
    }

    const handleIncrement = (id) => {
        setCounters(counters.map((c)=>{
            if(c.id===id) c.value+=1;
            return c;
        }))
      
   
    };
    const handleDecrement = (id) => {
        setCounters(counters.map((c)=>{
            if(c.id===id) c.value-=1;
            return c;
        }))
    
    };

    
    return(
        <>
           {counters.map((count)=>(
            <Counter 
            //  key={count.id} 
            //  id={count.id}
            //  value={count.value} 
            //  name={count.name} 
             onDelete={handleDelete}
             onIncrement={handleIncrement}
             onDecrement={handleDecrement}
             {... count}
            />
               
            
           ))}

            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброр</button> 
           
        </>
    );
}

export default CountersList;