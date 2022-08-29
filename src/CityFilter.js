import { useState } from 'react';

const CityFilter = (props) => {

  const [filteredText, setFilteredText] = useState(props.cities);
  let filterTime;
  const textEntered = (event) => {
      clearTimeout(filterTime);
      const query = event.target.value;

      filterTime = setTimeout(()=> {
        console.log(query);
        setFilteredText(props.cities.filter(
           city=> 
            city.toLocaleLowerCase().includes(query.toLocaleLowerCase())
          
          ))
      }, 1500)
  }
  return (
    <div>
        <input type="text" onChange={textEntered}/>
        {filteredText.map((city, index)=> {
          return <p>{city}</p>
        })}
    </div>
  );
}

export default CityFilter;
