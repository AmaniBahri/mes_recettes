import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public ShortDesc: string;
  public imagePath: string;
  public people :number;
  public Preparationtime :any ;
  public Cookingtime :any ;
  public ingredients: Ingredient[];

  constructor(name: string , ShortDesc: string , people :number , Preparationtime :any , Cookingtime :any , desc: string , imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.ShortDesc = ShortDesc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.people =people;
    this.Cookingtime=Cookingtime;
    this.Preparationtime=Preparationtime;
  }
}
