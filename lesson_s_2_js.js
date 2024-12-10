//1
console.log("1--------------------------------------------------------------------------");
let st=""
console.log("1, 2, 3=================================================");
const arr=[
 {name: "apple", calories: 100,price:6,
    print:function(){ let st=""
        for (const key of Object.keys(this)) {
        if(typeof(this[key])!=='function')
        st+=(key+": "+this[key]+" ")
    }console.log(st);}},
 {name: "orange", calories: 10,price:2,
 print:function(){ let st=""
        for (const key of Object.keys(this)) {
        if(typeof(this[key])!=='function')
        st+=(key+": "+this[key]+" ")
    }console.log(st);}}]
let fruit=new Object()  
fruit.name="cherry"
fruit.calories=89
fruit.price=678
fruit.print=function(){ let st=""
        for (const key of Object.keys(this)) {
        if(typeof(this[key])!=='function')
        st+=(key+": "+this[key]+" ")
    }console.log(st);}
arr.push(fruit)
console.log("4=================================================");

for (const item of arr) {
    item.print()
}
console.log("5=================================================");
arr[0].color="red"
console.log("6=================================================");
for (const item of arr) {
    if("color" in item){
        item.print()
    }
}
console.log("7=================================================");

for (item in arr[0]) {
    if(typeof(this[item])!=='function'){
       st+=item+": "+arr[0][item]+",  "
    }
}
console.log(st);
console.log("8=================================================");
delete arr[1].price
arr[1].print()
console.log("9=================================================");
function changePrice() {
    let p=document.getElementById("in1").value
    arr[0].price=p
    arr[0].print()
}
console.log("10=================================================");
function changeCalories() {
 let c=document.getElementById("in2").value
 let temp=arr.filter(item=>item.calories<c)
 for (const item of temp) {
   item.print()
}
}
console.log("11=================================================");
for (const item of arr) {
    Object.defineProperty(item,"Valid_price",{set(value){
         if(value>=10&& value<=10000){
            item.price=value
         }
    }})
}
arr[0].Valid_price=24 //cheking
arr[0].print()
console.log("12=================================================");
//2
console.log("2--------------------------------------------------------------------------");
console.log("1=================================================");
function MessageBox(f_color,g_color, img, massag={title:"", center:""},) {
    this.f_color=f_color
    this.g_color=g_color
    this.img=img
    this.massag={...massag}
    this.render=function() {

        const d=document.createElement("div")
        document.body.append(d)

        const h=document.createElement("h1")
        h.textContent=this.massag.title
        d.append(h)

        const c=document.createElement("p")
        c.textContent=this.massag.center
        d.append(c)

        d.style.backgroundColor=this.g_color
        d.style.color=this.f_color_color

        const i=document.createElement("img")
        i.src=this.img
        d.append(i)
    }
}
console.log("2=================================================");
const info=new MessageBox("black", "grey","",{title:"info", center:"gyewfqhgrsa"})
const warning=new MessageBox("black", "red","",{title:"warning", center:"gyewfqhgrsa"})
const error=new MessageBox("black", "yellow","",{title:"error", center:"gyewfqhgrsa"})
info.render()
warning.render()
error.render()
console.log("3=================================================");
const bigArr=[{ info:info,},{warning:warning},{error:error}]
function saveDetails(e) {
    e.preventDefault()
    let type= document.getElementById("s").value
    bigArr[0].massag[title]=document.getElementById("title").value
    bigArr[0].massag[title]=document.getElementById("center").value
    for (const item of bigArr) {
        item.render()
    }
}
