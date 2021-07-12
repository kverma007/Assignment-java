let cards=[
    {
        image:"https://i.pinimg.com/474x/79/9e/0e/799e0e87dae2c7a9985990b2424a5b82--ground-type-tattoo-ideas.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://assets.metrolatam.com/do/2016/08/31/1char-1600x800.jpg",
        value:1,
        status:"closed"
    },
    {    
        image:"https://i.pinimg.com/474x/79/9e/0e/799e0e87dae2c7a9985990b2424a5b82--ground-type-tattoo-ideas.jpg",
        value:2,
        status:"closed"
    },
    {    
        image:"https://static.wikia.nocookie.net/pokemon/images/5/5c/May_Squirtle.png/revision/latest?cb=20150909043542",
        value:2,
        status:"closed"
    },
    {   image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Pok%C3%A9mon_Snorlax_art.png/220px-Pok%C3%A9mon_Snorlax_art.png",
        value:3,
        status:"closed"
    },
    {   image:"https://i.pinimg.com/474x/ac/a3/18/aca3182e4777a94bba85e4a477dc79ad.jpg",
    value:3,
    status:"closed"
},
    {
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Pok%C3%A9mon_Snorlax_art.png/220px-Pok%C3%A9mon_Snorlax_art.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.dlpng.com/static/png/6034569-pikachu-pikachu-pokemon-drawing-free-png-images-clipart-picachu-png-920_661_preview.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://e7.pngegg.com/pngimages/706/358/png-clipart-pokemon-mystery-dungeon-blue-rescue-team-and-red-rescue-team-pokemon-heartgold-and-soulsilver-totodile-pokemon-go-kawai-marine-mammal-vertebrate.png",
        value:5,
        status:"closed"
    },
    {
        image:"https://e7.pngegg.com/pngimages/706/358/png-clipart-pokemon-mystery-dungeon-blue-rescue-team-and-red-rescue-team-pokemon-heartgold-and-soulsilver-totodile-pokemon-go-kawai-marine-mammal-vertebrate.png",
        value:5,
        status:"closed"
    },
]

for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}


let cardsCopy=cards;




function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCards(${index})">
                </div>
            </div>     
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;

}



displayCards(cards);


let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCards(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount==2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reset after one guess
            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("GAME OVER");
            location.reload();
        }

    }

    displayCards(cards);

}