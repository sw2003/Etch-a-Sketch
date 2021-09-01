window.onload = function(){
    const container = document.querySelector(".container")
    const clear_button = document.getElementById("clear")
    const size_button = document.getElementById("size")

    for (let i = 0; i <= 15; i++){
        let flex_container = document.createElement('div')
        flex_container.classList.add('flexbox-container')
        container.appendChild(flex_container)
        
        for (let i = 0; i <= 15; i++){
            let colored = false

            let flex_item = document.createElement('div')
            flex_item.classList.add('flexbox-item') 
            flex_container.appendChild(flex_item)

            flex_item.addEventListener("mouseenter", function(e){
                if(e.buttons == 1 || e.buttons == 3){
                    flex_item.style.backgroundColor = "black";       
                }    
            })
        }
    }

    clear_button.addEventListener("click", function(){
        let button_list = document.querySelectorAll(".flexbox-item")
        button_list.forEach(function(item, index){
            item.style.backgroundColor = "#dfdfdf"
        })
    })

    size_button.addEventListener("click", function(){
        let width = prompt("type your size")

        let container = document.querySelector(".container")

        let flex_box_containers = document.querySelectorAll(".flexbox-container")
        flex_box_containers.forEach(function(item, index){
            container.removeChild(item)
        })


        for (let i = 0; i <= width-1; i++){
            let flex_container = document.createElement('div')
            flex_container.classList.add('flexbox-container')
            container.appendChild(flex_container)
            
            for (let i = 0; i <= width-1; i++){
                let size = 500/width + "px"
    
                let flex_item = document.createElement('div')
           
                flex_item.classList.add('flexbox-item') 
                flex_container.appendChild(flex_item)
                flex_item.style.height = size
                flex_item.style.width = size

                console.log(500/width)
    
                flex_item.addEventListener("mouseover", function(e){
                    if(e.buttons == 1 || e.buttons == 3){
                        flex_item.style.backgroundColor = "black";       
                    }

                })
            }
        }

    })
}

