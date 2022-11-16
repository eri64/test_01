window.addEventListener('load', function () {
    var arrow_l = this.document.querySelector('.arrow_l');
    var arrow_r = this.document.querySelector('.arrow_r');
    var focus = this.document.querySelector('.focus');
    focus.addEventListener('mousemove', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
    })
    focus.addEventListener('mouseout', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
    })

    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    for (var i = 0; i < ul.children.length; i++) {
        var li = this.document.createElement('li');
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
        })
    }
    ol.children[0].className = 'current';

    arrow_l
})