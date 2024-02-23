/**
La méthode .map() en ReactJS est utilisée pour itérer sur un tableau et renvoyer un nouveau tableau avec des éléments modifiés. 
Elle est couramment utilisée pour rendre une liste d'éléments de manière dynamique. 
Voici un exemple d'utilisation de .map() pour rendre une liste d'éléments :
import React from 'react';
  function App() {
    const items = ['pomme', 'banane', 'orange'];

    return (
      <div>
        <h1>Liste d'éléments</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  export default App;
  nous avons un tableau d'éléments ['pomme', 'banane', 'orange']. 
  Nous utilisons .map() pour itérer sur le tableau et renvoyer un nouveau tableau d'éléments <li> avec le nom de l'élément comme contenu textuel. 
  La propriété key est utilisée pour identifier de manière unique chaque élément de la liste.
  Notez que la méthode .map() renvoie un nouveau tableau et ne modifie pas le tableau d'origine. 
  De plus, la propriété key est importante pour des raisons de performance et doit être un identifiant unique pour chaque élément de la liste.
  il existe plusieurs façons de créer une clé unique pour chaque élément dans une liste. 
  Voici quelques exemples :
    Utiliser un identifiant unique provenant des données : 
    Si vous avez des données avec un identifiant unique, vous pouvez l'utiliser comme clé. Par exemple :
      const items = [ { id: 1, name: 'apple' }, { id: 2, name: 'banana' }, { id: 3, name: 'orange' }, ];
      <ul> {items.map((item) => ( <li key={item.id}>{item.name}</li> ))} </ul>

  Si vous n'avez pas d'identifiant unique dans les données, vous pouvez utiliser l'index de l'élément dans le tableau comme clé.
    <ul> {items.map((item, index) => ( <li key={index}>{item}</li> ))}</ul>
    Cependant, cela peut causer des problèmes si l'ordre des éléments dans le tableau change.
    
  Il existe des bibliothèques telles que UUID qui peuvent générer des clés uniques pour vous.
    import { v4 as uuidv4 } from 'uuid';
    const items = ['apple', 'banana', 'orange'];
    <ul>{items.map((item) => (<li key={uuidv4()}>{item}</li>))}</ul>

 */

/**
 * Exercice 1 : Création d'une liste simple
Créez un composant React qui rend une liste de 3 ou 4 noms. 
Utilisez une boucle pour parcourir un tableau de noms et affichez-les à l'aide d'éléments JSX <li>. 
Ajoutez des clés uniques à chaque élément de la liste.

import React from "react";

const NameList = () => {
  const names = ["Alice", "Bob", "Charlie", "David"];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default NameList;
 nous avons une liste de noms dans le tableau names. Nous utilisons la méthode .map() pour parcourir le tableau et créer un élément <li> pour chaque nom. La clé unique est générée en utilisant l'index de chaque élément dans le tableau
////////////////////
Exercice 2 : Doublage de nombres
Écrivez une fonction qui prend un tableau de nombres en entrée et renvoie 
un nouveau tableau où chaque nombre est doublé à l'aide de la méthode .map().
entrée : [1, 2, 3, 4, 5]
Sortie attendue : [2, 4, 6, 8, 10]

function doubleNumbers(numbers) {
  const doubled = numbers.map((number) => number * 2);
  return doubled;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

///////////////////////////
Exercice 3 : Affichage de produits
Créez une liste de produits à partir d'un tableau d'objets de produits. 
Chaque produit devrait avoir un nom, un prix et une image. 
Utilisez .map() pour générer des composants de produit qui affichent ces informations.
import React from 'react';

function ProductList({ products }) {
  
  return (
    <div>
      <h1>Liste de produits</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Prix : {product.price} €</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
/////////////////
import React from 'react';
import ProductList from './ProductList'; // Assurez-vous d'importer le composant ProductList
import './App.css';

function App() {
  const products = [
    {
      id: 1,
      name: 'Produit 1',
      price: 10.99,
      description: 'Description du produit 1...',
      image: 'https://picsum.photos/200/300/?random=1', // URL de l'image du produit 1
    },
    {
      id: 2,
      name: 'Produit 2',
      price: 19.99,
      description: 'Description du produit 2...',
      image: 'https://picsum.photos/200/300/?random=2', // URL de l'image du produit 2
    },
    {
      id: 3,
      name: 'Produit 3',
      price: 14.99,
      description: 'Description du produit 3...',
      image: 'https://picsum.photos/200/300/?random=3', // URL de l'image du produit 3
    },
    // Ajoutez d'autres produits ici...
  ];

  return (
    <div className="App">
      <h1>Mon Application de Produits</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;


*/
