import React, {useState} from 'react'

function Header() {

    const onKeyUpNum = e => {
        setText(2020-parseInt(e.target.value))
    }

    const onKeyUp = e => {
        let value = e.target.value
        setUpperText(value.toUpperCase())
    }

    const addElement = () => {
        people.push('Пункт')
        setPeople(people)
        setEachPerson(people.map((item, i) =>
            <li key={i}>[{i+1}] {item} <button onClick={() => deleteItem(i)}>Delete me</button></li>)
        )
    }

    const deleteItem = i => {
        people.splice(i, 1);
        setPeople(people)
        setEachPerson(people.map((item, i) =>
        <li key={i}>[{i+1}] {item} <button onClick={() => deleteItem(i)}>Delete me</button></li>))
    }

    const showText = () => {
        setIsShow(!isShow)
    }

    const showName = () => alert(person.name)

    const changeName = () => {
        setPerson({
            name: 'Коля',
            age: 30
        })
    }

    const showCity = smth => {
        setCity(smth.target.value)
    }

    const colorParagraph = e => {
        setStyles({
            backgroundColor: e.target.value
        })
    }

    const addOption = e => {
        setOptions([...options, e.target.value])
    }


    const [text, setText] = useState('')

    const [upperText, setUpperText] = useState('')

    const [isShow, setIsShow] = useState(false)
    
    const [person, setPerson] = useState({
        name: 'Иван',
        age: 25
    })

    const [people, setPeople] = useState(['Коля', 'Вася', 'Петя'])
    
    const [eachPerson, setEachPerson] = useState(people.map((item, i) =>
        <li key={i}>[{i+1}] {item} <button onClick={() => deleteItem(i)}>Delete me</button></li>) 
    )

    const stateShow = false

    const [city, setCity] = useState('')

    const [styles, setStyles] = useState({})

    const [options, setOptions] = useState(['Hello', 'How are you?', 'Decode'])

    const optionsBlocks= options.map((item, i) => <option value={item} key={i}>{item}</option>)


    
   

    return (
        <div>
            {person.name}<br/>{person.age}<br/>
            <button onClick={showName}>Show the name!</button><br/>
            <button onClick={changeName}>Chane name to "Коля"</button><br/><br/>

            {stateShow ? `Привет, ${person.name}`: `Пока, ${person.name}`}

            <ul>
                {eachPerson}
            </ul>

            <button onClick={addElement}>Add Element</button><br/><br/>

            <input onKeyUp={onKeyUpNum}/>
            {/* <p>{text.toUpperCase()}</p> */}
            <p>{text}</p>

            <input onKeyUp={onKeyUp}/>
            {/* <p>{text.toUpperCase()}</p> */}
            <p>{upperText}</p>
            {// {titles}
            // {isShow ? name : ``}
            // <button onClick={handleClick}>Click Me</button>
            }
            <input type="checkbox" onClick={showText} />
            <p>{isShow ? 'Some Text':''}</p>

            <select name="Cities" onChange={showCity}>
                <option value="Almaty">Almaty</option>
                <option value="Astana">Astana</option>
                <option value="Shymkent">Shymkent</option>
            </select>
            <p>{city}</p>

            <select name="Cities" onChange={colorParagraph}>
                <option value="#FF2D00">red</option>
                <option value="#00FF89">green</option>
                <option value="#0076FF">blue</option>
            </select>
            <p style={styles}>Some text goes here.</p>

            <input type="text" placeholder="some text..." onChange={getNewOption}/>
            <button onClick={addOption}>Add Option</button>
            <select name="some">
                {optionsBlocks}
            </select>

        </div>
    )
}

export default Header