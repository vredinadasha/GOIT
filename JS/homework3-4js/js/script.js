var gen = {
    title: "Тест по программированию",
    questions: ["1. Вопрос №1", "2. Вопрос №2", "3. Вопрос №3"],
    answers: [["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
             ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
             ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]],
    checkButton: "Проверить мои результаты",

    wrapElement: function(){
        div = document.createElement('div');
        div.classList.add('wrap');
        document.body.appendChild(div);
    },

    headElement: function (title) {
        var h1 = document.createElement('h1');
        h1.innerHTML = title;
        div.appendChild(h1);
    },

    render : function () {
        var q = this.questions.length;
        var answ, ul, p, label, input, textElem;

        for (var i = 0; i < q; i++){
            p = document.createElement('p');
            p.innerHTML = this.questions[i];
            div.appendChild(p);

            ul = document.createElement('ul');
            p.appendChild(ul);

            answ = this.answers[i].length;

            for (var j = 0; j < answ; j++){
                label = document.createElement('label');
                ul.appendChild(label);
                
                input = document.createElement('input');
                input.classList.add('checkbox');
                input.setAttribute('type', 'checkbox');
                label.appendChild(input);
                
                textElem = document.createTextNode(this.answers[i][j]);
                label.appendChild(textElem);
            }
        }
    },
    buttonElement: function (checkButton) {
        var btn = document.createElement('button');
        btn.classList.add('button');
        btn.innerHTML = checkButton;
        div.appendChild(btn);
    }
};

//gen.answers [0][1] = "Новый вариант ответа";
//gen.answers [1][3] = "Новый вариант ответа";
console.log(gen);
gen.wrapElement();
gen.headElement("Тест по программированию");
gen.render();
gen.buttonElement("Проверить мои результаты");