var that;
class Tab {
    constructor(id) {
        // get element
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('.firstnav ul')
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
        // init event
        this.updateNode();
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
        }
        this.add.onclick = this.addTab;

    }
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.close');
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
    }
    // 1.Toggle
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    // 2.Add
    addTab() {
        that.clearClass();
        var li = '<li class="liactive"><span>test</span><span class="close"></span></li>'
        var section = '<section class="conactive">test</section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 3.Remove
    removeTab(e) {
        e.stopPropagation();
        this.parentNode.previousElementSibling.click();
        this.parentNode.remove();
        that.init();
    }
    // 4.Edit
    editTab() {
        // dblclick disable select text
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text">'
        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
    }

    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
}
new Tab("#tab");