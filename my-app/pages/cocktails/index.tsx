import { useRef, useState } from "react"
import CocktailCard from "@/components/CocktailCard";
import type { CCtypeSimple } from "@/components/types/cocktail";
export default function Cocktails() {

    const InputRef: any = useRef()
    const [cocktails, setCocktails] = useState([]);
    const [load, setLoad] = useState(false);
    const handleClick = async () => {
        setLoad(false);
        const TEXT = InputRef.current.value;
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${TEXT}`);
        const result = await response.json()
        setCocktails(result.drinks);
        setLoad(true);
    }

    return (<>
        <div className="search-wrapper">
            <label htmlFor="search-input">Search for cocktail by its name</label>
            <input type="text" name="search-input" ref={InputRef} />
            <button onClick={handleClick}>Search</button>
            {cocktails.map((cocktail: CCtypeSimple) => {
                return (
                            <CocktailCard
                        key={cocktail.idDrink}
                        cocktail={cocktail} />

                    
                )
            })}
        </div>
    </>)
}