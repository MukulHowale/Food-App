let showData = (data,id) =>{
    id.style.display = "flex";
    id.style.flexDirection = "column";

    // console.log(data);

    data.forEach(({strMeal, strMealThumb, strInstructions}) =>{
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

        id.replaceChildren(img, h2, p);
    })

    // console.log(data);
}

export default showData;