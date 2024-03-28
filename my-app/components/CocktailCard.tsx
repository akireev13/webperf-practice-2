import { CocktailProp } from "./types/cocktail";
import Image from "next/image";
export default function CocktailCard({ cocktail }: CocktailProp) {
    return <>
        <div className="card">
            
            <h1 className="card__name">{cocktail.strDrink}</h1>
            <Image className="card__img" src={cocktail.strDrinkThumb} alt="" width={400} height={400} />
            {cocktail.strIngredient1 && <p className="card__ingredient">{cocktail.strIngredient1}</p>}
            {cocktail.strIngredient2 && <p className="card__ingredient">{cocktail.strIngredient2}</p>}
            {cocktail.strIngredient3 && <p className="card__ingredient">{cocktail.strIngredient3}</p>}
            {cocktail.strIngredient4 && <p className="card__ingredient">{ cocktail.strIngredient4}</p>}
        </div>
    </>
}

