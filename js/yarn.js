function Yarn(name, varName, viewID){
    this.NAME = name;
    this.length = 0;
    this.varName = varName;
    this.view = document.getElementById(viewID);

    this.init = ()=> this.view = document.getElementById(viewID);

    this.add = function(typeYarn, yarnDesc, nameBrand, yarnColour, yarnQuantity, numContainer ){
        if(this[typeYarn] === undefined)
            this.length++;
        this[typeYarn] = { yarnDesc, nameBrand, yarnColour, yarnQuantity, numContainer };
    };
    this.del = function(typeYarn){
        if(this[typeYarn] !== undefined){
            delete this[typeYarn];
            this.length--;
        }
        
    };
    this.search = num => Object.keys(this)[num];

    this.getTable = function(){
        let page = ['<table border=1 style="margin-top:20px"><tr><th>Вид пряжи</th><th>Описание</th><th>Марка<br>Название линейки</th><th>Цвет</th><th>Количество</th><th>Место хранения</th><th>Действия</th></tr>'];
        for(let yarnName in this)
            page.push(`<tr>
                <td>${yarnName}</td>
                <td>${this[yarnName].yarnDesc}</td>
                <td>${this[yarnName].nameBrand}</td>
                <td>${this[yarnName].yarnColour}</td>
                <td>${this[yarnName].yarnQuantity}</td>
                <td>${this[yarnName].numContainer}</td>
                <td><input type=button value="Удалить" onclick="${this.varName}.remove('${yarnName}');"></td>
                </td></tr>`
            );
        page.push('</table>');
        return page.join('');
    }

    this.save = keyName => {
        if(!this.keySave){
            this.keySave = keyName;
            Object.defineProperty(this, 'keySave', {enumerable: false});
        }
        localStorage[this.keySave] = JSON.stringify(this);
    }
    this.load = keyName => {
        if(!this.keySave){
            this.keySave = keyName;
            Object.defineProperty(this, 'keySave', {enumerable: false});
        }
        if(localStorage[this.keySave])
            Object.assign(this, JSON.parse(localStorage[keyName]));
    }

    this.draw = function(){
        this.view.innerHTML = this.getTable();
    }

    this.remove = function(yarnName){
        this.del(yarnName);
        this.draw();
        this.save();
    }

    let configField = {enumerable: false};
    Object.defineProperties(this, {
        varName: configField,
        length: configField,
        add: configField,
        del: configField,
        search: configField,
        getTable: configField,
        save: configField,
        load: configField,
        draw: configField,
        init: configField,
        view: configField,
        remove: configField,
        NAME: {
            writable: false,
            enumerable: false
        },
        descript: {
            enumerable: false,
            get: () => 'count:' + this.length,
            set: value => this.add(value, '???')
        },
        name: {
            enumerable: false,
            get: () => this.NAME,
            set: value => this.add(value, '!!!')
        }
    });

    Yarn.count++;
}

//Yarn.prototype.test = 123
Yarn.fabricMethod = function(){};
Yarn.count = 0;

String.prototype.splitParams = function(){
    let paramsStr = this.split('&'),
        result = {};

    for(let paramStr of paramsStr){
        let param = paramStr.split('=');
        result[param[0]] = param[1];
    }

    return result;
}

