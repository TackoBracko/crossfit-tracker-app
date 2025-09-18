import breakfast_burrito from './../assets/pictures/Recipe_img/breakfast_burrito.webp';
import chia_pudding from './../assets/pictures/Recipe_img/chia_pudding.webp';
import chicken_salad from './../assets/pictures/Recipe_img/chicken_salad.webp';
import chinese_chicken from './../assets/pictures/Recipe_img/chinese_chicken.webp';
import cottage_scramble_eggs from './../assets/pictures/Recipe_img/cottage_scramble_eggs.webp';
import dark_chocolate_dessert from './../assets/pictures/Recipe_img/dark_chocolate_dessert.webp';
import fruit_smoothie from './../assets/pictures/Recipe_img/fruit_smoothie.webp';
import green_smoothie from './../assets/pictures/Recipe_img/green_smoothie.webp';
import grilled_sandwich from './../assets/pictures/Recipe_img/grilled_sandwich.webp';
import oatmeal_cookies from './../assets/pictures/Recipe_img/oatmeal_cookies.webp';
import peanut_banana_smoothie from './../assets/pictures/Recipe_img/peanut_banana_smoothie.webp';
import salmon_fillets from './../assets/pictures/Recipe_img/salmon_fillets2.jpg';
import tomato_feta_pasta from './../assets/pictures/Recipe_img/tomato_feta_pasta.jpg';

