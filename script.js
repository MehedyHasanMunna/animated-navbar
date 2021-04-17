function allEventFunction() {
    const burger = document.querySelector('.burger')
    const navList = document.querySelector('.list')
    const listItem = document.querySelectorAll('.list li')
    const listItems = [...listItem]

    burger.addEventListener('click', function () {
        navList.classList.toggle('openMenu')
        burger.classList.toggle('cross')

        listItem.forEach((list,index) => {
            if(list.style.animation){
                list.style.animation=''
            }else{
                list.style.animation=`fadeAnimation .5s ease forwards ${index/7+0.3}s`
            }
        })
    })


}

allEventFunction()