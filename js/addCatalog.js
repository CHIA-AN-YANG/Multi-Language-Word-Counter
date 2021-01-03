

//====press add btn====//
const addTypearea = $('.add-typearea')
const plusBtn = $('.plus-btn')
const catalog = $('.addCatalog-container')
const closeBtns = $('.close-btn')

plusBtn.on('click',function(){
    const text = $('.add-typearea').text();
    $('.lang-btn').removeClass('selected')
    $('.close-btn').removeClass('selected')
    let rowAdded =  `<div class="addCatalog lang-btn selected"><span class="addCatalog lang-text">${text}</span><span class="addCatalog close-btn selected">+</span></div>`
    catalog.append(rowAdded)
})

addTypearea.keydown(function(e){
    const code = e.keyCode || e.which;
	if (code===13){
        e.preventDefault();
        plusBtn.trigger('click');
        addTypearea.text('')
	}
})


catalog.on('click','.lang-btn',function(e){
        // e.stopPropagation;
        $('.lang-btn').removeClass('selected')
        $('.close-btn').removeClass('selected')
        $(e.currentTarget).addClass('selected')
        $('.close-btn',e.currentTarget).addClass('selected')
        //console.log($(e.currentTarget).text()+' is selected.')
    
})

catalog.on('click','.close-btn',function(e){
    $(e.currentTarget).parent().remove();

})
