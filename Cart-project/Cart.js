let maleSection=document.querySelector("#male")
let femaleSection=document.querySelector("#female")
let kidsSection=document.querySelector("#kids")
let input=document.querySelector("#search > input");
let searchBtn=document.querySelector("#search > button")
let searchResult=document.querySelector("#search > div")

async function product(){
    //accessing data from server
    let datafromServer=await fetch("https://www.shoppersstack.com/shopping/products/alpha");

    let resultObj=await datafromServer.json();
    let{data}=resultObj;
//dividing the data according to category
   let menData= data.filter((e)=>{
        if(e.category=="men"){
            return e;
        }
    });

    let womenData=data.filter((e)=>{
        if(e.category=="women"){
            return e;
        }
    });

    let kidsData=data.filter((e)=>{
        if(e.category=="kids"){
            return e;
        }
    });

    let electronicData=data.filter((e)=>{
        if(e.category=="electronic"){
            return e;
        }
    });
    //printing in HTML
    function allProducts(section,e){

    }

   menData.map((e)=>{
       // first way

        let divelement=document.createElement("div");
        divelement.id=e.productId;
        maleSection.append(divelement);

        let imgElement=document.createElement("img")
        imgElement.src=e.productImageURLs[0];

        let nameElement=document.createElement("h1")
        nameElement.innerHTML=e.name

        let priceElement=document.createElement("h2");
        priceElement.innerHTML=`Price: Rs.${e.price}`

        let ratingElement=document.createElement("h2");
        ratingElement.innerHTML=`Rating: ${e.rating}`

        let btn=document.createElement("button");
        btn.innerHTML=`Add to Cart`

        divelement.append(imgElement,nameElement,priceElement,ratingElement,btn);

        //second way
        // menData.map((e)=>{
        //     allProducts(maleSection,e)
        // })

   });

    womenData.map((e)=>{
        //first way

        let divelement=document.createElement("div");
        divelement.id=e.productId;
        femaleSection.append(divelement);

        let imgElement=document.createElement("img")
        imgElement.src=e.productImageURLs[0];

        let nameElement=document.createElement("h1")
        nameElement.innerHTML=e.name

        let priceElement=document.createElement("h2");
        priceElement.innerHTML=`Price: Rs.${e.price}`

        let ratingElement=document.createElement("h2");
        ratingElement.innerHTML=`Rating: ${e.rating}`

        let btn=document.createElement("button");
        btn.innerHTML=`Add to Cart`

        divelement.append(imgElement,nameElement,priceElement,ratingElement,btn);

        //second way

        // womenData.map((e)=>{
        //     allProducts(maleSection,e)
        // })

    });

    

    // console.log(menData);
    // console.log(womenData);
    // console.log(kidsData);
    // console.log(electronicData);

    //search products
    searchBtn.addEventListener("click",()=>{
       let searchProduct= data.filter((e)=>{
        if(e.name.toLowerCase().includes(input.value.toLowerCase())){
            return e;
        }

        });
        console.log(searchProduct);
        searchProduct.map((e)=>{
            let divelement=document.createElement("div");
            divelement.id=e.productId;
            searchResult.append(divelement);
    
            let imgElement=document.createElement("img")
            imgElement.src=e.productImageURLs[0];
    
            let nameElement=document.createElement("h1")
            nameElement.innerHTML=e.nameElement
    
            let priceElement=document.createElement("h2");
            priceElement.innerHTML=`Price: Rs.${e.price}`
    
            let ratingElement=document.createElement("h2");
            ratingElement.innerHTML=`Rating: ${e.rating}`
    
            let btn=document.createElement("button");
            btn.innerHTML=`Add to Cart`
    
            divelement.append(imgElement,nameElement,priceElement,ratingElement,btn);
        });
        
        
    });
}
product();