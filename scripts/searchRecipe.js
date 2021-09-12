let textShadow = (t) =>{
    let tag = document.getElementById(`${t}`);
    tag.style.textShadow = "0px 0px 6px orange";
}

let searchRecipe = async (url) =>{
    let res = await fetch(url);

    let data = await res.json();

    return data;
}

let showD = (e,data) =>{

    let d = e.target.firstChild.innerText;

    let sd = document.getElementById('searchDiv');
    sd.style.display = "flex";
    sd.style.flexDirection = "column";
    // sd.style.alignItems = "center";

    let btn = document.createElement('button');
    btn.textContent = "BACK";
    btn.style.position = "absolute";
    btn.style.right = "50px";
    btn.style.top = "80px";
    btn.style.width = "70px";
    btn.style.height = "40px"
    btn.style.borderRadius = "10px";
    btn.style.backgroundColor = "rgb(255, 243, 225)";
    btn.style.border = "none";

    btn.onmousemove = () =>{
        btn.style.backgroundColor = "rgb(255, 218, 166)";
        btn.style.cursor = "pointer";
    }

    btn.onmouseleave = () =>{
        btn.style.backgroundColor = "rgb(255, 243, 225)";
    }

    btn.onclick = () =>{
        location.reload();
    }

    document.body.append(btn);

    data.forEach(({strMeal, strMealThumb, strInstructions}) =>{
        if(d == strMeal){
            let img = document.createElement('img');
            img.style.width = "100%";
            img.style.height = "90%";
            img.style.borderRadius = "10px";
            img.style.boxShadow = "0px 0px 8px 6px rgb(255, 218, 166)";
            img.src = strMealThumb;

            let h2 = document.createElement('h2');
            h2.textContent = strMeal;
            h2.style.color = "rgb(150, 94, 10)";
            h2.style.textAlign = "center";

            let p = document.createElement('p');
            p.style.textAlign = "center";
            p.style.fontWeight = "700"
            p.style.color = "rgb(150, 94, 10)";
            p.style.paddingBottom = "40px";
            p.style.lineHeight = "24px";
            p.textContent = strInstructions;

            sd.replaceChildren(img, h2, p);
            console.log(strMealThumb);
        }
    })

    console.log(data);

}

let append = (data,show,input) =>{

    input.style.borderBottomLeftRadius = "0px";
    input.style.borderBottomRightRadius = "0px";
    input.style.borderBottom = "3px solid rgb(255, 218, 166)";

    show.style.backgroundColor = "rgb(255, 243, 225)";

    show.innerHTML = null;

    data.forEach(({strMeal,strCategory}) =>{
        let div = document.createElement('div');
        div.addEventListener('click',() =>{
            showD(event, data);
        });
        div.style.paddingLeft = "20px";

        let h3 = document.createElement('h3');
        h3.textContent = strMeal;
        h3.style.marginTop = "10px";
        h3.style.width = "200px";
        h3.style.color = "rgb(150, 94, 10)";

        let h5 = document.createElement('h5');
        h5.textContent = strCategory;
        h5.style.marginTop = "18px";
        h5.style.marginBottom = "29px";
        h5.style.width = "100px";
        h5.style.color = "rgb(150, 94, 10)";

        div.append(h3,h5);

        show.append(div);
    })

    show.onmouseover = () => {
        show.style.cursor = "pointer";
    }

    if(data.length >= 4){
        show.style.overflow = "scroll";
        show.style.overflowX = "hidden";
        show.style.borderBottomLeftRadius = "20px";
    }
    else if(data.length == 4){
        show.style.borderBottomRightRadius = "20px";
        if(show.style.overflowY){
          show.style.overflowY = "hidden";
        }
    }
    else{
        show.style.overflow = "hidden";
        show.style.borderBottomLeftRadius = "20px";
        show.style.borderBottomRightRadius = "20px";
        show.style.border = "0px";
    }    

    // console.log(data);
}

export {searchRecipe, append, textShadow};