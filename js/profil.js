let namaId = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

// checked
let nodeJs = namaId('nextJs')
let nextJs = namaId('nextJs')
let reactJs = namaId('reactJs')
let typeScript = namaId('typeScript')


function addIcon(){
    if(nodeJs.checked === true){
        return ''
    }else if(nodeJs.checked === false){
        let iconNodeJs = classes('icon-nodeJs');
        iconNodeJs.classList.add('haha');
    }
}



const data = []

function addData(event){
    event.preventDefault()

    let title = namaId('input-title').value
    let content = namaId('input-content').value
    let image = namaId('input-upload').files

    let gambar = URL.createObjectURL(image[0])
    // console.log("gambar", image[0])
    console.log("gambar path", gambar)
 
    let blog = {
       title,
       content,
       gambar
    }
 
    data.push(blog)
    console.log(data)
    renderBlog()
    addIcon()

} 
function renderBlog(){
    namaId('content').innerHTML = ''

    for(let index = 0; index < data.length; index++){
        namaId('content').innerHTML +=
        `<div class="card-myproject">
            <img src="${data[index].gambar}" alt="">
            <h3>${data[index].title}</h3>
            <p>durasi: 3bulan</p>
            <p>${data[index].content}</p>
            <div class="icon-myproject">
                <img src="img/facebook.png" alt="" class='icon-nodeJs'>
                <img src="img/instagram.png" alt="" class='icon-nextjs'>
                <img src="img/twiter.png" alt="" class='icon-reactjs'>
                <img src="img/linkedin.png" alt="" class='icon-typescript'>
            </div>
            <div class="custom-myproject">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>`
    }
}