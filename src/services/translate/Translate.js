const Translate = {
	getTranslator(props){
		return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate
			?key=trnsl.1.1.20181231T221250Z.4d67216206707d64.d468da76ec6d4318ab754d21f27d0b17a095bcc6
			&text=${props}
			&lang=en-pt&format=plain`);
	}
}

export default Translate;