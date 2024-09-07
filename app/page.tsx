import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter} from "@/components/ui/card";

interface Recipe {
  id: string;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
}

async function getRecipes(): Promise<Recipe[]> {
  const res = await fetch("http://localhost:3000/recipes");
  return res.json();
}

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main>
      <div className="grid grid-cols-3  gap-8">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center"> 
              <div><CardTitle>{recipe.title}</CardTitle>
              <CardDescription>{recipe.time} minutes</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {recipe.description}
            </CardContent>
            <CardFooter className="flex justify-between">
              <button>View Recipe</button>
              
              {recipe.vegan ? <p>Vegan</p> : null}
            </CardFooter>
          </Card>
          
        ))}
      </div>
    </main>
  );
}
