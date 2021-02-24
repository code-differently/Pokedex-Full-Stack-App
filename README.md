# Pokedex Full Stack App

![pickachu](https://media.giphy.com/media/xuXzcHMkuwvf2/giphy.gif)

You'll be creating a pokedex, a place to view info on all the Pokemon

## Requirements
* The user can view all the pokemon. 
* The user can view a picture of each pokemon.
* The user can view the pokemon name and number.
* The system will change the color of the card based on the Pokemons type. For example, yellow for electric.
* The system will initially fill the database with data from the PokeAPI

### Optional
* The user can search pokemon
* The user can view more attributes of each pokemon 
* The user can order pokemon by any attribute
* The user can filter pokemon by any attribute

## Mockup
![mockup](imgs/mockup.png)

## Model
|Pokemon|
| - |
| id: number |
| name: string |
| img: string |
| types: string[] |

## Service Contract
|Method|Path|Response
|-|-|-|
| GET | /pokemons | Pokemon[] |

## External Services
[PokeAPI](https://pokeapi.co/)

## Submission
Push to GitHub and create a pull request
