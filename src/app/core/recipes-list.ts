export interface recipesListing{
  images: string;
  title: string;
  infoTime: string;
  infoLevel: string;
  infoPerson: string;
  text: string;
}

export const recipesList: recipesListing[]= [
  {
    images: 'assets/images/home/chef-recipes-1.png',
    title: 'FRENCH CREPES',
    infoTime: '45min',
    infoLevel: 'Medium',
    infoPerson: '2',
    text: 'In France, pancakes made from yeast-free dough, crepes, are very popular. The most famous French pancakes are "Suzette," with a bright orange flavor. But crepes are not only...'
  },
  {
    images: 'assets/images/home/chef-recipes-2.png',
    title: 'STEAK WITH ROSEMARY',
    infoTime: '15min',
    infoLevel: 'Medium',
    infoPerson: '4',
    text: 'The New York steak is cut from the loin of the bulls back at the head of the tenderloin. The delicate texture of the steak and the beef flavor put it on a winning pedestal next to...'
  },
  {
    images: 'assets/images/home/chef-recipes-3.png',
    title: 'APPETIZER WITH SHRIMPS',
    infoTime: '25min',
    infoLevel: 'Medium',
    infoPerson: '6',
    text: 'Pleasant and familiar in taste but unusual in form, this appetizer of cucumbers and shrimp will appeal to all guests. If you want to surprise your friends with your unusual holiday table...'
  },
]