export const recipeData = [
  {
    id: 0,
    title: 'Minute Breakfast Burrito',
    type: 'breakfast',
    image: breakfast_burrito,
    ingredients: ['2 large eggs', '2 tablespoons salsa', '1 slice reduced-fat American cheese', '1 (10-inch) flour tortilla'],
    direction: [
      'Crack eggs into a microwave-safe bowl; whisk until combined.',
      'Microwave on high until almost set, about 1–2 minutes.',
      'Stir in salsa and cheese until melted.',
      'Place mixture into tortilla, fold, and serve warm.',
    ],
  },
  {
    id: 1,
    type: 'breakfast',
    title: 'Creamy Cottage Cheese Scrambled Eggs',
    image: cottage_scramble_eggs,
    ingredients: ['4 eggs', '¼ cup cottage cheese', 'butter (for pan)', 'salt and pepper to taste'],
    direction: [
      'Whisk eggs in a bowl until well blended.',
      'Melt butter in a skillet over medium heat.',
      'Add eggs and cook, stirring gently.',
      'Stir in cottage cheese, season with salt and pepper, and serve.',
    ],
  },
  {
    id: 2,
    type: 'breakfast',
    title: 'Grilled Cheese Sandwich',
    image: grilled_sandwich,
    ingredients: ['2 slices bread', '2 slices cheese', '2 tablespoons butter'],
    direction: [
      'Butter one side of each bread slice.',
      'Place one slice, buttered side down, in a skillet.',
      'Top with cheese and second slice of bread, buttered side up.',
      'Cook until golden brown on both sides and cheese melts.',
    ],
  },

  {
    id: 3,
    type: 'lunch',
    title: 'Chinese Chicken Fried Rice II',
    image: chinese_chicken,
    ingredients: [
      '2 cups cooked rice',
      '1 cup diced cooked chicken',
      '2 eggs, lightly beaten',
      '2 green onions, chopped',
      'soy sauce to taste',
      'oil for frying',
    ],
    direction: [
      'Heat oil in a wok or skillet over medium-high heat.',
      'Scramble eggs, then push to the side of the pan.',
      'Add chicken and cook until heated through.',
      'Stir in rice, green onions, and soy sauce.',
      'Cook while stirring for 5 minutes, then serve.',
    ],
  },
  {
    id: 4,
    type: 'lunch',
    title: 'Basic Chicken Salad',
    image: chicken_salad,
    ingredients: ['2 cups chopped cooked chicken', '½ cup mayonnaise', '½ cup chopped celery', 'salt and pepper to taste'],
    direction: [
      'In a large bowl, combine chicken, mayonnaise, and celery.',
      'Mix until well coated.',
      'Season with salt and pepper to taste.',
      'Chill before serving.',
    ],
  },
  {
    id: 5,
    type: 'dinner',
    title: 'Baked Salmon Fillets Dijon',
    image: salmon_fillets,
    ingredients: ['4 salmon fillets', '3 tablespoons Dijon mustard', 'salt and pepper to taste', '½ cup fresh bread crumbs', '¼ cup butter, melted'],
    direction: [
      'Step 1: Gather all ingredients. Preheat the oven to 400 degrees F (200 degrees C). Line a shallow baking pan with aluminum foil.',
      'Step 2: Place salmon fillets skin-side down on the prepared baking pan. Spread a thin layer of mustard on top of each fillet; season with salt and pepper.',
      'Step 3: Top with bread crumbs, then drizzle with melted butter.',
      'Step 4: Bake in the preheated oven until salmon flakes easily with a fork, about 15 minutes.',
      'Step 5: Serve and enjoy',
    ],
  },
  {
    id: 6,
    type: 'dinner',
    title: 'Tomato Feta Pasta',
    image: tomato_feta_pasta,
    ingredients: [
      '1 pint cherry tomatoes',
      '1 block feta cheese',
      '3 cloves garlic, minced',
      '2 tablespoons olive oil',
      'salt and pepper to taste',
      'fresh basil, chopped',
      '8 oz pasta, cooked',
    ],
    direction: [
      'Preheat oven to 400°F (200°C).',
      'Place tomatoes and feta in a baking dish, drizzle with olive oil, season with salt and pepper.',
      'Bake 30–35 minutes until tomatoes burst and feta softens.',
      'Stir in garlic and basil.',
      'Mix with cooked pasta and serve warm.',
    ],
  },

  {
    id: 7,
    type: 'smoothie',
    title: 'Peanut Butter Banana Smoothie',
    image: peanut_banana_smoothie,
    ingredients: ['2 bananas', '2 tablespoons peanut butter', '1 cup milk', '1 tablespoon honey (optional)', 'ice cubes'],
    direction: [
      'Add bananas, peanut butter, milk, and honey to a blender.',
      'Blend until smooth.',
      'Add ice cubes and blend again until creamy.',
      'Pour into a glass and serve immediately.',
    ],
  },
  {
    id: 8,
    type: 'smoothie',
    title: 'Fruit and Yogurt Smoothie',
    image: fruit_smoothie,
    ingredients: ['1 cup frozen fruit (berries, mango, etc.)', '1 banana', '1 cup yogurt', '½ cup orange juice'],
    direction: [
      'Combine fruit, banana, yogurt, and orange juice in a blender.',
      'Blend until smooth and creamy.',
      'Taste and adjust sweetness if needed.',
      'Serve chilled.',
    ],
  },
  {
    id: 9,
    type: 'smoothie',
    title: 'Green Monster Smoothie',
    image: green_smoothie,
    ingredients: ['1 banana', '1 cup spinach', '1 tablespoon peanut butter', '1 cup milk (or almond milk)'],
    direction: [
      'Place banana, spinach, peanut butter, and milk in a blender.',
      'Blend on high until smooth.',
      'Add more milk if desired for consistency.',
      'Pour into a glass and enjoy fresh.',
    ],
  },

  {
    id: 10,
    type: 'dessert',
    title: 'Amazing Healthy Dark Chocolate',
    image: dark_chocolate_dessert,
    ingredients: ['dark chocolate (70%+)', 'nuts (almonds, walnuts)', 'dried fruit (cranberries, raisins)'],
    direction: [
      'Melt dark chocolate in a microwave or double boiler.',
      'Stir in nuts and dried fruit until coated.',
      'Spread mixture on parchment paper.',
      'Let cool until firm, then break into pieces and serve.',
    ],
  },
  {
    id: 11,
    type: 'dessert',
    title: 'Chocolate Chia Seed Pudding',
    image: chia_pudding,
    ingredients: ['¼ cup chia seeds', '1 cup milk (dairy or plant)', '2 tablespoons cocoa powder', '1–2 tablespoons honey or maple syrup'],
    direction: [
      'In a bowl, whisk together milk, cocoa powder, and honey.',
      'Stir in chia seeds until evenly distributed.',
      'Cover and refrigerate for at least 4 hours or overnight.',
      'Stir before serving and top with fruit if desired.',
    ],
  },
  {
    id: 12,
    type: 'dessert',
    title: 'Healthy Oatmeal Cookies with Honey',
    image: oatmeal_cookies,
    ingredients: ['2 cups rolled oats', '1 cup whole wheat flour', '½ cup honey', '½ cup coconut oil', '½ cup raisins'],
    direction: [
      'Preheat oven to 350°F (175°C).',
      'In a bowl, mix oats, flour, honey, and coconut oil until combined.',
      'Fold in raisins.',
      'Scoop dough onto baking sheet.',
      'Bake 10–12 minutes until golden brown.',
      'Cool before serving.',
    ],
  },
];
