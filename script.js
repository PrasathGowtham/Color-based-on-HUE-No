


async function foo() {
    let res = document.getElementById("inputcolor").value;
    var url =`https://x-colors.herokuapp.com/api/random/=
    ${res}`;
    let result = await fetch(url);
    let result1 = await result.json();
    //console.log(result1.country[0].country_id);
    document.getElementById("colordiv").style.backgroundColor =result1.hex;
  

  }