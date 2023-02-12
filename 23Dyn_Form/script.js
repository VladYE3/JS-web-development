
let formDef1 =
[
  { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
  { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
  { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
  { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
  {
    label: 'Рубрика каталога:', kind: 'combo', name: 'division',
    variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
  },
  {
    label: 'Размещение:', kind: 'radio', name: 'payment',
    variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
  },
  { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
  { label: 'Описание сайта:', kind: 'memo', name: 'description' },
  { label: 'Опубликовать:', kind: 'submit' },
];

let formDef2 =
[
  { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
  { label: 'Имя:', kind: 'longtext', name: 'firstname' },
  { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
  { label: 'Возраст:', kind: 'number', name: 'age' },
  { label: 'Зарегистрироваться:', kind: 'submit' },
];

function buildForm(fD, fE) {
let tag;
let carry;
fD.forEach(elem => {
  let fL = document.createElement('label');
  fL.innerHTML = elem.label;
  fE.appendChild(fL);
  if (elem.kind == 'longtext') {
    tag = document.createElement('input');
    tag.type = 'text';      
    fE.appendChild(tag);
    carry = document.createElement('br');
    fE.appendChild(carry);      
  };
  if (elem.kind == 'number') {
    tag = document.createElement('input');
    tag.type = 'number';      
    fE.appendChild(tag);
    carry = document.createElement('br');
    fE.appendChild(carry);
  };
  if (elem.kind == 'shorttext') {
    tag = document.createElement('input');
    tag.type = 'text'; 
    fE.appendChild(tag);
    carry = document.createElement('br');
    fE.appendChild(carry);
  };
  if (elem.kind == 'combo') {
    tag = document.createElement('select');
    fE.appendChild(tag);
    carry = document.createElement('br');
    fE.appendChild(carry);
    elem.variants.forEach(elemLevel2 => {
      let tagOption = document.createElement('option');
      tagOption.setAttribute('value', elemLevel2.value);
      tagOption.textContent = elemLevel2.text;
      tag.appendChild(tagOption);
    });
  };
  if (elem.kind == 'radio') {
    elem.variants.forEach(elemLevel2 => {
      tag = document.createElement('input');
      tag.type = 'radio';
      tag.name = "payment";
      tag.setAttribute('value', elemLevel2.value);          
      let newSpanRadio = document.createElement('span');
      newSpanRadio.textContent=elemLevel2.text; 
      fE.appendChild(tag);
      fE.appendChild(newSpanRadio);
      carry = document.createElement('br');
      fE.appendChild(carry);
    });
  };  
  if (elem.kind == 'check') {
    tag = document.createElement('input');
    tag.type = 'checkbox'; 
    fE.appendChild(tag);
    carry = document.createElement('br');
    fE.appendChild(carry);
  };
  if (elem.kind == 'memo') {
    tag = document.createElement('textarea');
    tag.style.cssText = 'width: 400px; height: 50px';
    fE.appendChild(tag);
    carry = document.createElement('br');
    fE.appendChild(carry);
  };
  if (elem.kind == 'submit') {
    tag = document.createElement('input');
    tag.type = 'submit';
    tag.value = elem.label;;
    fE.appendChild(tag);
    carry = document.createElement('br');
    fE.appendChild(carry);
    fE.removeChild(fL);
  };
  if (elem.name == 'sitename') {
    tag.name = 'sitename';
  };
  if (elem.name == 'siteurl') {
    tag.name='siteurl';
  };
  if (elem.name == 'visitors') {
    tag.name='visitors';
  };
  if (elem.name == 'email') {
    tag.name='email';
  };
  if (elem.name == 'division') {
    tag.name='division';
  };
  if (elem.name == 'votes') {
    tag.name='votes';
  };
  if (elem.name == 'description') {
    tag.name='description';
  };    
  if (elem.name == 'lastname') {
    tag.name='lastname';
  };
  if (elem.name == 'firstname') {
    tag.name='firstname';
  };
  if (elem.name == 'secondname') {
    tag.name='secondname';
  };
  if (elem.name == 'age') {
    tag.name='age';
  };   

});
} buildForm(formDef1, document.forms.f1);
buildForm(formDef2, document.forms.f2);


