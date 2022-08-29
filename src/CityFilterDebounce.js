import { useState } from 'react';
import debounce from 'lodash.debounce';

const CityFilterDebounce = (props)=> {

  const [filteredText, setFilteredText] = useState(props.cities);
  const textEntered = debounce((event) => {
    const query = event.target.value;

    console.log(query);
    setFilteredText(props.cities.filter(
         city=> 
          city.toLocaleLowerCase().includes(query.toLocaleLowerCase()) 
    ))
}, 1500)
  return (
    <div>
        <input type="text" onChange={textEntered}/>
        {filteredText.map((city, index)=> {
          return <p>{city}</p>
        })}
    </div>
  );
}

export default CityFilterDebounce;
