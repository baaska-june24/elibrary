import * as React from "react";
import Link from "next/link";
import "./style.css";


const alphabets_list = "абвгдеёжзийклмноөпрстуүфхцчшщэюяabcdefghijklmnopqrstuvwxyz".split(
  ""
);


const Alphabets = (props:any) => {

	const selected = props.selected.query;
	const jump_link = props.jump_link;

	const Character = (props:any) => {
		const char = props.char;
		let txt = char.toUpperCase();

		if (char === selected){
			return (
				<li key={char}>[{txt}]</li>
			)
		}

		return(
			<li key={char}>
	            <Link href={jump_link + '?query=' + char}>
	              <a>{txt}</a>
	            </Link>
	        </li>
		)
	}

	const All = () => {
		console.log('selected', selected)
		if (selected === '' || selected === undefined)
			return (
				<li key="all">
	                [Бүгд]
	            </li>
				)

		return (
			<li key="all">
	              <Link href={jump_link}>
	                <a>Бүгд</a>
	              </Link>
	            </li>
			)
	}


	return (
		<>
			<ul className="char-list">
	            <All />
	            { alphabets_list.map(char => (
	            	   <Character char={char} />
	            	))
	            }
	        </ul>
      </>
	)

}

export default Alphabets;